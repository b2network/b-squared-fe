import { isAddress } from 'viem'
import * as bitcoin from 'bitcoinjs-lib'
export const validateAddress = (addr: string) => {
  if (isAddress(addr)) return true
  if (isBtcAddress(addr)) return true
  return false
}

export function isBtcAddress(address: string) {
  const testnet = bitcoin.networks.testnet
  try {
    bitcoin.address.toOutputScript(address, testnet)
    return address
  } catch (error) {
    return false
  }
}
