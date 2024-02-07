"use client"
import ResultModal from "@/components/Modals/ResultModal"
import claimB2 from "@/service/faucet"
import { isBtcAddress, validateAddress } from "@/utils/address"
import NiceModal from "@ebay/nice-modal-react"
import { LoadingButton } from "@mui/lab"
import { Box, Button, Input, InputBase, Typography, styled } from "@mui/material"
import { useState } from "react"
import { toast } from 'react-toastify'
import IconPoints from '@/assets/icons/icon_point.svg'
import IconBall from '@/assets/icons/icon_ball.svg'
import IconHands from '@/assets/icons/icon_hands.svg'

const ITEMS = [
  { name: 'Network', value: 'B² Testnet' },
  { name: 'Token', value: 'BTC' },
  { name: 'Value', value: '0.001BTC' },
]


const Item = ({ name, value }: { name: string, value: string }) => {
  return (
    <Box mb='16px' borderRadius={'4px'}>
      <Box sx={{ fontWeight: '600', mb: '8px' }}>{name}</Box>
      <Box sx={{ p: '12px 15px', background: '#F5F5F5', width: '400px' }}>{value}</Box>
    </Box>
  )
}

const LeftImg = () => {
  return <Box sx={{
    position: 'absolute',
    bottom: '40px',
    left: '33px'
  }}>
    <IconPoints />
    <Box sx={{
      position: 'absolute',
      left: '60px',
      bottom: '10px'
    }}>
      <IconBall />
    </Box>
  </Box>
}
const RightImg = () => {
  return <Box sx={{
    position: 'absolute',
    top: '40px',
    right: '33px'
  }}>
    <IconPoints />
    <Box sx={{
      position: 'absolute',
      right: '10px',
      top: '5px'
    }}>
      <IconHands />
    </Box>
  </Box>
}

const Title = styled(Box)(({ }) => ({
  fontSize: '30px', fontWeight: 'bold', marginTop: '10px', marginBottom: '40px'
}));

const Faucet = () => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const handleClaim = async () => {
    if (!address || !validateAddress(address)) {
      toast.error('The wallet address provided is incorrect. Please double-check and enter a valid address.')
    }
    if (address && validateAddress(address)) {
      try {
        setLoading(true);
        const res = await claimB2(address)
        setLoading(false);
        if (res.code === '0') {
          NiceModal.show(ResultModal, { status: 'success' })
        } else {
          toast.error(res.message || 'Claim failed !')
        }
        console.log(res, 'res')
      } catch (error) {
        console.log(error, 'errr')
      }
    }
  }

  return (
    <Box sx={{
      position: 'relative',
      background: 'white',
      p: '30px',
      border: '1px solid black',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <LeftImg />
      <RightImg />
      <Title>Get Test Tokens</Title>
      {
        ITEMS.map(item => {
          return (
            <Item {...item} key={item.name} />
          )
        })
      }
      <Box>
        <Box sx={{ fontWeight: '600', mb: '8px' }}>Address</Box>
        <InputBase value={address} onChange={(e) => {
          setAddress(e.target.value.trim())
        }} sx={{
          height: '40px',
          width: '400px',
          p: '8px 15px', border: '1px solid rgba(0,0,0,0.5)', borderRadius: '4px'
        }} placeholder="bitcoin address or EVM address" />
      </Box>
      <LoadingButton sx={{
        width: '400px',
        background: 'black',
        color: 'white',
        borderRadius: '100px',
        mt: '40px',
        textTransform: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
        '&:hover': {
          background: 'black',
          color: 'white',
        },
        '& .MuiLoadingButton-loadingIndicator': {
          color: 'white',
        }
      }} loading={loading} onClick={handleClaim}>
        <span>Claim</span>
      </LoadingButton>
      <Typography sx={{ mt: '40px', color: 'rgba(0,0,0,0.6)' }}>ONLY 0.001 BTC can you mint one day for an address.</Typography>
    </Box>
  )
}



export default Faucet

