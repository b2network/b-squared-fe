import { getContract } from "@/utils/contract";

import { Signer } from "ethers";
import { BridgeContract } from "@/constant";
import BridgeAbi from "@/constant/abi/bridge.json";
import { useMemo } from "react";

export const useBrigeContract = (signer?: Signer) => {
  return useMemo(
    () =>
      getContract(
        BridgeContract,
        BridgeAbi,
        signer
      ),
    [signer],
  );
};


// export const useErc20Contract = (provider: providers.Provider) => {
//   return useMemo(
//     () => getContract(TokenContract, erc20ABI, provider), [provider]
//   )
// }
