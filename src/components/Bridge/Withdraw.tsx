import { Box, Button, InputBase, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { useEffect, useMemo, useRef, useState } from "react";
import SouthRoundedIcon from '@mui/icons-material/SouthRounded';
import { useAccount, useBalance, useChainId, useFeeData, useNetwork, useWalletClient } from "wagmi";
import WithdrawTo from "./WithdrawTo";
import { useBrigeContract } from "@/hooks/useContract";
import { ethers, parseUnits } from "ethers";
import ConnectButtonLocal from "@/components/ConnectButtonLocal";
import * as bridgeStore from '@/stores/bridgeStore'
import NiceModal from "@ebay/nice-modal-react";
import ConnectModal from "../Modals/ConnectModal";
import { useBtc } from "@/wallets/btcWallet";
import BridgeAbi from "@/assets/abi/bridge.json";
import { Address, encodeFunctionData, padHex, parseEther } from "viem";
import { shorterAddress } from "@/utils";
import useSca from "@/hooks/useSca";

type Iprops = {
  scaAddress?: `0x${string}`
}

const Withdraw: React.FC<Iprops> = () => {
  const { address, isConnected: isEthConnected } = useAccount()
  const {
    isConnected: isBtcConnected,
    address: btcAddress,
    disconnect,
  } = useBtc()
  const localTo = localStorage.getItem('btcAccount') || ''
  const [from, setFrom] = useState('btc')
  const [to, setTo] = useState(localTo)
  const [amount, setAmount] = useState('')
  const scaAddress = useSca(btcAddress || '');
  const { data: balance } = useBalance({ address: scaAddress as Address });
  const addressArr = useMemo(() => {
    if (address && btcAddress) return [{ type: 'eth', address }, { type: 'btc', address: btcAddress }]
    if (address && !btcAddress) return [{ type: 'eth', address },]
    if (!address && btcAddress) return [{ type: 'btc', address: btcAddress }]
    return []
  }, [address, btcAddress])
  const [signerType, setSignerType] = useState('')
  const isInsufficient = useMemo(() => {
    if (amount && balance) {
      return Number(amount) > Number(balance.formatted)
    }
    return false;
  }, [amount, balance])

  // set default from account
  useEffect(() => {
    if (isEthConnected) {
      setSignerType('eth')
      return
    }
    if (isBtcConnected && !isEthConnected) {
      setSignerType('btc')
      return
    }
    setSignerType('')
  }, [isEthConnected, isBtcConnected])
  console.log({
    isBtcConnected,
    balance,
    scaAddress,
    btcAddress,
    signerType,
  }, 'withdraw-----')


  const handleFromChange = (e: SelectChangeEvent) => {
    setFrom(e.target.value)
  }
  const withdraw = async () => {
    // if (caProvider && caProvider.current) {
    //   try {
    //     bridgeStore.setShowResult(true);
    //     bridgeStore.setStatus('pendding');
    //     bridgeStore.setResult({
    //       fromChain: 'B² Network',
    //       toChain: ' Bitcoin Testnet',
    //       toAddress: to,
    //       amount: amount
    //     })
    //     const callData = encodeFunctionData({
    //       abi: BridgeAbi as any,
    //       functionName: 'withdraw',
    //       args: [to]
    //     })
    //     const tx = await caProvider.current.sendUserOperation({
    //       target: BridgeContract,
    //       data: callData,
    //       value: parseEther(amount)
    //     })
    //     console.log(tx, 'tx')
    //     const res = await caProvider.current.waitForUserOperationTransaction(
    //       tx.hash as `0x${string}`
    //     )
    //     console.log(res, 'res')
    //     // const tx = await bridgeContract.withdraw(to, { value: parseUnits(amount, 18) })
    //     // const res = await tx.wait()
    //     bridgeStore.setStatus('success');
    //   } catch (error) {
    //     console.log(error)
    //     bridgeStore.setStatus('failed')
    //   }
    // }
  }

  const handleClickBtcButton = () => {
    if (!isBtcConnected) {
      // NiceModal.show(ConnectModal)
    } else {
      disconnect()
    }
  }
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
        <Box display={'flex'} alignItems={'center'} my={'16px'}>
          From <Select onChange={(e) => { setSignerType(e.target.value) }} value={signerType} sx={{ width: '204px', height: '38px', ml: '8px' }}>
            {
              addressArr.map(item => {
                return (
                  <MenuItem key={item.address} value={item.type} sx={{ verticalAlign: 'middle' }}>
                    {shorterAddress(item.address)}
                  </MenuItem>
                )
              })
            }
          </Select>
        </Box>
        <Box mt={'12px'} mb='30px' sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '18px',
          color: 'rgba(0,0,0,0.65)'
        }}>Balance: {balance?.formatted} BTC
          <Box onClick={() => {
            setAmount(balance?.formatted || '')
          }} sx={{ color: '#FFA728', textDecoration: 'underline', ml: '10px', cursor: 'pointer' }}>Max</Box>
        </Box>
        <Box display={'flex'} gap={2}>
          <Box flex={1}><ConnectButtonLocal /></Box>
          <Button variant="outlined" sx={{
            flex: 1,
            height: '50px',
            borderRadius: '50px',
            textTransform: 'none',
            background: isBtcConnected ? '#fef9ed' : 'black',
            color: isBtcConnected ? 'black' : 'white',
            border: '1px solid black',
            fontSize: isBtcConnected ? '16px' : '20px',
            fontWeight: isBtcConnected ? 700 : 600,
            '&:hover': {
              background: isBtcConnected ? '#fef9ed' : 'black',
              color: isBtcConnected ? 'black' : 'white',
            }
          }} onClick={handleClickBtcButton}>{isBtcConnected ? shorterAddress(btcAddress || '') : 'Connect BTC Wallet'}</Button>
        </Box>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} my={'16px'}>
        <SouthRoundedIcon sx={{ color: 'black' }} />
      </Box>
      <WithdrawTo setTo={setTo} to={to} amount={amount} />
      <Button
        disabled={isInsufficient}
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
