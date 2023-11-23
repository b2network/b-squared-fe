import { Contract, ethers } from 'ethers';


export type SingerOrProvider = ethers.Signer | ethers.providers.Provider;

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export function isAddress(value: any): string | false {
  try {
    return ethers.utils.getAddress(value);
  } catch {
    return false;
  }
}

export function getContract<T extends Contract = Contract>(address: string, ABI: any, provider: SingerOrProvider | undefined): T | undefined {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  if (!provider) return
  return new ethers.Contract(address, ABI, provider) as T;
}
