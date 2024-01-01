import { isDev } from '@/utils';
import { Chain, defineChain } from 'viem'

export const B2TestNet = defineChain({
  id: 1002,
  name: 'B2EVM',
  network: 'B2EVM',
  nativeCurrency: {
    decimals: 18,
    name: 'BTC',
    symbol: 'BTC',
  },
  rpcUrls: {
    public: { http: ['https://zkevm-rpc.bsquared.network/'] },
    default: { http: ['https://zkevm-rpc.bsquared.network/'] },
  },
  blockExplorers: {
    etherscan: { name: 'B2', url: 'https://zkevm-rpc.bsquared.network/' },
    default: { name: 'B2', url: 'https://zkevm-rpc.bsquared.network/' },
  },
  contracts: {
    // multicall3: {
    //   address: '0xca11bde05977b3631167028862be2a173976ca11',
    //   blockCreated: 11_907_934,
    // },
  },
}) as Chain;

export const B2ChainId = 1002;

export const TokenContract = '0x58e276ceF25b7f2d4C254A80c5e905BE216bFdc8'
export const BridgeContract = '0x3c950C4D15311dB39F85441316983b3845396C6d'
export const DepositToAddress = isDev ? 'tb1q8mxmujnzlhsdx4jkqdy0mx93t3ytt2sw4wselv' : 'tb1qvppxl2n983fk2qhq5rf4vkxshgje5cak863dhp'