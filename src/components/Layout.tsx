'use client'
import { Box } from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import { useIsMounted } from '@/hooks/useIsMouted';
import { ReactNode } from 'react';

type IProps = {
  showHeader?: boolean,
  showAllFooter?:boolean
  showFooter?: boolean, children: ReactNode
};

const Layout: React.FC<IProps> = ({ showHeader = true, showFooter = true, showAllFooter = true, children }) => {
  const isMounted = useIsMounted()
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    }} >
      {showHeader && <Header />}
      <Box sx={{
        maxWidth: '1290px',
        margin:'auto',
        background: 'black',
        width: '100%',
        flex:1,
        mt: {
          xs: '74px',
          sm: '100px'
        }
      }}>
        {isMounted && children}
      </Box>
      {
        showFooter && <Footer showAll={showAllFooter} />
      }
    </Box>
  );
};

export default Layout;
