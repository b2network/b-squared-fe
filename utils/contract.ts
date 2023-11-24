import { Contract, ethers } from 'ethers';


export type SingerOrProvider = ethers.Signer | ethers.Provider;

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

export function isAddress(value: any): string | false {
  try {
    return ethers.getAddress(value);
  } catch {
    return false;
  }
}

export function getContract(address: string, ABI: any, provider: SingerOrProvider | undefined) {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return new Contract(address, ABI, provider);
}
