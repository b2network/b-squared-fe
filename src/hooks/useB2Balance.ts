import { useEffect, useState } from "react";
import useSca from "./useSca";
import { formatUnits, isAddress } from "viem";
import { rpcB2Balance } from "@/service/rpcService";


const useB2Balance = (address: string) => {
  const [b2balance, setB2balance] = useState('')
  const sca = useSca(address || '');
  const getB2Balance = async () => {
    if (isAddress(sca)) {
      const res = await rpcB2Balance(sca)
      const amount = BigInt(res)
      setB2balance(formatUnits(amount, 18))
    }
  }
  useEffect(() => {
    if (sca) {
      getB2Balance()
    }
  }, [sca])

  return b2balance
}

export default useB2Balance;