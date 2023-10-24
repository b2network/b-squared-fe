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
        alignItems: 'center',
        height: '450px',
        width: '1290px',
        background: 'black',
        p: '1px',
        pt: '2px',
        gap: '1px'
      }}>
        <Box sx={{
          p: '30px',
          height: '450px',
          background: 'white',
          flex: '1',
          borderRadius: '8px',
          color: '#000',
          '.text': {
            fontSize: '50px',
            fontWeight: '700',
            fontFamily: 'Hanson'
          }
        }}>
          <Box>
            <Typography className='twill' component='span'>THE Most</Typography>
            <Typography component='span' className='text' color={'#FFA728'}>&nbsp;Practical</Typography>
          </Box>
          <Typography className='text'>Bitcoin Layer2</Typography>
          <Typography className='text'>Network</Typography>
          <Box sx={{
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
            gap: '16px',
            cursor: 'pointer',
            '&:hover': {
              '.arrow': {
                transform: 'rotate(-45deg)',
                transition: '1s'
              }

            }
          }}>
            Lite Paper
            <ArrowSvg className='arrow' />
          </Box>
          <Box sx={{
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
          background:'white',
        }}>
          <Box sx={{
            position:'relative',
            width: '450px',
            height: '450px',
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
