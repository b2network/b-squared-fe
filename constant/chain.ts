import { Chain } from 'wagmi'

export const B2TestNet = {
  // id: 111111,
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
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    // multicall3: {
    //   address: '0xca11bde05977b3631167028862be2a173976ca11',
    //   blockCreated: 11_907_934,
    // },
  },
} as Chain;


export const TokenContract = '0x58e276ceF25b7f2d4C254A80c5e905BE216bFdc8'
export const BridgeContract = '0xc36b7CB7722b6932Ed62E90C299bae21C337c536'
export const DepositToAddress = 'tb1qkptdsusxkscavuds2audfc6p67zu3rl0zmn7zu'
