"use client"

import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import React, { ReactNode } from 'react';
import useIsMobile from '@/hooks/useIsMobile';

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
    title: 'Fast, Cheap & Secure',
    content: [
      'Over 50x cheaper and 300x faster than Bitcoin network.',
      'Bitcoin-level security with Bitcoin POW (L1) & Zero-Knowledge Proof (L2).'
    ],
    num: '01'
  }, {
    title: 'Seamless Access',
    content: [
      'Use MetaMask, Unisat, OKX Wallet, Xverse, Leather, etc. to interact with B², just like you normally would.',
      'Easy access with BTC or ETH addresses via account abstraction.'
    ],
    num: '02'
  },{
    title: 'Easy to Construct and Migrate Dapps',
    content: [
      'Revitalize over $526 billion Bitcoin assets, meeting the demands of Bitcoin users and miners.',
      'Operate various assets on the Bitcoin chain (BTC, BRC20, ordinals…), you name it.'
    ],
    num: '03'
  },{
    title: 'DA Layer for Bitcoin',
    content: [
      'Allow any ZK-Rollup to use Bitcoin as settlement layer through B² Hub.',
      'Submit aggregated ZK-Rollup data and proofs from different ZK-Rollups to Bitcoin, reducing transaction congestion.'
    ],
    num: '04'
  }
]

const Properties = () => {
  return (
      <Box sx={{
        margin: 'auto',
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

  )
}

export default Properties;
