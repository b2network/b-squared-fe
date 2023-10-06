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
  MenuItem,
  Menu,
  styled,
  Typography
} from '@mui/material';
import { Search, Menu as MenuIcon, Close } from '@mui/icons-material';
import useIsMobile from 'utils/hooks/useIsMobile';
import Logo from './Logo';
import NiceModal from '@ebay/nice-modal-react';
import ComingDialog from './Modals/ComingSoon';
const DappButton = styled(Button)(() => ({
  fontSize: '16px',
  height: '36px',
  width: '90px',
  background: 'black',
  color: '#FEFC00',
  borderRadius: '54px',
  marginLeft: '34px',
  '&:hover': {
    background: '#666'
  }
}));
const Header = () => {
  const isMobile = useIsMobile()
  const [menuOpen, setMenuOpen] = useState(false);
  const showComingDialog = () => {
    NiceModal.show(ComingDialog)
  }
  return (
    <>
      <AppBar
        sx={{
          bgcolor: { xs: '#000', sm: '#fff' },
          borderBottom: '#f4f4f4',
          backgroundImage: "none",
          px: 0,
          boxShadow:
            '0px 2px 4px -1px rgb(0 0 0 / 4%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 4%)',
        }}>
        <Toolbar sx={{ display: 'flex', px: { xs: '16px', sm: '100px' }, alignItems: 'center', height: { xs: '44px', sm: '74px' }, justifyContent: 'space-between' }}>
          <Box
            sx={{ cursor: 'pointer', ml: 0 }}
            display='inline-flex'
            alignItems='center'>
            <Logo color='#000' />
          </Box>
          <Box
            px='8px'
            display={{ xs: 'none', sm: 'inline-flex' }}
            alignItems='center'>
            <a onClick={showComingDialog} className='default-menu hvr-grow'>Build</a>
            <a onClick={showComingDialog} className='default-menu hvr-grow'>Ecosystem</a>
            <a onClick={showComingDialog} className='default-menu hvr-grow'>Bridge</a>
            <Button
              variant='outlined'
              className='contact'
              sx={{
                borderRadius: '22px',
                height: '44px',
                border: '1px solid #000',
                color: 'black',
                fontSize: '20px',
                textTransform: 'capitalize',
                '&:hover': {
                  borderRadius: '22px',
                }
              }}>Contanct Us</Button>
          </Box>
          <IconButton
            sx={{ display: { sm: 'none' } }}
            onClick={() => { console.log('show menu'); setMenuOpen(true) }}>
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
