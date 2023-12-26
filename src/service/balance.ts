
import { formatUnits } from "ethers";
import mempool from "@mempool/mempool.js";
import { BtcConnectorName } from "@/wallets/btcWallet";

const getBtcBalance = async (to: string, type: BtcConnectorName) => {
  if (type === 'Unisat') {
    return getUnisatBtcBalance()
  }
  if (type === 'Xverse') {
    return getXverseBalance(to)
  }
};

const getUnisatBtcBalance = async () => {
  try {
    const res = await window.unisat.getBalance()
    return formatUnits(res.total, 8)
  } catch (error) {
    console.log(error, 'get-balance-err')
  }

}

const getXverseBalance = async (to: string) => {
  const {
    bitcoin: { addresses },
  } = mempool({
    hostname: "mempool.space",
    network: "testnet",
  });
  try {
    const addressTxsUtxo = await addresses.getAddressTxsUtxo({ address: to });
    const amount = formatUnits(
      addressTxsUtxo.map((v) => v.value).reduce((m, n) => m + n),
      8
    );
    return amount
  } catch (error) {
    console.log(error, 'get-balance-err')
  }

}

export {
  getBtcBalance
}