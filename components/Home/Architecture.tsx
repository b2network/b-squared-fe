import {
  Box,
  Typography,
  styled
} from '@mui/material';
import Layout from 'components/Layout';
import { ReactNode } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import Image from 'next/image';

const  Architecture= () => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{
      p:isMobile?'20px':'80px 100px',
      background:'#f8f8f8'
    }}>
      <Typography  data-aos='fade-down' textAlign={'center'} mb={'21px'} color={'black'} fontSize={isMobile?'25px':'40px'} fontWeight={600}>Architecture of B²</Typography>
      <img className='hvr-grow'  data-aos='fade-up' src="/assets/architecture.png" style={{width:'100%'}} alt="architeture" />
    </Box>
  )
}

export default Architecture;
