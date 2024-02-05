import { Box } from "@mui/material"
import EastIcon from '@mui/icons-material/East';
import { BuzzUrl, Blockheadz } from "@/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true
      }}
      speed={3000}
      loop
    >
      <SwiperSlide>
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
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}>
          {/* <Box sx={{ color: 'white', fontSize: '26px', fontWeight: 900 }}>Join B² Buzz</Box>
          <EastIcon sx={{ color: 'white' }} /> */}
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box
          onClick={() => {
            window.open(Blockheadz)
          }}
          sx={{
            background: 'url("/assets/blockheadz.png") no-repeat center center',
            height: '120px',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '14px',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}>
          {/* <Box sx={{ color: 'white', fontSize: '26px', fontWeight: 900 }}>Join B² Buzz</Box>
          <EastIcon sx={{ color: 'white' }} /> */}
        </Box>
      </SwiperSlide>
    </Swiper>

  )
}

export default Banner;