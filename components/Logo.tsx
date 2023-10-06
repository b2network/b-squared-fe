import {
  Box,
  Typography,
  styled
} from '@mui/material';
import Layout from 'components/Layout';
import { ReactNode } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import Image from 'next/image';
import Link from 'next/link';
type Iprops = {
  color: string
}
const Logo: React.FC<Iprops> = ({color='#000'}) => {
  const isMobile = useIsMobile();

  return (
    <Link href='/' passHref >
    {
        isMobile ? <img style={{width:'48px'}} src='/assets/logo.svg' alt='logo' /> : <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img style={{ width: '48px', height: '48px' }} src='/assets/logo.svg' alt='logo' />
        <Typography sx={{
          fontFamily: 'Titillium Web',
          color: color,
          fontSize: '32px',
          fontWeight: 900,
          ml:'20px'
        }}>B² Network</Typography>
      </Box>
    }
  </Link>
  )
}

export default Logo;
