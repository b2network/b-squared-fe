import {
  Box,
  Typography,
  Grid
} from '@mui/material';
import useIsMobile from 'utils/hooks/useIsMobile';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Typewriter from 'typewriter-effect';
import ArrowSvg from 'components/SvgIcon/ArrowSvg';
import BarSvg from 'components/SvgIcon/BarSvg';
import BarCodeSvg from 'components/SvgIcon/BarCode';
import TheMostSvg from 'components/SvgIcon/TheMost';
import EastIcon from '@mui/icons-material/East';

const LigtPaperAddress = 'https://www.bsquared.network/B2.pdf '

const Top = () => {
  const isMobile = useIsMobile();
  const goLitePaper = () => {
    window.open(LigtPaperAddress)
  }
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
    }}>
      <Box sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        minHeight: isMobile ? '330px' : '400px',
        maxWidth: '1290px',
        background: 'black',
        p: '1px',
        pt: '2px',
        gap: '1px',
        overflow: 'hidden'
      }}>
        <Box sx={{
          py: '30px',
          px: isMobile ? '15px' : '30px',
          minHeight: isMobile ? '330px' : '400px',
          background: 'white',
          flex: '1',
          borderRadius: '8px',
          color: '#000',
          '.text': {
            fontSize: isMobile ? '25px' : '50px',
            fontWeight: '700',
            lineHeight: '1.2',
            fontFamily: 'Hanson',
            textTransform: 'uppercase'
          },
          '.most': {
            width: isMobile ? '180px' : '360px',
            height: isMobile ? '30px' : '60px',
            mr: '10px'
          }
        }}>
          <Box data-aos='fade-down' sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', mb: isMobile ? '10px' : 0 }}>
            <img src="/assets/the_most.svg" className='most' alt="the most" />
            <Typography component='span' className='text' color={'#FFA728'}><Typewriter
              options={{
                strings: ['PRACRICAL'],
                autoStart: true,
                loop: true,
                delay: 200,
              }}
            /></Typography>
          </Box>
          <Typography data-aos='fade-down' className='text'>Bitcoin Layer2</Typography>
          <Typography data-aos='fade-down' className='text'>Network</Typography>
          <Box
            data-aos='fade-up'
            className='paper'
            onClick={goLitePaper}
            sx={{
              p: '15px 30px',
              borderRadius: '100px',
              fontFamily: 'Titillium Web',
              fontSize: '24px',
              fontWeight: 700,
              background: '#fff8ee',
              border: '1px solid #000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '226px',
              mt: '20px',
              gap: '16px',
              cursor: 'pointer',
              '.arrow': {
                ml: '16px',
                color: 'black'
              },
              '&:hover': {
                '.arrow': {
                  transform: 'rotate(-45deg)',
                  transition: '1s',
                  color: 'white'
                }
              }
            }}>
            Lite Paper
            <EastIcon className='arrow' />
          </Box>
          <Box data-aos='fade-up' sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: '23px',
            alignItems: 'flex-end'
          }}>
            <BarSvg sx={{
              width: '101px',
              height: '10px'
            }} />
            <BarCodeSvg sx={{
              width: '144px',
              height: '50px'
            }} />
          </Box>
        </Box>
        <Box sx={{
          borderRadius: '8px',
          background: 'white',
          display: { xs: 'none', lg: 'inline-flex' }
        }}>
          <Box sx={{
            position: 'relative',
            width: isMobile ? '200px' : '400px',
            height: isMobile ? '200px' : '400px',
            background: 'url("/assets/top_bg.svg")',
            backgroundSize: 'cover'
          }}>
            <img className='btc' src="/assets/btc.png" alt="btc" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Top;
