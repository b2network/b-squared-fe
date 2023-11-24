import { getContract } from "utils/contract";

import { Signer } from "ethers";
import { BridgeContract } from "constant";
import BridgeAbi from "constant/abi/bridge.json";

export const getBrigeContract = (signer?: Signer) => {
  if(!signer)return
  return getContract(
    BridgeContract,
    BridgeAbi,
    signer
  )
};


// export const useErc20Contract = (provider: providers.Provider) => {
//   return useMemo(
//     () => getContract(TokenContract, erc20ABI, provider), [provider]
//   )
// }
