"use client"
import Tab from '@/components/Ecosystem/Tab';
import Layout from '@/components/Layout';
import Banner from '@/components/Ecosystem/Banner';
import { useState } from 'react';
import useIsMobile from '@/hooks/useIsMobile';

const Ecosystem = () => {
  const isMobile = useIsMobile();
  const [tab, setTab] = useState(0)

  return (
    <Layout showFooter={false}>
      <Banner />
      <Tab val={tab} handleClick={(val)=>{setTab(val)}} />
    </Layout>
  )
}

export default Ecosystem;
