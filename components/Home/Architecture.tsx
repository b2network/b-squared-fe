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
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#000',
        p: '1px'
      }}>
        <Box sx={{ background: 'white',borderRadius: '8px',width:'100%',p:'30px' }}>
          <Typography data-aos='fade-down' fontFamily='Hanson' textAlign={'left'} mb={'30px'} color={'black'} fontSize={isMobile ? '25px' : '30px'} fontWeight={700}>Architecture of B²</Typography>
            <img className='hvr-grow' data-aos='fade-up' src="/assets/architecture.svg" style={{ width: isMobile ? '85%' : '100%', display: 'block', margin: 'auto' }} alt="architeture" />
        </Box>
      </Box>
    </Box>
  )
}

export default Architecture;
