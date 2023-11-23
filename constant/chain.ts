import { Chain } from 'wagmi'

export const B2TestNet = {
  // id: 111111,
  id:1002,
  name: 'B2ZKEVM',
  network: 'B2ZKEVM',
  nativeCurrency: {
    decimals: 18,
    name: 'SIBR',
    symbol: 'SIBR',
  },
  rpcUrls: {
    public: { http: ['http://43.159.49.76:10002'] },
    default: { http: ['http://43.159.49.76:10002'] },
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
export const BridgeContract = '0xe985fAc10a575c2721896f69969A801F41c81551'
