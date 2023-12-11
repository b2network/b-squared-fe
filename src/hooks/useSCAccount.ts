import { KernelSmartContractAccount } from "@b2network/aa-sdk"
import { useEffect, useState } from "react"
import { Address } from "viem"
const useSCAccount = (sca?: KernelSmartContractAccount | null) => {
  const [address, setAddress] = useState<Address>()
  useEffect(() => {
    if (!sca) {
      return
    }
    console.log(sca,'scccc---aaaaa')
    sca.getAddress().then(addr => {
      setAddress(addr)
    }).catch(e => {
      console.log(e, 'get-address-errrrrrrrrrrrr')
    })
  }, [sca])
  return {
    address
  }
}

export default useSCAccount;