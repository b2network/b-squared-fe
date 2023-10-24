import {
  Box,
  Typography,
  styled,
} from '@mui/material';
import React, { ReactNode } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Values = () => {
  const isMobile = useIsMobile();
  const UnionBar = styled(Box)(({ }) => ({
    width: '20px',
    height: '20px',
    borderTop: '5px solid #000',
    borderRight: '5px solid #000'
  }));
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        height: '250px',
        width: '1290px',
        background: 'black',
        p: '1px',
        pt: '2px',
        gap: '1px'
      }}>
        <Box sx={{
          position: 'relative',
          width: '325px',
          p: '30px',
          height: '248px',
          backgroundColor: 'white',
          borderRadius: '8px',
          color: "#000",
          '.bg': {
            position: 'absolute',
            bottom: '0',
            left: '0'
          }
          // background: 'url("/assets/earth.svg") no-repeat',
        }}>
          <Typography sx={{ fontSize: '30px', fontWeight: 700, fontFamily: 'Hanson' }}>VALUES</Typography>
          <img className='bg' src="/assets/earth.svg" alt="background" />
          <UnionBar sx={{
            position: 'absolute',
            top: '30px',
            right: '30px'
          }} />
          <UnionBar sx={{
            position: 'absolute',
            bottom: '30px',
            left: '30px',
            transform:'rotate(180deg)'
          }} />
        </Box>
        <Box
          sx={{
            height: '248px',
            background:'#fff8ee',
            flex: '1',
            borderRadius: '8px',
            color: "#000",
            p:'60px 90px',
            '.value': {
              fontSize:'20px'
            }
          }}
        >
          <Typography mb={'20px'} className='value'>Bitcoin, as the primary crypto asset, can evolve beyond a payment network.</Typography>
          <Typography className='value'>BTC-related assets require an ecosystem where DeFi, NFT, SocialFi, and other applications can thrive and flourish.</Typography>
        </Box>
      </Box>
    </Box>

  )
}

export default Values;
