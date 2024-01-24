import useB2Balance from "@/hooks/useB2Balance"
import { useBtc } from "@/wallets/btcWallet"
import { Box } from "@mui/material"
import LogoIcon from '@/assets/icons/logo_icon.svg'

type Iprops = {
  defaultTo: string,
  amount: string
}

const DepositTo: React.FC<Iprops> = ({ defaultTo, amount }) => {
  const { address, isConnected } = useBtc();
  const balance = useB2Balance(address || '')
  const DefaultAmount = '0.0';
  return (
    <Box sx={{
      p: '24px',
      border: '1px solid black',
      borderRadius: '12px',
      fontSize: '18px',
      fontFamily: 'Titillium Web',
      color: 'rgba(0,0,0,0.65)',
      lineHeight: '27px',
      '& .logo': {
        width: '122px',
        ml: '12px'
      }
    }}>
      <Box display={'flex'} alignItems={'center'} gap={'5px'} mb={'16px'}>
        To <LogoIcon /> <Box sx={{ color: 'black', fontWeight: 'bold' }}>B² Testnet</Box>
      </Box>

      <Box>You will receive: {amount || DefaultAmount} BTC</Box>
      {
        isConnected && <Box>Balance: {balance} BTC</Box>
      }
    </Box>
  )
}

export default DepositTo
