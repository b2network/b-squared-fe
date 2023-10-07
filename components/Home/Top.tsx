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
    <Box
      sx={{
        padding: { xs: '20px', md: '89px 100px 154px 100px' },
        background: 'white',
        display: 'flex',
        flexDirection: isMobile ? 'column-reverse' : 'row',
        justifyContent: isMobile ? 'center' : 'space-between',
        alignItems: 'center',
        overflow:'hidden'
      }}
    >
      <Box sx={{
        width: isMobile ? '100%' : '500px',
        color: '#000',
        textAlign: isMobile ? 'center' : 'left'
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
      <Box ml={isMobile ? '0' : '35px'} mt={isMobile ? '40px' : '0'}>
        <img src="/assets/top.svg" alt="" style={{
          width: isMobile ? '100%' : '498px',
        }} />
        {/* <Image unoptimized priority width={isMobile ? '100%' : '498'} height={isMobile?'auto':'444'} src='' alt='top'></Image> */}
      </Box>
    </Box>
  )
}

export default Top;
