import fetchScaAddress from "@/service/fetchScaAddress"
import { useEffect, useState } from "react"


const useSca = (address: string) => {
  const [sca, setSca] = useState('')
  const getSca = async () => {
    if (address) {
      const res = await fetchScaAddress(address)
      setSca(res.result)
    }
  }
  useEffect(() => {
    if (address) getSca()
  }, [address])
  return sca
}

export default useSca;