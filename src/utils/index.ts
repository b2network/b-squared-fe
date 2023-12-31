import { parseUnits } from "viem";


export function numFormat(num: number | string | undefined) {
  if (!num) {
    return '0';
  }
  const arr = num.toString().split('.');
  arr[0] = arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return arr.join('.');
}

export const isDev = process.env.NEXT_PUBLIC_APP_ENV === 'development';

export const shorterAddress = (addr: string) => {
  if (addr) {
    return addr.slice(0, 6) + '...' + addr.slice(-4)
  }
  return ''
}

export const parseBtcAmount = (amount: string) => {
  return parseUnits(amount, 8)
}

const addNetwork = () => {
  window.ethereum.request({
    method: 'wallet_addEthereumChain', // Metamask的api名称
    params: [{
      chainId: "0x80", // 网络id，16进制的字符串
      chainName: "HecoMain", // 添加到钱包后显示的网络名称
      rpcUrls: [
        'https://http-mainnet-node.huobichain.com', // rpc地址
      ],
      iconUrls: [
        'https://testnet.hecoinfo.com/favicon.png' // 网络的图标，暂时没看到在哪里会显示
      ],
      blockExplorerUrls: [
        'https://hecoinfo.com' // 网络对应的区块浏览器
      ],
      nativeCurrency: {  // 网络主币的信息
        name: 'HT',
        symbol: 'HT',
        decimals: 18
      }
    }]
  })
}

export const AA_REGISTRY_URL = 'https://aa-registry-test.bsquared.network/1002'
export const RPC_URL = 'https://zkevm-rpc.bsquared.network'
// export const pxTovw = (px: number): string => {
//   const base = 375;
//   return px * 100 / base + 'vw'
// }

export const primaryColor = '#FFA728'