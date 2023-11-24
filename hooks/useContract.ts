import { useMemo } from "react";
import { getContract } from "utils/contract";
import BridgeAbi from 'constant/abi/bridge.json';
import { Signer, providers } from "ethers";
import { erc20ABI } from "wagmi";
import { BridgeContract, TokenContract } from "constant";

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

