import {
  Box,
  Typography,
} from '@mui/material';
import useIsMobile from 'utils/hooks/useIsMobile';

const Architecture = () => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{
      background: 'white',
    }}>
      <Box sx={{
        maxWidth: '1290px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#000',
        p: '1px'
      }}>
        <Box sx={{ background: 'white',borderRadius: '8px',width:'100%',p:'30px' }}>
          <Typography textTransform='uppercase' data-aos='fade-down' fontFamily='Hanson' textAlign={'left'} mb={'30px'} color={'black'} fontSize={isMobile ? '20px' : '30px'} fontWeight={700}>Architecture of B²</Typography>
            <img className='hvr-grow' data-aos='fade-up' src="/assets/architecture.png" style={{ width:  '100%', display: 'block', margin: 'auto' }} alt="architeture" />
        </Box>
      </Box>
    </Box>
  )
}

export default Architecture;
