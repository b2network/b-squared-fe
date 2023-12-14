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
              tab === 'withdraw' && <Withdraw />
            }
          </Box>
        </Box>
      }
    </Box>
  )
}

export default Bridge;
