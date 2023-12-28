import { Box, Button, InputBase, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import DepositTo from "./DepositTo";
import { parseBtcAmount, shorterAddress } from "@/utils";
import * as bridgeStore from '@/stores/bridgeStore';
import { DepositToAddress } from "@/constant";
import { formatUnits } from "ethers";
import { useBtc } from "@/wallets/btcWallet";
import NiceModal from "@ebay/nice-modal-react";
import ConnectModal from "../Modals/ConnectModal";
import { useBalance } from "wagmi";
import { getBtcBalance } from "@/service/balance";


const Deposit = () => {
  const [from, setFrom] = useState('btc')
  const btc = useBtc();
  const [balance, setBalance] = useState('')
  const [amount, setAmount] = useState('')
  const isInsufficient = useMemo(() => {
    if (amount && balance) {
      return Number(amount) > Number(balance)
    }
    return false;
  }, [amount, balance])
  // const { data } = useBalance({ address: '0x6AA5d8DA3b45d04b55F7C7bb5aD85C49174387b0' })
  // console.log(data,'ddddt')
  useEffect(() => {
    const getBalance = async () => {
      if (btc.address && btc.connectorName) {
        const balance = await getBtcBalance(btc.address, btc.connectorName)
        setBalance(balance || '')
      }
    }
    getBalance()
  }, [btc.address, btc.connectorName])
  const handleFromChange = (e: SelectChangeEvent) => {
    setFrom(e.target.value)
  }

  const handleDeposit = async () => {
    if (btc.address && amount) {
      localStorage.setItem('btcAccount', btc.address)
      bridgeStore.setResult({
        fromChain: 'Bitcion',
        toChain: 'B² Network',
        amount: amount,
        toAddress: DepositToAddress
      })
      bridgeStore.setShowResult(true);
      bridgeStore.setStatus('pendding')
      try {
        let txid = await btc.sendBitcoin({ from: btc.address, to: DepositToAddress, amount: parseBtcAmount(amount).toString() });
        console.log(txid)
        bridgeStore.setStatus('success')
      } catch (error) {
        console.log(error, error)
        bridgeStore.setStatus('failed')
      }
    }
  }
  return (
    <Box mt={'24px'}>
      <Box sx={{
        p: '24px',
        pt: '20px',
        border: '1px solid black',
        borderRadius: '12px'
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
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            placeholder="0.0"
            sx={{
              height: '54px',
              width: '100%',
              borderRadius: '4px',
              border: '1px solid black',
              pl: '12px'
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
        <Box mt={'12px'} mb='30px'
          sx={{
            display: 'flex',
            fontSize: '18px',
            color: 'rgba(0,0,0,0.65)'
          }}>
          Balance: {balance || '--'}BTC
          {/* <Box onClick={} sx={{color:'#FFA728',textDecoration:'underline',ml:'10px',cursor:'pointer'}}>Max</Box> */}
        </Box>
        {
          btc.isConnected ? <Box
            onClick={() => {
              setAmount('')
              setBalance('')
              btc.disconnect()
            }}
            sx={{
              width: '100%',
              textAlign: 'center',
              height: '50px',
              lineHeight: '50px',
              background: '#fef9ed',
              border: '1px solid black',
              borderRadius: '50px',
              cursor: 'pointer'
            }}>{shorterAddress(btc.address || '')}</Box> :
            <Button
              onClick={() => {
                NiceModal.show(ConnectModal)
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
      <DepositTo defaultTo={btc.address || ''} amount={amount} />
      <Button
        disabled={!btc.isConnected || isInsufficient}
        onClick={handleDeposit}
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
          },
          "&.Mui-disabled": {
            color: 'rgba(255,255,255,0.65)',
            cursor:'not-allowed'
          }
        }}>{isInsufficient ? 'Insufficient Balance' : 'Deposit Funds'}</Button>
    </Box>
  )
}

export default Deposit;
