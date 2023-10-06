import { Box, Link } from '@mui/material';
import useIsMobile from 'utils/hooks/useIsMobile';

const LINKS = [
  {
    path: '/assets/icon_twitter.svg',
    href: ''
  },
  {
    path: '/assets/icon_tg.svg',
    href: ''
  }, {
    path: '/assets/icon_discord.svg',
    href: ''
  },
  {
    path: '/assets/icon_github.svg',
    href: ''
  }
]

const OuterLink = () => {
  const isMobile = useIsMobile()
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap:isMobile?'10px':'20px',
    }}>
      {
        LINKS.map(item => (
          <Link href={item.href} key={item.path} sx={{
            opacity: 0.6,
            '&:hover': {
              opacity: 1
            }
          }} target='__blank'>
            <img src={item.path} style={{ width: isMobile ? '20px' : '40px', height: isMobile ? '20px' : '40px' }} alt="href" />
          </Link>
        ))
      }
    </Box>
  )

}

export default OuterLink;
