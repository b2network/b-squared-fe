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
    padding: isMobile ? '20px' : '89px 100px 154px 100px',
    background: 'white',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }));
  return (
    <TopBox >
      <Box sx={{
        width:isMobile?'100%':'500px',
        color: '#000',
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
        <Box data-aos="fade-left"  >
          <Typography component={'span'} sx={{
            color: '#FFB852',
            fontSize: isMobile ? '40px' : '80px',
            fontWeight: 600,
          }}>E</Typography>
          <Typography component={'span'} sx={{
            fontSize: isMobile ? '40px' : '80px',
            fontWeight: 600,
          }}>xponentially</Typography>
        </Box>
        <Box data-aos="fade-left" sx={{ color: 'black' }}>
          <Typography component={'span'} sx={{
            color: '#FFB852',
            fontSize: isMobile ? '40px' : '80px',
            fontWeight: 600,
          }}>E</Typography>
          <Typography component={'span'} sx={{
            fontSize: isMobile ? '40px' : '80px',
            fontWeight: 600,
          }}>xpanding</Typography>
        </Box>
        <Typography data-aos="fade-left" sx={{ fontSize: isMobile ? '25px' : '40px', whiteSpace: 'nowrap' }}>The Bitcoin Ecosystem</Typography>
        <Box
          className='hvr-bounce-to-right'
          data-aos="fade-up" sx={{
            mt: '40px',
            color: '#000',
            p: '15px 30px',
            fontSize: '24px',
            fontWeight: '600',
            background: '#FFB852',
            borderRadius: '4px',
            textAlign: 'center',
          }}>
          <Box display={'flex'} alignItems='center'> White Paper  <EastOutlinedIcon className='arrow' /></Box>
        </Box>
      </Box>
      <Box ml={isMobile ? '0' : '35px'} mt={isMobile?'20px':'0'}>
        <img src="/assets/top.svg" alt="" style={{
          width: isMobile ? '100%' : '498px',
        }} />
        {/* <Image unoptimized priority width={isMobile ? '100%' : '498'} height={isMobile?'auto':'444'} src='' alt='top'></Image> */}
      </Box>
    </TopBox>
  )
}

export default Top;
