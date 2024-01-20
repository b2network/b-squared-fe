import { DepositToAddress } from "@/constant";
import { HistoryRecord } from "@/typings/common";
import { HistoryUrl } from "@/utils";
import mempoolJS from "@mempool/mempool.js";
import { formatUnits, parseUnits } from "viem";

const getUnconfirmedTxs = async (address: string) => {
  const { bitcoin: { addresses } } = mempoolJS({
    hostname: 'mempool.space',
    network: 'testnet'
  });
  const addressTxs = await addresses.getAddressTxs({ address });
  const filteredTxs = addressTxs.filter(tx => {
    return !tx.status.confirmed && tx.vout.map(v => v.scriptpubkey_address).includes(DepositToAddress)
  })
  const times = await getUnConfirmTxTime(filteredTxs.map(v => v.txid))
  return filteredTxs.map((tx, i) => {
    const amount = tx.vout.filter(v => v.scriptpubkey_address === DepositToAddress).map(v => v.value).reduce((pre, cur) => pre + cur, 0)
    return {
      l1State: 'Unconfirmed',
      value: formatUnits(BigInt(amount), 8),
      time: times[i],
      hash: tx.txid,
      network: 'Testnet',
      state: 'Pending'
    } as HistoryRecord
  })

};

const getUnConfirmTxTime = async (txIds: string[]) => {
  if (txIds.length === 0) return;
  const ids = txIds.map(id => 'txId[]=' + id).join('&');
  const url = `https://mempool.space/testnet/api/v1/transaction-times?${ids}`
  const response = await fetch(url);
  return response.json()
}


const HistoryPageSize = 4;

const getConfirmedTx = async (address: string, pageNum: number) => {
  const url = `${HistoryUrl}?pageSize=${HistoryPageSize}&pageNum=${pageNum}&address=${address}`
  const response = await fetch(url);
  return response.json()
}

export { getUnconfirmedTxs, HistoryPageSize, getConfirmedTx };