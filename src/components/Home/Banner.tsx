import { Box } from "@mui/material"
import EastIcon from '@mui/icons-material/East';
import { BuzzUrl } from "@/utils";


const Banner = () => {
  return (
    <Box
      onClick={() => { 
        window.open(BuzzUrl)
      }}
      sx={{
      background: 'url("/assets/banner_buzz.png") no-repeat center center',
      height: '120px',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '14px',
      textTransform: 'uppercase'
    }}>
      <Box sx={{ color: 'white', fontSize: '26px', fontWeight: 900 }}>Deposit Token to Earn Airdrop</Box>
      <EastIcon sx={{ color: 'white' }} />
    </Box>
  )
}

export default Banner;