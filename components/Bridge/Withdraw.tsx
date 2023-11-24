import { Box, Button, InputBase, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useMemo, useState } from "react";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import { useAccount, useBalance, useChainId, useFeeData, useNetwork } from "wagmi";
import WithdrawTo from "./WithdrawTo";
import { useBrigeContract } from "hooks/useContract";
import { ethers, formatUnits, parseEther, parseUnits } from "ethers";
import { useEthersSigner } from "hooks/useEthersSigner";
import ConnectButtonLocal from "components/ConnectButtonLocal";
import * as bridgeStore from 'stores/bridgeStore'

const Withdraw = () => {
  const { isConnected, address } = useAccount()
  const chainId = useChainId()
  const signer = useEthersSigner({ chainId })
  const [callFuncGasFee, setCallFuncGasFee] = useState('0.0');
  const { data: feeData, isError: feeDataError, isLoading: feeDataLoading } = useFeeData();
  const localTo = localStorage.getItem('btcAccount') || ''
  const [from, setFrom] = useState('btc')
  const [to, setTo] = useState(localTo)
  const [amount, setAmount] = useState('')
  const { data } = useBalance({ address });
  const bridgeContract = useBrigeContract(signer)
  const balance = data?.formatted;
  const isInsufficient = useMemo(() => {
    if (amount && balance) {
      return Number(amount) > Number(balance)
    }
    return false;
  }, [amount, balance])
  const handleFromChange = (e: SelectChangeEvent) => {
    setFrom(e.target.value)
  }

  const withdraw = async () => {
    if (signer && bridgeContract) {
      try {
        bridgeStore.setShowResult(true);
        bridgeStore.setStatus('pendding');
        bridgeStore.setResult({
          fromChain: 'B² Network',
          toChain: 'Bitcoin',
          toAddress: to,
          amount: amount
        })
        const tx = await bridgeContract.withdraw(to, { value: parseUnits(amount, 18) })
        const res = await tx.wait()
        bridgeStore.setStatus(res.status === 1 ? 'success' : 'failed');
      } catch (error) {
        console.log(error)
        bridgeStore.setStatus('failed')
      }

    }
  }

  useEffect(() => {
    console.log(feeData?.gasPrice)
    async function estimateGasFee() {
      if (!bridgeContract || !feeData?.gasPrice) return;
      try {
        const callFuncGas = await bridgeContract.withdraw.estimateGas(to, { value: parseUnits('1', 18) });
        console.log(formatUnits(callFuncGas * (feeData.gasPrice)),'2222')
        setCallFuncGasFee(formatUnits(callFuncGas * (feeData.gasPrice)));
      } catch (error) {
        console.log('Could not estimate gas fees because the transaction will fail');
      }
    }
    estimateGasFee()
  }, [feeData, bridgeContract, callFuncGasFee, to])

  return (
    <Box mt={'24px'}>
      <Box sx={{
        p: '24px',
        pt: '20px',
        border: '1px solid black',
        borderRadius: '12px',
        '& .logo': {
          width: '122px',
          ml: '12px'
        }
      }}>
        <Box display={'flex'} alignItems='center' >
          <Typography component={'span'} mr={'8px'}>From</Typography>
          <img className="logo" src="/assets/logo.svg" alt='logo'></img>
        </Box>
        <Box mt={'20px'} >
          <InputBase
            placeholder="0.0"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            sx={{
              pl: '12px',
              height: '54px',
              width: '100%',
              borderRadius: '4px',
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
          display: 'flex',
          alignItems: 'center',
          fontSize: '18px',
          color: 'rgba(0,0,0,0.65)'
        }}>Balance: {balance}BTC
          <Box onClick={() => {
            setAmount(balance || '')
          }} sx={{ color: '#FFA728', textDecoration: 'underline', ml: '10px', cursor: 'pointer' }}>Max</Box>
        </Box>
        <ConnectButtonLocal />
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my={'16px'}>
        <SouthRoundedIcon sx={{ color: 'black' }} />
      </Box>
      <WithdrawTo setTo={setTo} gas={callFuncGasFee} to={to} amount={amount} />
      <Button
        disabled={!isConnected || isInsufficient}
        onClick={withdraw}
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
            color: 'rgba(255,255,255,0.65)'
          }
        }}>{
          isInsufficient ? 'Insufficient Balance' : 'Withdraw Funds'
        }</Button>
    </Box>
  )
}

export default Withdraw;
