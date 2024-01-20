'use client'
import Layout from "@/components/Layout"
import { StoreWalletKey } from "@/utils"
import { BtcConnectorName, useBtc } from "@/wallets/btcWallet"
import { ReactNode, useEffect } from "react"

const LayoutWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { connect } = useBtc()

  const init = () => {
    const connectName = localStorage.getItem(StoreWalletKey);
    if (connectName) {
      connect(connectName as BtcConnectorName)
    }
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <Layout showFooter={false}>{children}</Layout>
  )
}

export default LayoutWrapper