import { Box } from "@mui/material"
import EastIcon from '@mui/icons-material/East';
import { BuzzUrl, Blockheadz } from "@/utils";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
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