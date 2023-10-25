import type { NextPage } from 'next';
import { LinearProgress, Snackbar, Alert, Box } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import useIsMobile from 'utils/hooks/useIsMobile';

type IProps = { showHeader?: boolean };

const Layout: NextPage<IProps> = ({ showHeader = true, children }) => {
  const isMobile = useIsMobile();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      '.main': {
        mt: {
          xs: '74px',
          sm:'108px'
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
