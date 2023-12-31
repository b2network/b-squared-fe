import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react'
import { BtcConnectorName, Network } from './types'
import { Connector, ConnectorOptions } from './connectors/types'
import { UnisatConnector } from './connectors/Unisat'
import { OkxConnector } from './connectors/Okx'
import { ec as EC } from 'elliptic';
import { keccak256 } from "viem";
import { getAddress } from "viem/utils";
import { XverseConnector } from './connectors/Xverse'
import { removeWalletFromStore, saveWalletToStore } from '@/utils'

type Action =
  | { type: 'on connect'; connectorName: BtcConnectorName }
  | { type: 'connect failed' }
  | { type: 'connected'; connectorName: BtcConnectorName; address: string; publicKey: string; network: Network }
  | { type: 'account changed'; address: string; publicKey: string }
  | { type: 'network changed'; network: Network }
  | { type: 'disconnected' }

type Dispatch = (action: Action) => void

export type SendBtcParams = {
  from?: string,
  to: string,
  amount: string
}
interface State {
  isConnecting: boolean
  isConnected: boolean
  address?: string
  publicKey?: string
  connectorName?: BtcConnectorName
  network?: Network
}

type BtcProviderProps = { children: React.ReactNode }

const BtcContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

const btcReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'on connect': {
      return {
        ...state,
        isConnecting: true,
        connectorName: action.connectorName,
      }
    }

    case 'connect failed': {
      return {
        ...state,
        isConnecting: false,
        connectorName: undefined,
      }
    }

    case 'connected': {
      console.log('state: ', state)
      return {
        isConnecting: false,
        isConnected: true,
        connectorName: action.connectorName,
        address: action.address,
        publicKey: action.publicKey,
        network: action.network,
      }
    }

    case 'disconnected': {
      return {
        isConnecting: false,
        isConnected: false,
        connectorName: undefined,
        address: undefined,
        publicKey: undefined,
        network: undefined,
      }
    }

    case 'account changed': {
      return { ...state, address: action.address, publicKey: action.publicKey }
    }

    case 'network changed': {
      return { ...state, network: action.network }
    }

    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

export const BtcProvider = ({ children }: BtcProviderProps) => {
  const [state, dispatch] = useReducer(btcReducer, {
    isConnecting: false,
    isConnected: false,
    connectorName: undefined,
    address: undefined,
    publicKey: undefined,
    network: undefined,
  })

  return <BtcContext.Provider value={{ state, dispatch }}>{children}</BtcContext.Provider>
}

const useBtcContext = () => {
  const ctx = useContext(BtcContext)
  if (ctx === undefined) {
    throw new Error('useBtc must be used within a BtcProvider')
  }

  return ctx
}

export const useBtc = () => {
  const ctx = useBtcContext()
  const {
    publicKey,
    connectorName,
    address
  } = ctx.state
  const defaultConnectorOptions: ConnectorOptions = useMemo(
    () => ({
      onAccountsChanged: (address, publicKey) => {
        ctx.dispatch({
          type: 'account changed',
          address,
          publicKey,
        })
      },
      onNetworkChanged: (network) => {
        ctx.dispatch({
          type: 'network changed',
          network,
        })
      },
      onDisconnect: () => {
        ctx.dispatch({ type: 'disconnected' })
      },
    }),
    [ctx],
  )

  const ConnectorMap: Record<BtcConnectorName, Connector> = useMemo(
    () => ({
      Unisat: new UnisatConnector(defaultConnectorOptions),
      OKX: new OkxConnector(defaultConnectorOptions),
      Xverse: new XverseConnector(defaultConnectorOptions)
    }),
    [defaultConnectorOptions],
  )

  const connector = useMemo(() => {
    if (ctx.state.connectorName) {
      return ConnectorMap[ctx.state.connectorName]
    }
  }, [ConnectorMap, ctx.state.connectorName])

  const disconnect = useCallback(() => {
    ctx.dispatch({ type: 'disconnected' })
    connector?.disconnect()
    removeWalletFromStore()
  }, [connector, ctx])

  const connect = useCallback(
    async (connectorName: BtcConnectorName) => {
      try {
        if (ctx.state.isConnected) {
          disconnect()
        }

        // TODO: avoid dispatch if is connected
        ctx.dispatch({
          type: 'on connect',
          connectorName,
        })

        const { address, publicKey, network } = await ConnectorMap[connectorName].connect()
        saveWalletToStore(connectorName)
        ctx.dispatch({
          type: 'connected',
          connectorName,
          address,
          publicKey,
          network,
        })
        return true
      } catch (error) {
        ctx.dispatch({ type: 'connect failed' })
        throw error
      }
    },
    [ConnectorMap, ctx, disconnect],
  )

  const provider = useMemo(() => {
    return connector?.getProvider()
  }, [connector])

  const signMessage = useCallback(
    async (message?: string) => {
      return connector?.signMessage(message)
    },
    [connector],
  )
  const sendBitcoin = useCallback(
    async (params: SendBtcParams) => {
      return connector?.sendBitcoin(params)
    },
    [connector],
  )

  const ethAddress = useMemo(() => {
    if (!publicKey) {
      return
    }
    const ec = new EC('secp256k1')
    const key = ec.keyFromPublic(publicKey, 'hex')
    const uncompressed = key.getPublic().encode('hex', false).slice(2);
    const address = keccak256(Buffer.from(uncompressed, 'hex')).slice(66 - 40);
    return getAddress(`0x${address}`)
  }, [publicKey])

  return { ...ctx.state, ethAddress, connect, disconnect, connector, signMessage, provider, sendBitcoin }
}
