import {
  Box,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import React, { ReactNode } from 'react';
import useIsMobile from 'utils/hooks/useIsMobile';

type ItemProps = {
  title: string,
  content: string[],
  icon: string
}
const PropertieItem: React.FC<ItemProps> = ({ title, content, icon }) => {
  const isMobile = useIsMobile();
  return <Box className='hvr-shutter-in-vertical hvr-grow-shadow' sx={{
    p:isMobile?'15px':'30px',
    height: '376px',
    '.icon': {
      width: '64px',
      height: '64px',
      background: `url(${icon}.svg) no-repeat`,

    },
    '&:hover': {
      '.icon': {
        background: `url(${icon}_white.svg) no-repeat`
      }
    }
  }}>
    <Box className='icon'></Box>
    <Typography fontSize={'20px'} fontWeight={700} my={'15px'}>{title}</Typography>
    <Typography>
      {
        content
      }
    </Typography>
  </Box>
}

const PropertyArr: ItemProps[] = [
  {
    title: 'Fast & Cheap',
    content: [
      '· Over 50X cheaper and 300X faster than the Bitcoin network'
    ],
    icon: "/assets/icon_property4"
  }, {
    title: 'Asset Security',
    content: [
      '·  Carry the security level of Bitcoin network',
      '·  Ensure the safety of your assets with Bitcoin POW (L1) and Zero-Knowledge Proof (L2)'
    ],
    icon: "/assets/icon_property3"

  }, {
    title: 'Seamless Access',
    content: [
      '·  Use Metamask, Unisat, OKX wallet to interact with , just like you normally would',
      '·  Access using your original BTC (bc1p…) or ETH (0x…) addresses with the help of account abstraction'
    ],
    icon: "/assets/icon_property2"

  }, {
    title: 'Easy to Construct and Migrate Dapps',
    content: [
      '·  Revitalize over $526 billion Bitcoin assets, responding to the demands of Bitcoin users and miners.',
      '·  Operate various assets on the Bitcoin chain (BTC, BRC20, ordinals…), you name it.'
    ],
    icon: "/assets/icon_property1"

  },
]

const Properties = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{
      p: isMobile ? '20px' : '100px',
      background: 'linear-gradient(to right, #fdf9f5, white)',
      color: 'black'
    }}>
      <Typography data-aos='fade-down' sx={{
        textAlign: 'center',
        fontSize: isMobile ? '25px' : '44px',
        fontWeight: 600,
        mb: isMobile ? '20px' : '77px',
        wordSpacing: '-3px',
        letterSpacing: '-1.5px'
      }}>
        Build the Most Practical Bitcoin Layer-2 Network
      </Typography>
      <Grid container spacing={4}>
        {
          PropertyArr.map(item => <Grid data-aos='fade-up' item sm={3} xs={12} key={item.title}>
            <PropertieItem {...item}></PropertieItem>
          </Grid>)
        }
      </Grid>
    </Box>
  )
}

export default Properties;
