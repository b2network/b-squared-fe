import {
  Box,
  Typography,
} from '@mui/material';
import useIsMobile from '@/hooks/useIsMobile';
import BarIcon from '@/assets/icons/bar_icon.svg'
import RightBottomIcon from '@/assets/icons/right_bottom_line.svg'
import EmoticIcon from '@/assets/icons/emoticicons.svg'

const Top = () => {
  const isMobile = useIsMobile();
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      alignItems: 'stretch',
      minHeight: isMobile ? '330px' : '400px',
      p: '1px',
      pt: '2px',
      gap: '1px',
      overflow: 'hidden',
      '.bg': {
        width: '400px',
        height: '400px',
        borderRadius: '8px',
        display: { xs: 'none', lg: 'inline-flex' }
      }
    }}>
      <Box sx={{
        py: '30px',
        px: isMobile ? '15px' : '30px',
        minHeight: isMobile ? '330px' : '400px',
        background: 'white',
        flex: '1',
        borderRadius: '8px',
        position:'relative',
        color: '#000',
        '.text': {
          fontSize: isMobile ? '23px' : '46px',
          fontWeight: '700',
          lineHeight: '1.2',
          fontFamily: 'Hanson',
          textTransform: 'uppercase'
        },
        '.icon': {
          position: 'absolute',
          top: '30px',
          right:'30px'
        }
      }}>
        <EmoticIcon className='icon' />
        <Typography mt='30px' data-aos='fade-down' className='text'>Explore the b² </Typography>
        <Typography data-aos='fade-down' className='text'>network ecosystem</Typography>
        <Typography data-aos='fade-down'  fontSize={'24px'} fontWeight={600} mt={'24px'}>Find DApps, tools, and communities that grows with the b² Network</Typography>
        <Box data-aos='fade-up' sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: '100px',
          alignItems: 'flex-end'
        }}>
          <BarIcon />
          <RightBottomIcon />
        </Box>
      </Box>
      <img className='bg' src="/assets/ecosystem_top.svg" alt="icon" />
    </Box>
  )
}

export default Top;
