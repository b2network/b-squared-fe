import {
  Box,
  Typography,
  styled
} from '@mui/material';
import useIsMobile from 'utils/hooks/useIsMobile';
import Image from 'next/image';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Top = () => {
  const isMobile = useIsMobile();
  const TopBox = styled(Box)(() => ({

  }));
  return (
    <Box sx={{
      background: 'white',
      padding: { xs: '20px', md: '89px 0 154px 0' },
    }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center',
          gap: '35px',
          overflow: 'hidden',
          maxWidth: '1240px',
          margin: 'auto'
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
            <Typography lineHeight={1.1} component={'span'} sx={{
              color: '#FFB852',
              fontSize: { xs: '40px', md: '80px' },
              fontWeight: 600,
            }}>E</Typography>
            <Typography lineHeight={1.1} component={'span'} sx={{
              fontSize: { xs: '40px', md: '80px' },
              fontWeight: 600,
            }}>xponentially</Typography>
          </Box>
          <Box data-aos="fade-left">
            <Typography lineHeight={1.1} component={'span'} sx={{
              color: '#FFB852',
              fontSize: { xs: '40px', md: '80px' },
              fontWeight: 600,
            }}>E</Typography>
            <Typography lineHeight={1.1} component={'span'} sx={{
              fontSize: { xs: '40px', md: '80px' },
              fontWeight: 600,
            }}>xpanding</Typography>
          </Box>
          <Typography data-aos="fade-left" sx={{ fontSize: { xs: '25px', md: '40px' }, whiteSpace: 'nowrap', mt: '20px' }}>The Bitcoin Ecosystem</Typography>
          <Box
            className='hvr-bounce-to-right'
            data-aos="fade-up"
            sx={{
              mt: '40px',
              color: '#000',
              p: '15px 20px',
              fontSize: '24px',
              fontWeight: '600',
              background: '#FFB852',
              borderRadius: '4px',
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
            <Box display={'flex'} alignItems='center'> Lite Paper <EastOutlinedIcon className='arrow' /></Box>
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
