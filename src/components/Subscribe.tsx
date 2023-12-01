import { Box, styled, Typography } from '@mui/material';
import useIsMobile from '@/hooks/useIsMobile';
import Logo from './Logo';
import EmailSender from './Home/EmailSender';
import OuterLink from './OuterLink';

const Subscribe = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{
      background: 'white',
      borderRadius: '8px',
      p: '30px',
      border: '1px solid #000',
      borderTop:'none'
    }}>
      <Box data-aos='fade-down' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mb: '40px' }}>
        <Typography sx={{ fontSize: isMobile ? '20px' : '30px', textTransform: 'uppercase', fontFamily: 'Hanson', fontWeight: 700 }}>Subscribe to Our Newsletter</Typography>
        <EmailSender />
        <Typography sx={{ fontSize: isMobile ? '16px' : '20px', color: 'rgba(0,0,0,0.6)' }}>By subscribing, you accepted our Policy</Typography>
      </Box>
      <Box display={'flex'} justifyContent='space-between' data-aos='fade-up' data-aos-delay='300'>
        <OuterLink />
        <Logo color='#000' />
      </Box>
    </Box>
  );
};

export default Subscribe;
