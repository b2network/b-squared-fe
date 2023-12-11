import { isDev } from "@/utils"
import { B2ChainId, B2TestNet } from "."
import { Chain } from 'viem'

const aaConfDev = {
  CHAIN_ID: B2ChainId,
  BUNDLER_BASE_URL: 'http://43.157.191.32:14337',
  ENTRYPOINT_ADDRESS: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  KERNEL_FACTORY_ADDRESS: '0x7516283Ff7090B8286E23a16f8b5b35B3ba541A2',
  KERNEL_IMPL_ADDRESS: '0x277A60Fe8b476df00295ed8D89aFca39F7f73187',
  SW_VALIDATOR_ADDRESS: '0xbf50c52aA54aB01a6a38ac7b4475bdF04e768319',
  SCA_REGISTRY_ADDRESS: '0x231aec684Ad0e63c2F4d176EddCE97A1B666247c',
  USE_DUMMY_BTC_SIGNER: true
}

const aaConfProd = {
  CHAIN_ID: B2ChainId,
  BUNDLER_BASE_URL: 'http://43.157.191.32:14337',
  ENTRYPOINT_ADDRESS: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
  KERNEL_FACTORY_ADDRESS: '0x7516283Ff7090B8286E23a16f8b5b35B3ba541A2',
  KERNEL_IMPL_ADDRESS: '0x277A60Fe8b476df00295ed8D89aFca39F7f73187',
  SW_VALIDATOR_ADDRESS: '0xbf50c52aA54aB01a6a38ac7b4475bdF04e768319',
  SCA_REGISTRY_ADDRESS: '0x231aec684Ad0e63c2F4d176EddCE97A1B666247c',
  USE_DUMMY_BTC_SIGNER: true
}
const aaConf = isDev ? aaConfDev : aaConfProd

export const KERNEL_FACTORY_ADDRESS = aaConf.KERNEL_FACTORY_ADDRESS as `0x${string}`;
export const BUNDLER_BASE_URL = aaConf.BUNDLER_BASE_URL;
export const ENTRYPOINT_ADDRESS = aaConf.ENTRYPOINT_ADDRESS as `0x${string}`;
export const KERNEL_IMPL_ADDRESS = aaConf.KERNEL_IMPL_ADDRESS as `0x${string}`;
export const SW_VALIDATOR_ADDRESS = aaConf.SW_VALIDATOR_ADDRESS as `0x${string}`;
export const SCA_REGISTRY_ADDRESS = aaConf.SCA_REGISTRY_ADDRESS as `0x${string}`;
export const USE_DUMMY_BTC_SIGNER = aaConf.USE_DUMMY_BTC_SIGNER;
export const BUNDLER_RPC_URL = `${BUNDLER_BASE_URL}/${aaConf.CHAIN_ID}`


const getSelectedChain = (): Chain => {
  return B2TestNet
}
export const selectedChain = getSelectedChain()


export const PM_BASE_URL= 'http://43.157.191.32:14338';
