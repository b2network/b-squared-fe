import { Box, Button, InputBase, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useBtc } from "btcWallet";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import DepositTo from "./DepositTo";

const Deposit = () => {

  const [from, setFrom] = useState('btc')
  const btc = useBtc();
  console.log(btc, 'btc')
  const [balance, setBalance] = useState('')
  const getBalance = async () => {
    if (btc.provider) {
      const res = await btc.provider.getBalance();
      console.log(res, 'res')
      setBalance(res.total)
    }
  }
  useEffect(() => {
    if (btc.provider) {
      getBalance()
    }
  }, [btc])
  const handleFromChange = (e: SelectChangeEvent) => {
    setFrom(e.target.value)
  }

  return (
    <Box mt={'24px'}>
      <Box sx={{
        p: '24px',
        pt: '20px',
        border: '1px solid black',
        borderRadius: '8px'
      }}>
        <Box display={'flex'} alignItems='center' >
          <Typography component={'span'} mr={'8px'}>From</Typography>
          <Select value={from} onChange={handleFromChange} sx={{ width: '204px', height: '38px' }}>
            <MenuItem value='btc' sx={{ verticalAlign: 'middle' }}>
              <Box display={'flex'} alignItems={'center'} sx={{
                '& .img': {
                  width: '24px',
                  mr: '8px'
                }
              }}>
                <img className="img" src="/assets/icon_btc.svg" alt="icon" />
                BTC
              </Box>
            </MenuItem>
          </Select>
        </Box>
        <Box mt={'20px'} >
          <InputBase
            placeholder="amount"
            sx={{
              height: '54px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid black'
            }}
            endAdornment={
              <Select value={from} onChange={handleFromChange} sx={{ width: '204px', height: '54px', border: 'none' }}>
                <MenuItem value='btc' sx={{ verticalAlign: 'middle' }}>
                  <Box display={'flex'} alignItems={'center'} sx={{
                    '& .img': {
                      width: '24px',
                      mr: '8px'
                    }
                  }}>
                    <img className="img" src="/assets/icon_btc.svg" alt="icon" />
                    BTC
                  </Box>
                </MenuItem>
              </Select>
            }
          />
        </Box>
        <Box mt={'12px'} mb='30px' sx={{
          fontSize: '18px',
          color: 'rgba(0,0,0,0.65)'
        }}>Balance: {balance}</Box>
        {
          btc.isConnected ? <Box sx={{
            width: '100%',
            textAlign: 'center',
            height: '50px',
            lineHeight: '50px',
            background: '#fef9ed',
            border: '1px solid black',
            borderRadius: '50px'
          }}>{btc.address}</Box> :
            <Button
              onClick={() => {
                btc.connect('Unisat')
              }}
              sx={{
                width: '100%',
                height: '50px',
                borderRadius: '50px',
                background: "black",
                color: 'white',
                fontSize: '20px',
                textTransform: 'none',
                '&:hover': {
                  background: 'black'
                }
              }} variant="outlined">
              Connect Wallet
            </Button>
        }
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my={'16px'}>
        <SouthRoundedIcon sx={{ color: 'black' }} />
      </Box>
      <DepositTo defaultTo={btc.address || ''} />
      <Button
        disabled={!btc.isConnected}
        onClick={() => {
          localStorage.setItem('btcAccount', btc.address || '')
        }}
        sx={{
          height: '60px',
          borderRadius: '30px',
          background: '#000',
          color: 'white',
          width: '100%',
          mt: '30px',
          textTransform: 'none',
          fontSize: '24px',
          fontWeight: 600,
          '&:hover': {
            background: '#000'
          }
        }}>Deposit Funds</Button>
    </Box>
  )
}

export default Deposit;
