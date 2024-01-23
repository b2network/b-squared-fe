import { AddressPurpose, BitcoinNetworkType, Recipient, SendBtcTransactionOptions, getAddress, sendBtcTransaction } from 'sats-connect'
import { SendBtcParams } from '..'
import { ConnectorNotFoundError } from '../errors'
import { BtcConnectorName, Network } from '../types'
import { AccountsChangedHandler, Connector, ConnectorOptions, DisconnectHandler, NetworkChangedHandler } from './types'
import { toast } from 'react-toastify'


const Net: Network = 'testnet'

export class XverseConnector implements Connector {
  name: BtcConnectorName
  address?: string
  publicKey?: string;
  onAccountsChanged?: AccountsChangedHandler
  onNetworkChanged?: NetworkChangedHandler
  onDisconnect?: DisconnectHandler

  constructor(options?: ConnectorOptions) {
    this.name = 'Xverse'
    this.onAccountsChanged = options?.onAccountsChanged
    this.onNetworkChanged = options?.onNetworkChanged
    this.onDisconnect = options?.onDisconnect
  }

  getProvider() {
    if (typeof window === 'undefined') return
    if (typeof window.XverseProviders === 'undefined') {
      // alert('Unable to successfully connect to wallet.')
      // return
      return new ConnectorNotFoundError()
    }
    return window.XverseProviders
  }

  async connect() {
    try {
      const getAddressOptions = {
        payload: {
          purposes: ['payment'] as AddressPurpose[],
          message: 'Address for receiving Ordinals and payments',
          network: {
            type: 'Testnet' as BitcoinNetworkType
          },
        },
        onFinish: (res: any) => {
          console.log(res, 'connect-xverse')
          const userInfo = res.addresses[0]
          this.address = userInfo.address;
          this.publicKey = userInfo.publicKey
        },
        onCancel: () => { 
          toast.error('User rejected!')
          throw new Error('User reject error!')
        }
      }
      await getAddress(getAddressOptions);
      if (!this.address) { }
      return { address: this.address || '', publicKey: this.publicKey || '', network: Net }
    } catch (error) {
      console.log('connnector error: ', error)
      throw error
    }
  }
  disconnect(): void {
    // window.location.reload()
  }

  signMessage: (message?: string) => Promise<string> = (message) => {
    const provider = this.getProvider()
    return provider.signMessage(message) as Promise<string>
  }
  sendBitcoin: (params: any) => Promise<string> = async (params: SendBtcParams) => {
    let tx = ''
    const sendBtcOptions = {
      payload: {
        network: {
          type: "Testnet",
        },
        recipients: [
          {
            address: params.to,
            amountSats: BigInt(params.amount),
          } as Recipient
        ],
        senderAddress: params.from,
      },
      onFinish: (response: any) => {
        tx = response
      },
      onCancel: () => { },
    } as SendBtcTransactionOptions
    await sendBtcTransaction(sendBtcOptions);
    if (!tx) throw new Error('failed')
    return tx
  }
}
