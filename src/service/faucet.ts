import { FaucetUrl } from "@/utils";

const claimB2 = async (address: string) => {
  const url = `${FaucetUrl}to_address=${address}`
  const response = await fetch(url);
  return response.json()
}

export default claimB2;