"use client"

import { Box, Button, FormControlLabel, FormLabel, Grid, InputBase, Radio, RadioGroup } from "@mui/material"
import { useBtc } from "@/wallets/btcWallet";
import { useEffect, useMemo, useState } from "react";
import { parseBtcAmount, shorterAddress } from "@/utils";
import { formatUnits, parseEther } from "viem";
import { useAccount, useBalance, useConnect, usePrepareSendTransaction, useSendTransaction } from "wagmi";
import { LoadingButton } from '@mui/lab';


const Transfer = () => {
  const { connect, connectors } =
    useConnect();
  const metaMaskConector = connectors.find(v => v.name === 'MetaMask')
  const btc = useBtc()
  const [btcBalance, setBtcBalance] = useState('')
  const [net, setNet] = useState('bsqured')
  const { address, isConnected: evmConnected } = useAccount()
  const { data } = useBalance({ address, watch: true, staleTime: 2_000, cacheTime: 2_000 });
  const evmBalance = data?.formatted;
  const isBtc = useMemo(() => net === 'btc', [net])
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')
  const isConnected = useMemo(() => isBtc ? btc.isConnected : evmConnected, [btc, evmConnected, isBtc])
  const [btcLoading, setBtcLoading] = useState(false);
  const { config } = usePrepareSendTransaction({
    to,
    value: parseEther(amount),
  })
  const { data: trans, isLoading: isEvmLoading, isSuccess, sendTransaction } =
    useSendTransaction(config)


  const getBalance = async () => {
    if (btc.provider) {
      const res = await btc.provider.getBalance();
      setBtcBalance(formatUnits(res.total, 8))
    }
  }

  const handleConnect = () => {
    if (isBtc) {
      btc.connect('Unisat')
    } else {
      metaMaskConector && connect({ connector: metaMaskConector })
    }
  }

  const handleTransfer = async () => {
    if (isBtc) {
      setBtcLoading(true)
      let txid = await btc.provider.sendBitcoin(to, parseBtcAmount(amount));
      setBtcLoading(false)
      console.log(txid)
    } else {
      sendTransaction?.()
    }
  }

  useEffect(() => {
    if (btc.provider) {
      getBalance()
    }
  }, [btc])
  return (
    <Box sx={{ background: 'white', color: 'black', pb: '60px' }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        background: 'black',
      }}>
        <Box sx={{
          width: '100%',
          height: '100%',
          minHeight: 'calc(100vh - 203.5px)',
          background: 'white',
          borderRadius: '12px',
          border: '1px solid black',
          pb: '60px'
        }}>
          <Box sx={{
            width: '540px',
            m: 'auto',
          }}>
            <>
              <Grid mt={'100px'} container width={'100%'} mb='20px' >
                <Grid item xs={6}><Box>Wallet Address:  {shorterAddress((isBtc ? btc.address : address) || '')}</Box></Grid>
                <Grid item xs={6}><Box>Balance: {isBtc ? btcBalance : evmBalance}</Box></Grid>
              </Grid>
              <Box display={'flex'} alignItems={'center'}>
                <Box sx={{ width: '100px' }} id="demo-row-radio-buttons-group-label">Gender:</Box>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={net}
                  row
                  onChange={(e) => { setNet(e.target.value); setTo(''); setAmount('') }}
                >
                  <FormControlLabel value="bsqured" control={<Radio />} label="ETH Address" />
                  <FormControlLabel value="btc" control={<Radio />} label="BTC Address" />
                </RadioGroup>
              </Box>
              <Box display={'flex'} mt={'20px'} alignItems={'center'}>
                <Box width={'100px'} textAlign={'left'}>To Address:</Box>
                <InputBase
                  value={to}
                  onChange={(e) => { setTo(e.target.value) }}
                  sx={{
                    border: '1px solid black',
                    height: '48px',
                    borderRadius: '8px',
                    pl: '16px',
                    flex: 1
                  }} />
              </Box>
              <Box display={'flex'} mt={'20px'} alignItems={'center'}>
                <Box width={'100px'} textAlign={'left'}>Amount:</Box>
                <InputBase
                  value={amount}
                  onChange={(e) => { setAmount(e.target.value) }}
                  sx={{
                    border: '1px solid black',
                    height: '48px',
                    borderRadius: '8px',
                    pl: '16px',
                    flex: 1
                  }} />
              </Box>

              {/* {
                isConnected ? <LoadingButton
                  loading={isBtc ? btcLoading : isEvmLoading}
                  sx={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '50px',
                    // background: "black",
                    // color: 'white',
                    fontSize: '20px',
                    mt: '30px',
                    textTransform: 'none',
                    '&:hover': {
                      // background: 'black'
                    }
                  }} variant="outlined" onClick={handleTransfer}>Transfer</LoadingButton> :
                  <Button sx={{
                    width: '100%',
                    height: '50px',
                    borderRadius: '50px',
                    // background: "black",
                    // color: 'white',
                    fontSize: '20px',
                    textTransform: 'none',
                    mt: '30px',
                    '&:hover': {
                      // background: 'black'
                    }
                  }} variant="outlined" onClick={handleConnect}>Connect {isBtc ? 'Unisat' : 'MetaMask'}</Button>
              } */}

            </>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Transfer
