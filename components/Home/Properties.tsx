import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import React, { ReactNode } from 'react';
import useIsMobile from 'hooks/useIsMobile';

type ItemProps = {
  title: string,
  content: string[],
  num: string
}
const PropertieItem: React.FC<ItemProps> = ({ title, content, num }) => {
  const isMobile = useIsMobile();
  return <Box sx={{
    pt: isMobile ? '15px' : '30px',
    pb: isMobile ? '5px' : '10px',
    px: isMobile ? '15px' : '30px',
    height: '376px',
    background: 'white',
    borderRadius: '8px',
    '&:hover': {
      background:'#FFF8EE'
    }
  }}>
    <Box fontSize={'36px'}>{num}</Box>
    <Typography fontSize={'24px'} fontWeight={700} my={'15px'}>{title}</Typography>
    <Box >
      {
        content.map(item => <Typography mb={'10px'} key={item}>{item}</Typography>)
      }
    </Box>
  </Box>
}

const PropertyArr: ItemProps[] = [
  {
    title: 'Fast & Cheap',
    content: [
      'Over 50X cheaper and 300X faster than the Bitcoin network'
    ],
    num: '01'
  }, {
    title: 'Asset Security',
    content: [
      'Carry the security level of Bitcoin network',
      'Ensure the safety of your assets with Bitcoin POW (L1) and Zero-Knowledge Proof (L2)'
    ],
    num: '02'
  }, {
    title: 'Seamless Access',
    content: [
      'Use Metamask, Unisat, OKX wallet to interact with B², just like you normally would',
      'Access B² using your original BTC (bc1p…) or ETH (0x…) addresses with the help of account abstraction'
    ],
    num: '03'
  }, {
    title: 'Easy to Construct and Migrate Dapps',
    content: [
      'Revitalize over $526 billion Bitcoin assets, responding to the demands of Bitcoin users and miners.',
      'Operate various assets on the Bitcoin chain (BTC, BRC20, ordinals…), you name it.'
    ],
    num: '04'
  },
]

const Properties = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{
      background:'white',
      color: 'black'
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        background: 'black',
        px:'1px'
      }}>
        <Grid container spacing={'1px'}>
          {
            PropertyArr.map(item => <Grid data-aos='fade-up' item sm={6} lg={3} xs={12} key={item.title}>
              <PropertieItem {...item}></PropertieItem>
            </Grid>)
          }
        </Grid>
      </Box>
    </Box>

  )
}

export default Properties;
