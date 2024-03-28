import { FaucetUrl } from "@/utils";


export enum Network {
  Habitat = 'habitat',
  Haven = 'haven'
}

const claimB2 = async (address: string, network: Network) => {
  const url = `${FaucetUrl}to_address=${address}&network=${network}`
  const response = await fetch(url);
  return response.json()
}

export default claimB2;