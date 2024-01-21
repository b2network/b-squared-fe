import { isAddress } from 'viem'
import * as bitcoin from 'bitcoinjs-lib'
export const validateAddress = (addr: string) => {
  if (isAddress(addr)) return true
  if (isBtcAddress(addr)) return true
  return false
}

function isBtcAddress(address: string) {
  try {
    bitcoin.address.fromBech32(address)
    return true
  } catch (error) {
    try {
      bitcoin.address.fromBase58Check(address)
      return true
    } catch (error) {
      return false
    }
  }
}
