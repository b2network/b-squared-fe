"use client"

import { Box, Button } from "@mui/material"
import Deposit from "@/components/Bridge/Deposit";
import Tab from "@/components/Bridge/Tab";
import { useState } from "react";
import Withdraw from "@/components/Bridge/Withdraw";
import * as bridgeStore from '@/stores/bridgeStore';
import { useSnapshot } from "valtio";
import { Address, Hex, padHex, parseEther } from 'viem'


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
  return (
    <Box sx={{
      margin: 'auto',
      width: '100%',
    }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        background: 'white',
        borderRadius: '12px',
        border: '1px solid black',
        padding: '0 20px 60px 20px'
      }}>
        <Box sx={{ display: 'flex', maxWidth: '540px', margin: 'auto', flexDirection: 'column', justifyContent: 'center', mt: '60px' }}>
          <Tab val={tab} handleClick={setTab} />
          {
            tab === 'deposit' && <Deposit />
          }
          {
            tab === 'withdraw' && <Withdraw />
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Bridge;
