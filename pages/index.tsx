import {
  Box,
  Typography
} from '@mui/material';
import Layout from 'components/Layout';
import { ReactNode, useEffect } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import Top from 'components/Home/Top';
import ValueMission from 'components/Home/ValueMission';
import Properties from 'components/Home/Properties';
import Architecture from 'components/Home/Architecture';
import Partner from 'components/Home/Partner';
import Footer from 'components/Footer';

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Top />
      <ValueMission />
      <Properties />
      <Architecture />
      <Partner />
    </>
  )
}
Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Home
