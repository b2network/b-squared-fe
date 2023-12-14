import { Chain, defineChain } from 'viem'

export const B2TestNet =defineChain({
  id:1002,
  name: 'B2EVM',
  network: 'B2EVM',
  nativeCurrency: {
    decimals: 18,
    name: 'BTC',
    symbol: 'BTC',
  },
  rpcUrls: {
    public: { http: ['http://43.135.203.73:8123'] },
    default: { http: ['http://43.135.203.73:8123'] },
  },
  blockExplorers: {
    etherscan: { name: 'B2', url: 'http://43.135.203.73/' },
    default: { name: 'B2', url: 'http://43.135.203.73/' },
  },
  contracts: {
    // multicall3: {
    //   address: '0xca11bde05977b3631167028862be2a173976ca11',
    //   blockCreated: 11_907_934,
    // },
  },
} )as Chain;

export const B2ChainId = 1002;

export const TokenContract = '0x58e276ceF25b7f2d4C254A80c5e905BE216bFdc8'
export const BridgeContract = '0x3c950C4D15311dB39F85441316983b3845396C6d'
export const DepositToAddress = 'tb1q9j03nm97urq4vwkt3mhfh2hgfgwvq329yekdc2'
