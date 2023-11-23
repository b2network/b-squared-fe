import {
  Box,
  Typography,
  styled,
  useMediaQuery
} from '@mui/material';
import { ReactNode, useEffect, useMemo } from 'react';
import useIsMobile from 'hooks/useIsMobile';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Partner = () => {
  const isMobile = useIsMobile();
  const min1500 = useMediaQuery('(min-width:1500px)');
  const min1300 = useMediaQuery('(min-width:1300px)');
  const min900 = useMediaQuery('(min-width:900px)');
  const count = useMemo(() => {
    if (min1500) return 5;
    if (min1300) return 4;
    if (min900) return 3;
    return 2
  }, [min1300, min900, min1500])
  const CardBox = styled(Box)(({ }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: isMobile ? '120px' : '240px',
    height: isMobile ? '60px' : '120px',
    background: 'white',
    borderRadius: '4px',
    border: '1px solid #000',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all 500ms linear'
    }
  }));

  const partnerIcons: { name: string, node: ReactNode }[] = [
    {
      name: 'partner1',
      node: <img style={{ width: isMobile ? '40px' : '79px' }} src="/assets/icon_1.png" alt="partner" />
    }, {
      name: 'partner2',
      node: <img style={{ width: isMobile ? '40px' : '79px' }} src="/assets/icon_2.png" alt="partner" />
    }, {
      name: 'partner3',
      node: <img style={{ width: isMobile ? '40px' : '79px' }} src="/assets/icon_3.png" alt="partner" />
    },
    // {
    //   name: 'partner4',
    //   node: <img style={{ width: isMobile ? '40px' : '79px' }} src="/assets/icon_4.png" alt="partner" />
    // },
    {
      name: 'okx',
      node: <img style={{ width: isMobile ? '40px' : '79px' }} src="/assets/icon_okx.png" alt="partner" />
    }, {
      name: 'metamask',
      node: <img style={{ width: isMobile ? '40px' : '79px' }} src="/assets/icon_metamask.png" alt="partner" />
    }
    //, {
    //   name: 'turbos',
    //   node: <img style={{ width: isMobile ? '40px' : '79px' }} src="/assets/icon_turbos.png" alt="partner" />
    // },

  ]
  return (
    <Box sx={{
      background: 'white',
      color: 'black'
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        background: 'black',
        p: '1px'
      }}>
        <Box sx={{ background: 'white', borderRadius: '8px', p: '30px' }}>
          <Typography textTransform='uppercase' fontFamily={'Hanson'} data-aos='fade-down' textAlign={'left'} mb={isMobile ? '19px' : '10px'} fontSize={isMobile ? 20 : 30} fontWeight='600'>Partners</Typography>
          <>
            <Swiper
              data-aos='fade-up'
              spaceBetween={0}
              centeredSlides={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={10000} // 是速度
              loop={true} // 无限循环
              slidesPerView={count}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >

              {
                partnerIcons.map(node => <SwiperSlide key={node.name}> <CardBox>
                  {
                    node.node
                  }
                </CardBox>
                </SwiperSlide>)
              }
            </Swiper>
          </>
        </Box>

      </Box>

    </Box>
  )
}

export default Partner;
