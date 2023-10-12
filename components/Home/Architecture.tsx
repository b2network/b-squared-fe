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
      background: 'white',
      px: '20px',
      py: isMobile ? "20px" : '80px'
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Typography data-aos='fade-down' textAlign={'center'} mb={'21px'} color={'black'} fontSize={isMobile ? '25px' : '40px'} fontWeight={600}>Architecture of B²</Typography>
        <Box sx={{ width: '100%', border: '1px solid #eee',py:'20px',borderRadius:'6px' }}>
          <img className='hvr-grow' data-aos='fade-up' src="/assets/architecture.svg" style={{ width:isMobile?'85%':'65%',display:'block', margin: 'auto' }} alt="architeture" />
        </Box>
      </Box>
    </Box>
  )
}

export default Architecture;
