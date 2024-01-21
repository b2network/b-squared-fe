import { isDev } from '@/utils';
import { Chain, defineChain } from 'viem'

export const B2TestNet = defineChain({
  id: 1102,
  name: 'B2Haven',
  network: 'B2Haven',
  nativeCurrency: {
    decimals: 18,
    name: 'BTC',
    symbol: 'BTC',
  },
  rpcUrls: {
    public: { http: ['https://roles-rpc.bsquared.network/'] },
    default: { http: ['https://roles-rpc.bsquared.network/'] },
  },
  blockExplorers: {
    etherscan: { name: 'B2Haven', url: 'https://testnet-role.bsquared.network/' },
    default: { name: 'B2Haven', url: 'https://testnet-role.bsquared.network/' },
  },
  contracts: {
    // multicall3: {
    //   address: '0xca11bde05977b3631167028862be2a173976ca11',
    //   blockCreated: 11_907_934,
    // },
  },
}) as Chain;

export const B2ChainId = 102;

export const TokenContract = '0x58e276ceF25b7f2d4C254A80c5e905BE216bFdc8'
export const BridgeContract = '0x242F01323962490E3BB2240B2f02970843F50ffA'
export const DepositToAddress = isDev ? 'tb1q8mxmujnzlhsdx4jkqdy0mx93t3ytt2sw4wselv' : 'tb1qvppxl2n983fk2qhq5rf4vkxshgje5cak863dhp'