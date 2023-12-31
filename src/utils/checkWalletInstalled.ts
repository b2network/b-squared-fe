'use client'
import { BtcConnectorName } from "@/wallets/btcWallet"

const isUnisatInstalled = () => {
  return window && window.unisat
}
const isXverseInstalled = () => {
  return window && window.XverseProviders
}

const checkWalletInstalled = (wallet: BtcConnectorName) => {
  if (wallet === 'Unisat') {
    return isUnisatInstalled()
  }
  if (wallet === 'Xverse') {
    return isXverseInstalled()
  }
  return false
}

export default checkWalletInstalled;