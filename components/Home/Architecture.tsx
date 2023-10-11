import {
  Box,
  Typography,
  styled
} from '@mui/material';
import Layout from 'components/Layout';
import { ReactNode } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import Image from 'next/image';

const Architecture = () => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{
      background: '#f8f8f8',
      px: '20px',
      py:isMobile?"20px":'80px'
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin:'auto'
      }}>
        <Typography data-aos='fade-down' textAlign={'center'} mb={'21px'} color={'black'} fontSize={isMobile ? '25px' : '40px'} fontWeight={600}>Architecture of B²</Typography>
        <img className='hvr-grow' data-aos='fade-up' src="/assets/architecture.svg" style={{ width: '100%' }} alt="architeture" />
      </Box>
    </Box>
  )
}

export default Architecture;
