import { Box, styled, Typography } from '@mui/material';
import styles from './Footer.module.scss';
import { Fragment } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import { fontSize } from '@mui/system';
import Logo from './Logo';
import EmailSender from './Home/EmailSender';
import OuterLink from './OuterLink';

const LINKS = [
  {
    path: '/assets/icon_medium.svg',
    href: 'https://radiocaca.medium.com/'
  },
  {
    path: '/assets/icon_twitter.svg',
    href: 'https://twitter.com/JazChain'
  },
  {
    path: '/assets/icon_tg.svg',
    href: 'https://t.me/RadioCaca'
  }, {
    path: '/assets/icon_discord.svg',
    href: 'https://discord.com/invite/34qREVgv3h'
  }
]


const Footer = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{
      background: 'white',
      color: 'black'
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        background: 'black',
        p: '1px'
      }}>
        <Box sx={{
          background: 'white',
          borderRadius: '8px',
          p: '30px'
        }}>
          <Box data-aos='fade-down' sx={{ display: 'flex', flexDirection:'column', alignItems:'flex-start', mb: '40px' }}>
            <Typography sx={{ fontSize: isMobile ? '20px' : '30px', fontFamily: 'Hanson', fontWeight: 700 }}>Subscribe to Our Newsletter</Typography>
            <EmailSender />
            <Typography sx={{ fontSize: isMobile ? '16px' : '20px',color:'rgba(0,0,0,0.6)' }}>By subscribing, you accepted our Policy</Typography>
          </Box>
          <Box display={'flex'} justifyContent='space-between'>
            <OuterLink />
            <Logo color='#000' />
          </Box>
        </Box>
      </Box>
      <Typography sx={{fontSize:'18px',mt:'20px',mb:'70px',textAlign:'center'}}>© 2023 B² Network – All rights reserved</Typography>
    </Box>
  );
};

export default Footer;
