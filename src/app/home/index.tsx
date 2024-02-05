"use client"
import Top from '@/components/Home/Top';
import Properties from '@/components/Home/Properties';
import Architecture from '@/components/Home/Architecture';
import Values from '@/components/Home/Values';
import Missions from '@/components/Home/Missions';
import Layout from '@/components/Layout';
import Friends from '@/components/Home/FriendList';
import Banner from '@/components/Home/Banner';
import Invest from '@/components/Home/Invest';
import DataPart from '@/components/Home/DataPart'
import useIsMobile from '@/hooks/useIsMobile';

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <Layout >
      <Banner />
      <Top />
      <Invest />
      {isMobile ? null :  <DataPart />}

      <Values />
      <Missions />
      <Properties />
      <Architecture />
      <Friends />
    </Layout>
  )
}

export default Home
