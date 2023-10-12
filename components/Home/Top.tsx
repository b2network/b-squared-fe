import {
  Box,
  Typography,
  styled
} from '@mui/material';
import useIsMobile from 'utils/hooks/useIsMobile';
import Image from 'next/image';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
const LigtPaperAddress = 'https://www-dev.bsquared.network/B2.pdf'

const Top = () => {
  const isMobile = useIsMobile();
  const goLitePaper = () => {
    window.open(LigtPaperAddress)
  }
  return (
    <Box sx={{
      background: 'white',
      padding: { xs: '20px', md: '89px 20px 154px 20px' },
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          overflow: 'hidden',
          maxWidth: '1290px',
          margin: 'auto',
          gap: '20px'
        }}
      >
        <Box sx={{
          width: isMobile ? '100%' : '500px',
          color: '#000',
          textAlign: isMobile ? 'center' : 'left',
          flex: '1'
        }}>
          <Box
            data-aos="fade-left"
          >
            <Typography component={'span'} sx={{
              fontSize: { xs: '40px', md: '50px', lg: '70px' },
              fontWeight: 700,
              lineHeight: '1.4',
              whiteSpace: 'nowrap',
              // wordSpacing: { lg: '-10px', xs: '-4px' },
              // letterSpacing: { lg: '-4px', xs: '-2px' },
            }}>The Most <Typography
              component={'span'}
              sx={{
                position: 'relative',
                color: '#FFB852',
                fontSize: { xs: '40px', md: '50px', lg: '70px' },
                fontWeight: 700,
                lineHeight: '1.4',
                // wordSpacing: { lg: '-10px', xs: '-4px' },
                // letterSpacing: { lg: '-4px', xs: '-2px' },
              }}
            >
                P
                <img style={{position:'absolute',top:'3px',right:'-15px',width:isMobile?'20px':'27px'}} src="/assets/light.svg" alt="" />
              </Typography>
              ractical
            </Typography>
          </Box>
          <Box data-aos="fade-left">
            <Typography component={'span'} sx={{
              fontSize: { xs: '40px', md: '50px', lg: '70px' },
              fontWeight: 700,
              whiteSpace: 'nowrap',
              lineHeight: '1.4',
              // wordSpacing: { lg: '-10px', xs: '-4px' },
              // letterSpacing: { lg: '-4px', xs: '-2px' },
            }}>Bitcoin Layer2 Network</Typography>
          </Box>
          <Box
            className='hvr-bounce-to-right'
            data-aos="fade-up"
            onClick={goLitePaper}
            sx={{
              mt: '40px',
              color: '#000',
              p: '15px 20px',
              fontSize: '24px',
              fontWeight: '600',
              background: '#FFB852',
              borderRadius: '8px',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              width: '222px',
              cursor: 'pointer',
              '.arrow': {
                color: 'black',
                ml: '15px'
              },
              '&:hover': {
                '.arrow': {
                  color: 'white',
                }
              }
            }}>
            <Box display={'flex'} alignItems='center' justifyContent={'center'}> Lite Paper <EastOutlinedIcon className='arrow' /></Box>
          </Box>
        </Box>
        <Box flex={1} display={'flex'} justifyContent={'flex-end'}>
          <img src="/assets/top.svg" alt="" style={{
            width: '100%',
            maxWidth: isMobile ? '400px' : '498px'
          }} />
          {/* <Image unoptimized priority width={isMobile ? '100%' : '498'} height={isMobile?'auto':'444'} src='' alt='top'></Image> */}
        </Box>
      </Box>
    </Box>
  )
}

export default Top;
