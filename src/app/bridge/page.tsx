"use client"

import { Box, Button } from "@mui/material"
import Deposit from "@/components/Bridge/Deposit";
import Tab from "@/components/Bridge/Tab";
import { ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Withdraw from "@/components/Bridge/Withdraw";
import * as bridgeStore from '@/stores/bridgeStore';
import { useSnapshot } from "valtio";
import Result from "@/components/Bridge/Result";
import { useAccount, useConnect, useNetwork, useWalletClient } from "wagmi";
import { useBtc } from "@/wallets/btcWallet";
import {
  KernelSmartContractAccount,
  SimpleWeightedECDSAProvider,
  SmartAccountSigner,
} from '@b2network/aa-sdk'
import { Address, Hex, padHex, parseEther } from 'viem'
import { convertBTCConnectorToAccountSigner, convertBTCConnectorToDummyAccountSigner, convertWalletClientToAccountSigner } from "@/utils/signerAdapters";
import { USE_DUMMY_BTC_SIGNER, selectedChain } from "@/constant/aa.config";
import getValidatorProvider from "@/utils/getValidatorProvider";
import { toast } from 'react-toastify'
import useSCAccount from "@/hooks/useSCAccount";


interface SendOpts {
  onSubmit?: () => void
  onSuccess?: () => void
}

export type FuncSendUserOperation = (
  to: Address,
  value: `${number}`,
  opts?: SendOpts
) => Promise<void>

const Bridge = () => {
  const [tab, setTab] = useState('deposit')
  const snap = useSnapshot(bridgeStore.store);
  const threshold = 1;
  const {
    isConnected: isConnectedBTC,
    ethAddress: btcETHAddress,
    connector,
  } = useBtc()
  console.log(btcETHAddress,'btc-eth-address')
  const { address } = useAccount()
  const { data: walletClient } = useWalletClient()
  const caProvider = useRef<SimpleWeightedECDSAProvider | undefined>()
  const [sca, setSCA] = useState<KernelSmartContractAccount | null>()
  const { address: scaAddress } = useSCAccount(sca);
  const finalAddress = useMemo(() => {
    return address ?? btcETHAddress
  }, [address, btcETHAddress])
  const guardians = useMemo(()=>finalAddress?[finalAddress]:[],[finalAddress])
  const weights = useMemo(()=>finalAddress?[1]:[],[finalAddress])
  const ids = useMemo(() =>finalAddress?[padHex('0x', { size: 32 })]:[],[finalAddress])
 
  useEffect(() => {
    let signer: SmartAccountSigner | null = null
    if (walletClient) {
      signer = convertWalletClientToAccountSigner(walletClient)
    } else if (connector) {
      signer = (
        USE_DUMMY_BTC_SIGNER
          ? convertBTCConnectorToDummyAccountSigner
          : convertBTCConnectorToAccountSigner
      )(connector)
    }
    if (!signer) {
      return
    }
    if (!finalAddress) {
      return
    }
    getValidatorProvider(selectedChain, signer, {
      guardians,
      ids,
      weights,
      threshold,
    })
      .then((inst) => {
        caProvider.current = inst
        setSCA(inst.getAccount())
      })
      .catch((err) => {
        console.error(err)
      })
  }, [walletClient, connector?.name,finalAddress])

  const sendUserOperation = useCallback<FuncSendUserOperation>(
    async (to, value, { onSubmit, onSuccess } = {}) => {
      if (!caProvider.current) {
        return
      }
      try {
        const op = await caProvider.current.sendUserOperation({
          target: to,
          value: parseEther(value),
          data: '0x',
        })
        if (onSubmit) {
          onSubmit()
        }
        await caProvider.current.waitForUserOperationTransaction(
          op.hash as `0x${string}`
        )
        if (onSuccess) {
          onSuccess()
        }
        toast.success('Success!')
      } catch (err) {
        toast.error('Failed to submit transaction')
        console.error(err)
      }
    },
    []
  )

  return (
    <Box sx={{
      margin: 'auto',
      width: '100%',
    }}>
      {
        snap.showResult && <Box sx={{
          background:'white',
          width: '100%',
          height: '100%',
          minHeight: 'calc(100vh - 203.5px)',
          borderRadius: '12px',
          border: '1px solid black',
          pb: '60px'
        }}>
          <Result />
        </Box>
      }
      {
        !snap.showResult && <Box sx={{
          width: '100%',
          height: '100%',
          background: 'white',
          borderRadius: '12px',
          border: '1px solid black',
          pb: '60px'
        }}>
          <Box sx={{ display: 'flex', width: '540px', margin: 'auto', flexDirection: 'column', justifyContent: 'center', mt: '60px' }}>
            <Tab val={tab} handleClick={setTab} />
            {
              tab === 'deposit' && <Deposit />
            }
            {
              tab === 'withdraw' && <Withdraw caProvider={caProvider.current} scaAddress={scaAddress} />
            }
          </Box>
        </Box>
      }
    </Box>
  )
}

export default Bridge;
