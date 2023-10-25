import {
  Box,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import React, { ReactNode } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MissionIcon1 from 'components/SvgIcon/MissionIcon1';
import MissionIcon2 from 'components/SvgIcon/MissionIcon2';

const Missions = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row',
          maxWidth: '1290px',
          background: 'black',
          p: '1px',
          pt: '2px',
          gap: '1px',
          '.item': {
            display: 'flex',
            p: '30px',
            justifyContent: 'space-between',
            borderRight: isMobile ? 'none' : '1px solid white',
            borderBottom: isMobile ? '1px solid white' : 'none'
          }
        }}>
        <Box flex={1} className='item'>
          <Typography flex={1} color={'white'} fontSize={'24px'}>
            Build the most <span style={{ color: '#FFA728' }}>practical</span> Bitcoin layer-2 network
          </Typography>
          <MissionIcon2 sx={{ width: '140px', height: '140px' }} />
        </Box>
        <Box flex={1} className='item'>
          <Typography fontSize={'24px'}>Bring builder <span style={{ color: '#FFA728' }}>culture</span> back to the Bitcoin ecosystem</Typography>
          <MissionIcon1 sx={{ width: '124px', height: '140px' }} />
        </Box>
      </Box>
    </Box>
  )
}

export default Missions;