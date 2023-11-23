import Layout from 'components/Layout';
import { ReactNode, useEffect } from 'react';
import useIsMobile from 'hooks/useIsMobile';
import Top from 'components/Home/Top';
import Properties from 'components/Home/Properties';
import Architecture from 'components/Home/Architecture';
import Values from 'components/Home/Values';
import Missions from 'components/Home/Missions';

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Top />
      <Values />
      <Missions />
      {/* <ValueMission /> */}
      <Properties />
      <Architecture />
      {/* <Partner /> */}
    </>
  )
}
Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Home
