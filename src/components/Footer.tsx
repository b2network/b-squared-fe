import { Box, styled, Typography } from '@mui/material';
import useIsMobile from '@/hooks/useIsMobile';

const Footer = () => {
  return (
    <Box sx={{
      background: 'white',
      color: 'black'
    }}>
      <Typography sx={{fontSize:'18px',mt:'20px',mb:'70px',textAlign:'center'}}>© 2023 B² Network – All rights reserved</Typography>
    </Box>
  );
};

export default Footer;
