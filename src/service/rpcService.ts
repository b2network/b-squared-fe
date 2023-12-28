import { rpcClient } from "./rpcClient"


const rpcB2Balance = async (adress: string) => {
  return rpcClient.request("eth_getBalance", [adress, 'latest'])
}

export {
  rpcB2Balance
}