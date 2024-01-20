'use client'
import Layout from "@/components/Layout"
import { ReactNode, useEffect } from "react"

const LayoutWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Layout showFooter={true} showAllFooter={false}>
      {children}
    </Layout>
  )
}

export default LayoutWrapper