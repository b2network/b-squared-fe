import type { NextPage } from 'next';
import { Box } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import { useIsMounted } from 'hooks/useIsMouted';

type IProps = { showHeader?: boolean, showFooter?: boolean };

const Layout: NextPage<IProps> = ({ showHeader = true, showFooter = true, children }) => {
  const isMounted = useIsMounted()
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      '.main': {
        mt: {
          xs: '74px',
          sm: '100px'
        }
      }
    }} >
      {showHeader && <Header />}
      <main className='main'>{isMounted&&children}</main>
      {
        showFooter && <Footer />
      }
    </Box>
  );
};

export default Layout;
