"use client"
import Top from '@/components/Home/Top';
import Properties from '@/components/Home/Properties';
import Architecture from '@/components/Home/Architecture';
import Values from '@/components/Home/Values';
import Missions from '@/components/Home/Missions';
import Layout from '@/components/Layout';
import Friends from '@/components/Home/FriendList';
import Subscribe from '@/components/Subscribe';

const Home = () => {
  
  return (
    <Layout >
      <Top />
      <Values />
      <Missions />
      <Properties />
      <Architecture />
      <Friends />
      <Subscribe />
    </Layout>
  )
}

export default Home
