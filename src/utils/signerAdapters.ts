import { Connector as BTCConnector  } from '@/wallets/btcWallet/connectors/types'
import { SignTypedDataParams, SmartAccountSigner } from '@b2network/aa-sdk'
import { Hex, WalletClient, concatHex, keccak256, zeroAddress } from 'viem'

const dummySigner = {
  getAddress: async () => zeroAddress,
  signMessage: async () => '0x' as `0x${string}`,
  signTypedData: async () => '0x' as `0x${string}`,
}

export const convertWalletClientToAccountSigner = (
  client: WalletClient | null
): SmartAccountSigner => {
  if (!client) {
    return dummySigner
  }
  return {
    async getAddress() {
      return Promise.resolve((await client.getAddresses())[0] as `0x${string}`)
    },
    async signMessage(message: Uint8Array | Hex | string) {
      const sig = await client.signMessage({
        account: client.account!,
        message:
          typeof message === 'string'
            ? message
            : {
                raw: message,
              },
      })
      return concatHex(['0x00', sig])
    },
    async signTypedData(params: SignTypedDataParams) {
      const sig = await client.signTypedData({
        ...params,
        account: client.account!,
      })
      return concatHex(['0x00', sig])
    },
  }
}

export const convertBTCConnectorToAccountSigner = (
  connector: BTCConnector  | null
): SmartAccountSigner => {
  if (!connector) {
    return dummySigner
  }
  return {
    async getAddress() {
      if (connector.address) {
        return connector.address as any
      }
      return connector.connect().then(({ address }) => address as any)
    },
    async signTypedData() {
      throw new Error('signTypedData: unimplemented')
    },
    async signMessage(message: Uint8Array | Hex | string) {
      let textMsg
      if (message instanceof Uint8Array) {
        textMsg = `0x${Buffer.from(message).toString('hex')}`
      } else {
        textMsg = message
      }
      const vrsSigBuff = await connector
        .signMessage(textMsg)
        .then((encoded) => Buffer.from(encoded, 'base64'))
      const rsvSigBuff = Buffer.concat([
        Buffer.from(vrsSigBuff.subarray(1)),
        Buffer.from([vrsSigBuff[0]]),
      ])
      return concatHex([`0x01`, `0x${rsvSigBuff.toString('hex')}`])
    },
  }
}

export const convertBTCConnectorToDummyAccountSigner = (
  connector: BTCConnector | null
): SmartAccountSigner => {
  if (!connector) {
    return dummySigner
  }
  const DUMMY_MSG = keccak256(
    Buffer.from('Blocked by support of SHA256 precompiled contract', 'utf-8')
  )
  return {
    async getAddress() {
      if (connector.address) {
        return connector.address as any
      }
      return connector.connect().then(({ address }) => address as any)
    },
    async signTypedData() {
      throw new Error('signTypedData: unimplemented')
    },
    async signMessage(message: Uint8Array | Hex | string) {
      message
      const vrsSigBuff = await connector
        .signMessage(DUMMY_MSG)
        .then((encoded) => Buffer.from(encoded, 'base64'))
      const rsvSigBuff = Buffer.concat([
        Buffer.from(vrsSigBuff.subarray(1)),
        Buffer.from([vrsSigBuff[0]]),
      ])
      return concatHex([`0x01`, `0x${rsvSigBuff.toString('hex')}`])
    },
  }
}
