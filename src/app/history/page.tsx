"use client"

import { getUnconfirmedTxs } from "@/service/history"
import { useBtc } from "@/wallets/btcWallet"
import { Box } from "@mui/material"
import { useCallback, useEffect, useState } from "react"
import IconBack from "@/assets/icons/icon_back.svg"
import { useRouter } from "next/navigation"
import Tab from "@/components/History/Tab"
import { HistoryRecord, HistoryTab } from "@/typings/common"
import HistoryList from "@/components/History/HistoryList"

const History = () => {
  const router = useRouter()
  const [currentTab,setCurrentTab] = useState<HistoryTab>(HistoryTab.Deposit)

  const goBack = () => { 
    router.back()
  }

  const handleTabChange = useCallback((t:HistoryTab) => { 
    setCurrentTab(t)
  },[])

  


  return (
    <Box sx={{
      background: 'white',
      p: '30px',
      border: '1px solid black',
      borderRadius:'12px'
    }}>
      <Top goBack={goBack} />
      <Tab current={currentTab} handleSelectTab={handleTabChange} />
      <HistoryList />
    </Box>
  )
}

const Top = ({ goBack }: { goBack: () => void }) => {
  return <Box sx={{ display: 'flex', flexDirection:'column',gap:'30px'}}>
    <IconBack onClick={goBack} />
    <Box sx={{ fontFamily: 'Hanson', fontSize: '30px', fontWeight: 700 }}>
      Bridge History
    </Box>
  </Box>
}

export default History

