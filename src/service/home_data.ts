import { odysseyStaticUrl, buzzStaticUrl } from "@/utils";

export const odysseyStaticData = async () => {
  const url = `${odysseyStaticUrl}/v1/statistics`
  const response = await fetch(url);
  return response.json()
}

export const buzzStaticData = async () => {
    const url = `${buzzStaticUrl}/api/static`
    const response = await fetch(url);
    return response.json()
}

