import { AA_REGISTRY_URL } from "@/utils";



const fetchScaAddress = async (address: string) => {
  const url = `${AA_REGISTRY_URL}/${address}`
  const response = await fetch(url);
  return response.json()
}
export default fetchScaAddress