import { Pending } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material"
import { useMemo } from "react";
// import { ResultData } from "stores/bridgeStore"
import * as bridgeStore from '@/stores/bridgeStore';
import { shorterAddress } from "@/utils";
import { useSnapshot } from "valtio";

const Result = () => {
  const model = useSnapshot(bridgeStore.store)
  const { status, result: data } = model;
  return (
    <Box sx={{
      p: '60px 104px',
      position: 'relative',
      background: 'white',
      '& .back': {
        position: 'absolute',
        left: '36px',
        top: '53px',
        width: '32px',
        cursor: 'pointer'
      }
    }}>
      <img onClick={() => {
        bridgeStore.setShowResult(false)
      }} className="back" src="/assets/icon_back.svg" alt="back" />
      <Grid container sx={{ fontSize: '18px' }}>
        <Grid item xs={3}>Amount: {data.amount} BTC</Grid>
        <Grid item xs={3}>From: {data.fromChain}</Grid>
        <Grid item xs={3}>To: {data.toChain}</Grid>
        <Grid item xs={3}>send to address: {shorterAddress(data.toAddress)}</Grid>
      </Grid>
      <Box>
        <StatusDiplay amount={data.amount} status={status} />
      </Box>
    </Box>
  )
}

const StatusDiplay = ({ status, amount }: { status: string, amount: string }) => {
  const statusItem = useMemo(() => {
    if (status === 'pendding') return {
      text: 'Transaction is pending !',
      desc: 'transaction can take some time if the network is overloaded.',
      btnText: ''
    }
    if (status === 'success') {
      return {
        text: 'Transaction is successful !',
        desc: 'The transfer is on the way. Tokens will be transferred to you in a few minutes.',
        btnText: 'Comfirm'
      }
    }
    if (status === 'failed') {
      return {
        text: 'Transaction is failed !',
        desc: 'please try again later.',
        btnText: 'Try again'
      }
    }
    return { text: '', desc: '' }
  }, [status, amount])

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mt: '90px',
      '& img': {
        mb: '44px'
      },
      '& .success': {
        width: '180px'
      },
      '& .failed': {
        width: '162px'
      }
    }}>
      {status === 'pendding' && <Box sx={{ position: 'relative' }}>
        <Box sx={{
          position: 'absolute',
          top: '47px',
          left: '0',
          width: '100%',
          textAlign: 'center'
        }}>loading...</Box>
        <img className="transactionLoading pendding" src="/assets/icon_loading.svg" alt="loading" />
      </Box>
      }
      {
        status === 'success' && <img className="success" src="/assets/icon_success.svg" alt="success" />
      }
      {
        status === 'failed' && <img className="failed" src="/assets/icon_fail.svg" alt="failed" />
      }
      <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{statusItem.text}</Typography>
      <Typography fontSize={'18px'} mt='8px' mb={'30px'}>{statusItem.desc}</Typography>
      {
        statusItem.btnText && <Button
          onClick={() => bridgeStore.setShowResult(false)}
          variant="outlined" sx={{
            background: 'black', color: 'white', '&:hover': { background: 'black' },
            height: '60px',
            px: '60px',
            borderRadius: '30px',
            fontSize: '24px',
            fontWeight: 600,
            textTransform: 'none'
          }}>{statusItem.btnText}</Button>
      }
    </Box>
  )
}




export default Result;
