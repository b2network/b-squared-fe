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
      background: 'url("/assets/footer_bg.svg") no-repeat center center',
      backgroundSize: 'cover',
      color: 'white',
      p: { xs: '20px 20px 0 20px', md: '103px 20px 0 20px' },
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin:'auto'
      }}>
        <Box data-aos='fade-down' sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-end', mb: '16px' }}>
          <Box>
            <Typography sx={{ fontSize: isMobile ? '20px' : '40px', fontWeight: 600 }}>Subscribe to Our Newsletter</Typography>
            <EmailSender />
            <Typography sx={{ fontSize: isMobile ? '16px' : '24px', fontWeight: 600, wordSpacing: '-3px' }}>By subscribing, you accepted our Policy</Typography>
          </Box>
          <Box>
            {
              !isMobile && <Logo color='#fff' />
            }
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            fontSize: isMobile ? '12px' : '24px',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: isMobile ? 400 : 600,
            py: isMobile ? '10px' : '50px'
          }}>
          <Box>© 2023 B² Network - All rights reserved</Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Box mr={'20px'}>Join our Community</Box>
            <OuterLink />
          </Box>
        </Box>
      </Box>
    </Box>

  );
};

export default Footer;
