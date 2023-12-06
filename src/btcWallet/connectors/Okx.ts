import { ConnectorNotFoundError } from '../errors'
import { BtcConnectorName, Network } from '../types'
import { AccountsChangedHandler, Connector, ConnectorOptions, DisconnectHandler, NetworkChangedHandler } from './types'

export class OkxConnector implements Connector {
  name: BtcConnectorName
  onAccountsChanged?: AccountsChangedHandler
  onNetworkChanged?: NetworkChangedHandler
  onDisconnect?: DisconnectHandler

  constructor(options?: ConnectorOptions) {
    this.name = 'OKX'
    this.onAccountsChanged = options?.onAccountsChanged
    this.onNetworkChanged = options?.onNetworkChanged
    this.onDisconnect = options?.onDisconnect
  }

  getProvider() {
    if (typeof window === 'undefined') return
    if (typeof window.okxwallet.bitcoin === 'undefined') {
      throw new ConnectorNotFoundError()
    }

    return window.okxwallet.bitcoin
  }

  async connect() {
    try {
      const provider = this.getProvider()

      if (provider.on) {
        provider.on(
          'connect',
          async ({ address, compressedPublicKey }: { address: string; compressedPublicKey: string }) => {
            if (address && compressedPublicKey) {
              this.onAccountsChanged&&this.onAccountsChanged(address, compressedPublicKey)
            }
          },
        )
        provider.on('disconnect', async () => {
          provider.removeAllListeners()
          this.onDisconnect&&this.onDisconnect()
        })
      }

      const { address, compressedPublicKey }: { address: string; compressedPublicKey: string } =
        await provider.connect()
      console.log(address,compressedPublicKey,'connected')
      return { address, publicKey: compressedPublicKey, network: 'livenet' as Network }
    } catch (error) {
      console.log('connnector error: ', error)
      throw error
    }
  }

  disconnect(): void {
    const provider = this.getProvider()
    provider.disconnect()
  }

  signMessage: (message?: string) => Promise<string> = (message) => {
    const provider = this.getProvider()
    const { address } = provider.selectedAccount
    return provider.signMessage(message, { from: address }) as Promise<string>
  }
}
