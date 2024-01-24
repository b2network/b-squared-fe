import { useEffect, useMemo, useState } from "react";
import useSca from "./useSca";
import { formatUnits, isAddress } from "viem";
import { rpcB2Balance } from "@/service/rpcService";
import { isBtcAddress } from "@/utils/address";


const useB2Balance = (address: string) => {
  const [b2balance, setB2balance] = useState('')
  const sca = useSca(address || '');
  const finalAddress = useMemo(() => {
    if (address && isAddress(address)) {
      return address
    }
    if (address && sca && isBtcAddress(address)) {
      return sca
    }
    return ''
  }, [address, sca])
  const getB2Balance = async () => {
    if (isAddress(finalAddress)) {
      const res = await rpcB2Balance(finalAddress)
      const amount = BigInt(res)
      setB2balance(formatUnits(amount, 18))
    }
  }
  useEffect(() => {
    if (finalAddress) {
      getB2Balance()
    }
  }, [finalAddress])

  return b2balance
}

export default useB2Balance;