'use client'
import { useEffect, useMemo, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Drawer,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import useIsMobile from '@/hooks/useIsMobile';
import Logo from './Logo';
import NiceModal from '@ebay/nice-modal-react';
import ComingDialog from './Modals/ComingSoon';
import { usePathname, useRouter } from 'next/navigation';
import ConnectBtcButton from './ConnectButton';
import Developers from './Developers';
import { IsInMaintaince } from '@/utils';

const Header = () => {
  const isMobile = useIsMobile();
  const isXs = useMediaQuery('(max-width:600px)');
  const router = useRouter();
  const pathname = usePathname()
  const Links = [
    {
      name: 'Bridge',
      path: '/bridge'
    },
    {
      name: 'Doc',
      path: 'https://docs.bsquared.network/'
    },
  ]
  const [menuOpen, setMenuOpen] = useState(false);
  const showComingDialog = () => {
    NiceModal.show(ComingDialog)
  }
  const isNotHome = useMemo(() => pathname !== '/' && pathname !== '', [pathname])
  const isBridge = useMemo(() => pathname.includes('bridge'), [pathname])

  useEffect(() => {
    if (isNotHome && IsInMaintaince) {
      router.push('/maintain')
    }
  }, [isNotHome, IsInMaintaince])

  const onClickMenu = (path: string) => {
    if (path.includes('http')) {
      window.open(path)
      return
    }
    if (path) {
      router.push(path);
      return
    }
    showComingDialog()
  }
  const goFooter = () => {
    let anchorElement = document.getElementById('contact');
    // 如果对应id的锚点存在，就跳转到锚点
    if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
  }
  return (
    <>
      <AppBar
        sx={{
          bgcolor: { xs: '#000', sm: '#fff' },
          borderBottom: '#f4f4f4',
          backgroundImage: "none",
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'none',
        }}>
        <Toolbar sx={{
          display: 'flex', borderTop: '2px solid #000',
          gap: '1px', width: '100%', px: { xs: '1px' },
          background: 'black', maxWidth: '1290px',
          alignItems: 'center', height: { xs: '74px', sm: '100px' },
          justifyContent: 'space-between', borderBottom: '1px solid #000'
        }}>
          <Box
            sx={{ cursor: 'pointer', px: isMobile ? '20px' : '30px', ml: 0, background: { xs: 'black', sm: 'white' }, borderRadius: '8px', height: '100%' }}
            display='inline-flex'
            alignItems='center'>
            <Logo color={isXs ? '#fff' : '#000'} />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              background: '#f8f8f8',
              borderRadius: '8px',
              height: '100%',
              flex: '1'
            }}>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'inline-flex' },
              background: 'white',
              height: '100%',
              borderRadius: '8px',
              pl: '15px',
              pr: '30px',
            }}
            alignItems='center'>
            <Developers />
            {
              Links.map(link => {
                const active = (pathname === link.path || pathname === link.path + '/') && link.path !== '';
                return (
                  <Typography key={link.name} sx={{
                    mx: '15px',
                    fontWeight: active ? '700' : '400',
                    fontSize: '20px',
                    textTransform: 'none',
                    '&:before': {
                      content: '""',
                      display: active ? 'inline-block' : 'none',
                      verticalAlign: 'middle',
                      mr: '3px',
                      width: '5px',
                      height: '5px',
                      borderRadius: '10px',
                      background: '#000',
                      fontSize: '20px'
                    }
                  }} onClick={() => {
                    onClickMenu(link.path)
                  }} className='default-menu hvr-grow' >{link.name}</Typography>
                )
              })
            }
            {
              isBridge && <Box display={'flex'} gap={'5px'} alignItems={'center'}><ConnectBtcButton /></Box>
            }
            {
              !isNotHome && <Box
                className='hvr-sweep-to-right'
                onClick={goFooter}
                sx={{
                  borderRadius: '22px',
                  height: '44px',
                  lineHeight: '44px',
                  textAlign: 'center',
                  // border: '1px solid #000',
                  fontSize: '20px',
                  width: '147px',
                  // wordSpacing: '-5px',
                  // letterSpacing: '-2px',
                  textTransform: 'capitalize',
                  whiteSpace: 'nowrap',
                  ml: '15px',
                  '&:hover': {
                    borderRadius: '22px',
                    border: 'none',
                    cursor: 'pointer'
                  }
                }}>Contact Us</Box>
            }
          </Box>
          <IconButton
            sx={{ display: { sm: 'none' } }}
            onClick={() => { setMenuOpen(true) }}>
            <MenuIcon sx={{ color: 'white', fontSize: '24px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={menuOpen} onClose={() => setMenuOpen(false)}>
        <List sx={{ width: '100vw', boxSizing: 'border-box' }} >
          <ListItem sx={{ justifyContent: 'space-between' }} onClick={() => setMenuOpen(false)}>
            <Logo color={isXs ? '#fff' : '#000'} />
            <IconButton>
              <Close sx={{ fontSize: '24px' }} />
            </IconButton>
          </ListItem>
          {
            Links.map(item => {
              const isActive = pathname === item.path
              return (
                <ListItemButton key={item.name} onClick={() => {
                  onClickMenu(item.path)
                }}>
                  <ListItemText
                    primaryTypographyProps={{ fontSize: '16px', fontWeight: isActive ? 700 : 500 }}
                    primary={item.name} />
                </ListItemButton>
              )
            })
          }
        </List>
      </Drawer>
    </>
  );
};

export default Header;
