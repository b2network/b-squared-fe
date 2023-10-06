import { Box, Divider, IconButton, InputAdornment, InputBase } from "@mui/material";
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import useIsMobile from "utils/hooks/useIsMobile";
import NiceModal from "@ebay/nice-modal-react";
import SubscribeDialog from "components/Modals/Subscribe";

const EmailSender = () => {
  const isMobile = useIsMobile()
  return <Box
    id='contact'
    sx={{
      display: 'flex',
      alignItems: 'center',
      background: "white",
      color: 'black',
      height: isMobile ? '40px' : '67px',
      width: isMobile ? '100%' : '465px',
      borderRadius: '5px',
      pl: isMobile ? '10px' : '32px',
      overflow: 'hidden',
      mt: isMobile ? '10px' : '30px',
      mb: isMobile ? '10px' : '20px'
    }}>
    <InputBase
      placeholder="Enter your E-mail"
      error
      sx={{ color: 'black', flex: '1' }}
      startAdornment={
        <InputAdornment position="start">
          <MarkunreadOutlinedIcon sx={{ color: '#808080' }} />
        </InputAdornment>
      }
    />
    <Divider sx={{ height: '100%' }} orientation="vertical" />
    <IconButton onClick={() => NiceModal.show(SubscribeDialog)} className='hvr-bounce-to-right' sx={{
      background: '#FFB852',
      width: '67px',
      height: '67px',
      borderRadius: '0',
      '.icon': {
        color: 'black',
      },
      '&:hover': {
        '.icon': {
          color: 'white',
        },
      }
    }}>
      <EastOutlinedIcon className="icon" />
    </IconButton>
  </Box>
}

export default EmailSender;
