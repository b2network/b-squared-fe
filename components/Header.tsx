import { useState } from 'react';
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
  Button,
  Typography,
} from '@mui/material';
import { Search, Menu as MenuIcon, Close } from '@mui/icons-material';
import useIsMobile from 'utils/hooks/useIsMobile';
import Logo from './Logo';
import NiceModal from '@ebay/nice-modal-react';
import ComingDialog from './Modals/ComingSoon';

const Header = () => {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false);
  const showComingDialog = () => {
    NiceModal.show(ComingDialog)
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
          px: '16px',
          boxShadow: 'none'
        }}>
        <Toolbar sx={{ display: 'flex',gap:'1px',width: '100%', px: { xs: '1px' }, background: 'black', maxWidth: '1290px', alignItems: 'center', height: { xs: '74px', sm: '108px' }, justifyContent: 'space-between' }}>
          <Box
            sx={{ cursor: 'pointer',px:'30px',ml: 0, background: 'white', borderRadius: '8px', height: '100%' }}
            display='inline-flex'
            alignItems='center'>
            <Logo color='#000' />
          </Box>
          <Box sx={{
            background: '#f8f8f8',
            borderRadius: '8px',
            height: '100%',
            flex:'1'
          }}>
          </Box>
          <Box
            sx={{
              display: {    xs: 'none', sm: 'inline-flex'},
              background: 'white',
              height: '100%',
              borderRadius: '8px',
              px:'30px'
            }}
            alignItems='center'>
            <Typography sx={{ mx: '15px' }} onClick={showComingDialog} className='default-menu hvr-grow' >Build</Typography>
            <Typography sx={{ mx: '15px' }} onClick={showComingDialog} className='default-menu hvr-grow' >Ecosystem</Typography>
            <Typography sx={{ mx: '15px' }} onClick={showComingDialog} className='default-menu hvr-grow' >Bridge</Typography>
            <Button
              variant='outlined'
              className='contact'
              onClick={goFooter}
              sx={{
                borderRadius: '22px',
                height: '44px',
                border: '1px solid #000',
                fontSize: '20px',
                background: '#000',
                width:'149px',
                // wordSpacing: '-5px',
                // letterSpacing: '-2px',
                textTransform: 'capitalize',
                ml: '15px',
                '&:hover': {
                  borderRadius: '22px',
                  background: 'transparent',
                  border: '1px solid #000'
                }
              }}>Contanct Us</Button>
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
            <img src="/assets/logo.svg" style={{ width: '76px' }} alt="logo" />
            <IconButton>
              <Close sx={{ fontSize: '24px' }} />
            </IconButton>
          </ListItem>
          <ListItemButton onClick={showComingDialog}>
            <ListItemText
              primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
              primary="Build" />
          </ListItemButton>
          <ListItemButton onClick={showComingDialog} >
            <ListItemText
              primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
              primary="Ecosystem" />
          </ListItemButton>
          <ListItemButton onClick={showComingDialog} >
            <ListItemText
              primaryTypographyProps={{ fontSize: '16px', fontWeight: 500 }}
              primary="Bridge" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
