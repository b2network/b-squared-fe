import '../styles/globals.scss'
import React, { ReactNode, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { useIsMounted } from 'utils/hooks/useIsMouted';
import AOS from "aos";
import NiceModal from '@ebay/nice-modal-react';
import "aos/dist/aos.css";

const customTheme = createTheme({
  palette: { mode: 'dark' },
  typography: {
    fontFamily: 'Titillium Web,monospace,Objectivity,Roboto,Helvetica,Arial,sans-serif',
  }
});

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps,
) => {
  // const apolloClient = useApollo(props.pageProps.initialApolloState);
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  const isMounted = useIsMounted()
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
    AOS.refresh();
  }, []);
  return (

    <ThemeProvider theme={customTheme}>
      <NiceModal.Provider>
        {getLayout(
          <>
            <Head>
              <title>B² Network</title>
              <meta
                name='viewport'
                content='width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover'
              />
            </Head>
            <CssBaseline />
            <NextNProgress />
            <Component {...pageProps} />
          </>,
        )}
      </NiceModal.Provider>
    </ThemeProvider>
  );
};

export default MyApp
