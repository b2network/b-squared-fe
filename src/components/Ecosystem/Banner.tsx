import { Box } from "@mui/material"


import 'swiper/css';

const Banner = () => {
  return (
    <Box
      onClick={() => {
        // window.open(BuzzUrl)
      }}
      sx={{
        background: 'url("/assets/ecological_bg.jpg") no-repeat center center',
        height: '335px',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '14px',
        textTransform: 'uppercase',
        cursor: 'pointer'
      }}>

    </Box>
  )
}
export default Banner;