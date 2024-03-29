import {
  Box,
  Typography,
} from '@mui/material';
import Typewriter from 'typewriter-effect';
import BarSvg from "@/components/SvgIcon/BarSvg";
import EastIcon from '@mui/icons-material/East';
import useIsMobile from '@/hooks/useIsMobile';
import OuterLink from '../OuterLink';
import { BuzzUrl, LigtPaperAddress, Odyssey, primaryColor } from '@/utils';

const Top = () => {
  const isMobile = useIsMobile();
  const goLitePaper = () => {
    window.open(LigtPaperAddress)
  }
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      alignItems: 'stretch',
      minHeight: isMobile ? '330px' : '400px',
      p: '1px',
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
          fontSize: isMobile ? '23px' : '46px',
          fontWeight: '700',
          lineHeight: '1.2',
          fontFamily: 'Hanson',
          textTransform: 'uppercase'
        },
        '.most': {
          fontSize: isMobile ? '23px' : '46px',
          fontWeight: '700',
          lineHeight: '1.2',
          fontFamily: 'Hanson',
          textTransform: 'uppercase',
          color: 'white',
          textShadow: '#000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0',
          WebkitTextStroke: '1px #000'
        }
      }}>
        <Box data-aos='fade-down' sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', mb: isMobile ? '10px' : 0 }}>
          <Typography className='text' component={'div'} color={'#FFA728'} sx={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Typewriter
              options={{
                loop: true,
                delay: 200,
              }}
              onInit={(typewriter) => {
                typewriter.typeString('<span style="color:white;text-shadow:#000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0">THE MOST</span> PRACTICAL')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('<span style="color:white;text-shadow:#000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0">An</span> EVM-COMPATIBLE')
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </Typography>
        </Box>
        <Typography data-aos='fade-down' className='text'>Bitcoin Layer2</Typography>
        <Typography data-aos='fade-down' className='text'>Network</Typography>
        <Box display={'flex'} mt={'20px'} flexDirection={isMobile?'column':'row'} alignItems={'center'} gap={'10px'}>
          <Box
            data-aos='fade-up'
            className='paper'
            onClick={() => {
              window.open(Odyssey)
            }}
            sx={{
              p: '15px 30px',
              borderRadius: '100px',
              fontFamily: 'Titillium Web',
              fontSize: '24px',
              fontWeight: 700,
              border: '1px solid #000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '226px',
              cursor: 'pointer',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
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
            B² Odyssey
            <EastIcon className='arrow' />
          </Box>
          <Box
            data-aos='fade-up'
            className='paper'
            onClick={() => {
              window.open(BuzzUrl)
            }}
            sx={{
              p: '15px 30px',
              borderRadius: '100px',
              fontFamily: 'Titillium Web',
              fontSize: '24px',
              fontWeight: 700,
              border: '1px solid #000',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              maxWidth: '226px',
              cursor: 'pointer',
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
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
            B² Buzz
            <EastIcon className='arrow' />
          </Box>
          <Box
            onClick={goLitePaper}
            fontSize={'24px'} sx={{ cursor: 'pointer' }}
            data-aos='fade-up'
            fontWeight={600}
            display={'flex'}
            alignItems={'center'}
            gap={'2px'} color={primaryColor}>
            Lite Paper
            <EastIcon sx={{ color: primaryColor, transform: 'rotate(-45deg)' }} />
          </Box>
        </Box>
        <Box data-aos='fade-up' sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '60px',
          alignItems: 'center'
        }}>
          <BarSvg sx={{
            width: '101px',
            height: '10px'
          }} />
          <OuterLink />
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
          backgroundSize: 'cover',
          '.shadow': {
            position: 'absolute',
            bottom: '50px',
            right: '125px',
          }
        }}>
          <img className='btc' src="/assets/btc.png" alt="btc" >
          </img>
          <img className='shadow shadowAnimation' src="/assets/icon_shadow.svg" alt="" />
        </Box>
      </Box>
    </Box>
  )
}

export default Top;
