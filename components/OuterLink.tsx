import { Box, Link } from '@mui/material';
import useIsMobile from 'utils/hooks/useIsMobile';

const LINKS = [
  {
    path: '/assets/icon_twitter.svg',
    href: 'https://twitter.com/BsquaredNetwork'
  },
  {
    path: '/assets/icon_tg.svg',
    href: 'https://t.me/bsquared_chat'
  }, {
    path: '/assets/icon_discord.svg',
    href: 'https://www.discord.gg/bsquarednetwork'
  },
  {
    path: '/assets/icon_github.svg',
    href: 'https://github.com/b2network'
  },{
    path: '/assets/icon_medium.svg',
    href: 'https://medium.com/@bsquarednetwork'
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
          <Link
            href={item.href}
            key={item.path}
            target='_blank'
            sx={{
              opacity: 0.6,
              '&:hover': {
                opacity: 1,
                cursor: item.href !== '#' ? 'pointer' : 'not-allowed'
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
