import { Box, Button, InputBase, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import { useAccount, useBalance, useChainId, useNetwork } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WithdrawTo from "./WithdrawTo";
import { shorterAddres } from "utils";
import { useBrigeContract, useErc20Contract } from "hooks/useContract";
import { useEthersProvider } from "hooks/useEthersProvider";
import { ethers } from "ethers";
import { useEthersSigner } from "hooks/useEthersSigner";

const Withdraw = () => {
  const { isConnected, address } = useAccount()
  const chainId = useChainId()
  const provider = useEthersProvider({ chainId })
  const signer = useEthersSigner({ chainId })
  const bridgeContract = useBrigeContract(signer)
  const tokenContract = useErc20Contract(provider)
  const localTo  =  localStorage.getItem('btcAccount') || ''
  const [from, setFrom] = useState('btc')
  const [to,setTo] = useState(localTo)
  const [amount,setAmount] = useState('')
  const [balance, setBalance] = useState('')
  console.log(address, 'addre')
  const getBalance = async () => {
    try {
      const res = await tokenContract?.balanceOf(address)
      setBalance(ethers.utils.formatUnits(res,8))
      console.log(ethers.utils.formatUnits(res,8), 'balance-res')
    } catch (error) {
      console.log(error, 'err')
    }

  }
  const handleFromChange = (e: SelectChangeEvent) => {
    setFrom(e.target.value)
  }

  const withdraw = async() => {
    if (signer && bridgeContract) {
      console.log(to,amount,'to,amount')
      const tx = await bridgeContract.withdraw(to, amount)
      const res = await tx.wait()
      console.log(res,'tx')
    }
  }

  useEffect(() => {
    if (address) {
      getBalance()
    }
  }, [address])
  return (
    <Box mt={'24px'}>
      <Box sx={{
        p: '24px',
        pt: '20px',
        border: '1px solid black',
        borderRadius: '8px',
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
            placeholder="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
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
        }}>Balance: {balance}BTC</Box>
        {
          // isConnected ? <Box sx={{
          //   width: '100%',
          //   textAlign: 'center',
          //   height: '50px',
          //   lineHeight: '50px',
          //   background: '#fef9ed',
          //   border: '1px solid black',
          //   borderRadius: '50px'
          // }}>{shorterAddres(address || '')}</Box> :
            <ConnectButton />
        }
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my={'16px'}>
        <SouthRoundedIcon sx={{ color: 'black' }} />
      </Box>
      <WithdrawTo setTo={setTo} to={to} />
      <Button
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
          }
        }}>Withdraw Funds</Button>
    </Box>
  )
}

export default Withdraw;
