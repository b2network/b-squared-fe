import Layout from "@/components/Layout"
import { ReactNode } from "react"

const LayoutWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout showFooter={false}>{children}</Layout>
  )
}

export default LayoutWrapper