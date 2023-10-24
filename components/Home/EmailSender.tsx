import { Box, Divider, IconButton, InputAdornment, InputBase } from "@mui/material";
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import useIsMobile from "utils/hooks/useIsMobile";
import NiceModal from "@ebay/nice-modal-react";
import SubscribeDialog from "components/Modals/Subscribe";
import { useRef } from "react";
import ArrowSvg from "components/SvgIcon/ArrowSvg";

const EmailSender = () => {
  const isMobile = useIsMobile();
  const inputRef = useRef<HTMLInputElement>();
  const sendEmail = () => {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    const _value = inputRef.current?.value.trim() || '';
    if (reg.test(_value)) {
      NiceModal.show(SubscribeDialog)
    } else {
      alert('The email field must be a valid email address.')
    }
  }
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
      overflow: 'hidden',
      mt: isMobile ? '10px' : '30px',
      mb: isMobile ? '10px' : '15px',
      borderBottom:'1px solid #eee'
    }}>
    <InputBase
      placeholder="Enter your E-mail"
      inputRef={inputRef}
      sx={{ color: 'black', flex: '1',fontSize:'24px' }}
      // startAdornment={
      //   <InputAdornment position="start">
      //     <MarkunreadOutlinedIcon sx={{ color: '#808080' }} />
      //   </InputAdornment>
      // }
    />
    <Divider sx={{ height: '100%' }} orientation="vertical" />
    {/* <IconButton onClick={sendEmail} className='hvr-bounce-to-right' sx={{ */}
    <IconButton onClick={sendEmail} sx={{
      width: '67px',
      height: '67px',
      borderRadius: '0',
      '.icon': {
        color: 'black',
      },
      '&:hover': {
        '.icon': {
          color: 'white',
          transform: 'rotate(-45deg)',
          transition:'1s'
        },
      }
    }}>
      <ArrowSvg className="icon" />
    </IconButton>
  </Box>
}

export default EmailSender;
