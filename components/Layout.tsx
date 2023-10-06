import type { NextPage } from 'next';
import { LinearProgress, Snackbar, Alert, Box } from '@mui/material';

import Header from './Header';
import Footer from './Footer';

type IProps = { showHeader?: boolean };

const Layout: NextPage<IProps> = ({ showHeader = true, children }) => {

  return (
    <Box display={'flex'} flexDirection='column'>
      {showHeader && <Header />}
      <main style={{marginTop:'70px'}}>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
