import type { NextPage } from 'next';
import {  Box } from '@mui/material';

import Header from './Header';
import Footer from './Footer';

type IProps = { showHeader?: boolean };

const Layout: NextPage<IProps> = ({ showHeader = true, children }) => {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      '.main': {
        mt: {
          xs: '74px',
          sm:'100px'
        }
      }
    }} >
      {showHeader && <Header />}
      <main className='main'>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
