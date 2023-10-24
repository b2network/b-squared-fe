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
import LogoText from './SvgIcon/LogoText';
type Iprops = {
  color: string
}
const Logo: React.FC<Iprops> = ({ color = '#000' }) => {
  const isMobile = useIsMobile();

  return (
    <Link href='/' passHref >
      {
        isMobile ? <img style={{ width: isMobile ? '32px' : '48px' }} src='/assets/logo.svg' alt='logo' /> : <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '48px' }} src='/assets/logo.svg' alt='logo' />
          <LogoText sx={{width:'139px',height:'30px',ml:'20px'}} />
        </Box>
      }
    </Link>
  )
}

export default Logo;
