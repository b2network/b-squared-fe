import { Box, Button, InputBase, Link, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import DepositTo from "./DepositTo";
import { FAUCET_URL, parseBtcAmount, primaryColor } from "@/utils";
import * as bridgeStore from '@/stores/bridgeStore';
import { DepositToAddress } from "@/constant";
import { useBtc } from "@/wallets/btcWallet";
import NiceModal from "@ebay/nice-modal-react";
import ConnectModal from "../Modals/ConnectModal";
import { getBtcBalance } from "@/service/balance";
import { NumericFormat } from 'react-number-format';
import { LoadingButton } from "@mui/lab";
import ResultModal from "../Modals/ResultModal";

const Deposit = () => {
  const [from, setFrom] = useState('btc')
  const btc = useBtc();
  const [balance, setBalance] = useState('')
  const [amount, setAmount] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const isInsufficient = useMemo(() => {
    if (amount && balance) {
      return Number(amount) > Number(balance)
    }
    return false;
  }, [amount, balance])

  const getBalance = async () => {
    if (btc.address && btc.connectorName) {
      const balance = await getBtcBalance(btc.address, btc.connectorName)
      setBalance(balance || '')
    }
  }

  useEffect(() => {
    if (!btc.isConnected) {
      setAmount('')
      setBalance('')
    }
  }, [btc.isConnected])

  useEffect(() => {
    if (btc.address && btc.connectorName) {
      getBalance()
    }
  }, [btc.address, btc.connectorName])
  const handleFromChange = (e: SelectChangeEvent) => {
    setFrom(e.target.value)
  }

  const handleDeposit = async () => {
    if (btc.address && amount) {
      localStorage.setItem('btcAccount', btc.address)
      bridgeStore.setResult({
        fromChain: ' Bitcoin Testnet',
        toChain: 'B² Network',
        amount: amount,
        toAddress: btc.address || ''
      })
      try {
        setIsLoading(true)
        let txid = await btc.sendBitcoin({ from: btc.address, to: DepositToAddress, amount: parseBtcAmount(amount).toString() });
        console.log(txid)
        NiceModal.show(ResultModal, { status: 'success', txId: txid as string }).then(() => {
          getBalance();
        })
        setIsLoading(false)
        bridgeStore.setStatus('success');
        setAmount('')
      } catch (error) {
        console.log(error, error)
        setIsLoading(false)
        NiceModal.show(ResultModal, { status: 'failed' })
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
                BTC Testnet
              </Box>
            </MenuItem>
          </Select>
        </Box>
        <Box mt={'20px'} >
          <NumericFormat
            customInput={InputBase}
            allowNegative={false}
            thousandSeparator
            valueIsNumericString
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
        {
          btc.isConnected && <Box display={'flex'} mt={'12px'} justifyContent={'space-between'} alignItems={'center'}>
            <Box
              sx={{
                display: 'flex',
                fontSize: '18px',
                color: 'rgba(0,0,0,0.65)'
              }}>
              Balance: {balance || '--'} BTC
              <Box onClick={() => {
                setAmount(balance)
              }} sx={{ color: '#FFA728', textDecoration: 'underline', ml: '10px', cursor: 'pointer' }}>Max</Box>
            </Box>
            <Link sx={{ color: primaryColor, textDecoration: 'none' }} href={FAUCET_URL} target='_blank' >Testnet faucet</Link>
          </Box>
        }


      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my={'16px'}>
        <SouthRoundedIcon sx={{ color: 'black' }} />
      </Box>
      <DepositTo defaultTo={btc.address || ''} amount={amount} />

      {
        btc.isConnected ? <LoadingButton
          disabled={!btc.isConnected || isInsufficient}
          onClick={handleDeposit}
          loading={isLoading}
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
              cursor: 'not-allowed'
            },
            '& .MuiLoadingButton-loadingIndicator': {
              color: 'white',
              left: '70%'
            }
          }}>{isInsufficient ? 'Insufficient Balance' : 'Deposit Funds'}</LoadingButton> :
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
              mt: '30px',
              textTransform: 'none',
              '&:hover': {
                background: 'black'
              }
            }} variant="outlined">
            Connect Wallet
          </Button>
      }
    </Box>
  )
}

export default Deposit;
