"use client"

import { Box, Button } from "@mui/material"
import Deposit from "@/components/Bridge/Deposit";
import Tab from "@/components/Bridge/Tab";
import Layout from "@/components/Layout";
import { ReactNode, useEffect, useState } from "react";
import Withdraw from "@/components/Bridge/Withdraw";
import * as bridgeStore from '@/stores/bridgeStore';
import { useSnapshot } from "valtio";
import Result from "@/components/Bridge/Result";


const Bridge = () => {
  const [tab, setTab] = useState('deposit')

  const snap = useSnapshot(bridgeStore.store);
  return (
    <Box sx={{ background: 'white', color: 'black', pb: '60px' }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        background: 'black',
      }}>
        {
          snap.showResult && <Box sx={{
            width: '100%',
            height: '100%',
            minHeight: 'calc(100vh - 203.5px)',
            background: 'white',
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
    </Box>
  )
}

export default Bridge;
