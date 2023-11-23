import { Box, Typography } from "@mui/material"
import { shorterAddres } from "utils"

type Iprops = {
  defaultTo: string
}

const DepositTo: React.FC<Iprops> = ({defaultTo}) => {
  return (
    <Box sx={{
      p: '24px',
      border: '1px solid black',
      borderRadius: '8px',
      fontSize: '18px',
      fontFamily:'Titillium Web',
      color: 'rgba(0,0,0,0.65)',
      lineHeight: '27px',
      '& .logo': {
        width: '122px',
        ml: '12px'
      }
    }}>
      <Box display={'flex'} alignItems={'center'} mb={'16px'}>
        To  <img className="logo" src="/assets/logo.svg" alt='logo'></img>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Box>send to address: {shorterAddres(defaultTo)}</Box>
        <Box sx={{
          textDecoration: 'underline',
          color: '#FFA728',
          ml: '10px'
        }}>Edit</Box>
      </Box>
      <Box>you will receive: 0.0 BTC</Box>
      <Box>gas fee:  0.0 BTC</Box>
    </Box>
  )
}

export default DepositTo
