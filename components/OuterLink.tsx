import { Box, Link } from '@mui/material';
import useIsMobile from 'utils/hooks/useIsMobile';

const LINKS = [
  {
    path: '/assets/icon_twitter.svg',
    href: '#'
  },
  {
    path: '/assets/icon_tg.svg',
    href: '#'
  }, {
    path: '/assets/icon_discord.svg',
    href: '#'
  },
  {
    path: '/assets/icon_github.svg',
    href: '#'
  }
]

const OuterLink = () => {
  const isMobile = useIsMobile()
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: { xs: '10px', md: '15px' }
    }}>
      {
        LINKS.map(item => (
          <Link href={item.href} key={item.path} sx={{
            opacity: 0.6,
            '&:hover': {
              opacity: 1,
              cursor: 'not-allowed'
            }
          }}>
            <img src={item.path} style={{ width: isMobile ? '20px' : '30px', height: isMobile ? '20px' : '30px' }} alt="href" />
          </Link>
        ))
      }
    </Box>
  )

}

export default OuterLink;
