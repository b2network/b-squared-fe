import {
  Box,
  Typography,
  styled,
} from '@mui/material';
import React, { ReactNode } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ValueMission = () => {
  const isMobile = useIsMobile();
  const MissionBox = styled(Box)(({ }) => ({
    display: 'flex',
    alignItems: 'center',
    background: "#2A2A2A",
    borderRadius:'10px'
  }));
  return (
    <Box sx={{
      p: { xs: '20px', md: '80px 100px' },
      color: 'white',
      background: 'url("assets/mission_bg.svg") no-repeat center center',
      backgroundSize: 'cover',
      overflow: 'hidden'
    }}>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'flex-start', mb: '60px' }}>
        <Box fontSize={{ lg: '50px', md: '40px', sm: '30px', xs: '25px' }} fontWeight={600} mb={isMobile ? '20px' : 0} width={{ xs: 'auto', sm: '160px', lg: '210px' }} mr={{ xs: 0, sm: '30px', md: '100px' }} data-aos='fade-right'>Value</Box>
        <Typography fontSize={isMobile ? 18 : 28} data-aos='fade-left' flex={1}>
          Bitcoin, as the primary crypto asset, can evolve beyond a payment network.
          BTC-related assets require an ecosystem where DeFi, NFT, SocialFi, and other applications can thrive and flourish.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: isMobile ? 'column' : 'row' }}>
        <Box fontSize={{ lg: '50px', md: '40px', sm: '30px', xs: '25px' }} fontWeight={600} mb={isMobile ? '20px' : 0} mr={{ xs: 0, sm: '30px', md: '100px' }} width={{ xs: 'auto', sm: '160px', lg: '210px' }} data-aos='fade-right'>Mission</Box>
        <Box flex={1}>
          <MissionBox
            sx={{
              mb: '20px',
              p: { xs: '10px', md: '20px', lg: '54px 80px' },
            }}
            data-aos='fade-left'
          >
            <CheckCircleOutlineIcon sx={{ fontSize: isMobile ? '20px' : '48px', color: 'rgba(255, 184, 82, 1)' }} />
            <Typography ml={isMobile ? '10px' : '20px'} fontSize={isMobile ? '18px' : '28px'}>Build the most practical Bitcoin layer-2 network</Typography>
          </MissionBox>
          <MissionBox sx={{ p: { xs: '10px', md: '20px', lg: '54px 80px' }, }} data-aos='fade-left'>
            <CheckCircleOutlineIcon sx={{ fontSize: isMobile ? '20px' : '48px', color: 'rgba(255, 184, 82, 1)' }} />
            <Typography ml={isMobile ? '10px' : '20px'} fontSize={isMobile ? '18px' : '28px'}>Bring builder culture back to the Bitcoin ecosystem</Typography>
          </MissionBox>
        </Box>
      </Box>
    </Box>
  )
}

export default ValueMission;
