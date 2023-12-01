import useIsMobile from "@/hooks/useIsMobile"
import { Box, Typography } from "@mui/material"
import EastIcon from '@mui/icons-material/East';


const ListApp = () => { 
  const isMobile = useIsMobile()
  return (
    <Box sx={{
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: '1px'
    }}>
      <Box sx={{ background: 'white', borderRadius: '8px', width: '100%', p: '30px' }}>
        <Typography textTransform='uppercase' data-aos='fade-down' fontFamily='Hanson' textAlign={'left'} mb={'30px'} color={'black'} fontSize={isMobile ? '20px' : '30px'} fontWeight={700}>LIST YOUR DAPP</Typography>
        <Box
          data-aos='fade-up'
          className='paper'
          onClick={() => { }}
          sx={{
            p: '15px 30px',
            borderRadius: '100px',
            fontFamily: 'Titillium Web',
            fontSize: '24px',
            fontWeight: 600,
            border: '1px solid #000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth:'468px',
            mt: '20px',
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
          Add to the b²  network ecosystem
          <EastIcon className='arrow' />
        </Box>
      </Box>
    </Box>
  )
}

export default ListApp;