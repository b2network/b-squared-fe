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
        <img style={{ width: isMobile ? '100px' : '196px' }} src={isMobile && color === '#fff' ? '/assets/logo_white.svg' : '/assets/logo.svg'} alt='logo' />
      }
    </Link>
  )
}

export default Logo;
