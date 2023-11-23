import React, { ReactNode, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { useIsMounted } from 'hooks/useIsMouted';
import AOS from "aos";
import NiceModal from '@ebay/nice-modal-react';
import "aos/dist/aos.css";
import '../styles/globals.scss'
import { BtcProvider } from 'btcWallet';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  connectorsForWallets,
  lightTheme
} from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  okxWallet,
  walletConnectWallet,
  tokenPocketWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { B2TestNet } from 'constant';

const customTheme = createTheme({
  palette: { mode: 'light' },
  typography: {
    fontFamily: 'Titillium Web,Hanson,monospace,Objectivity,Roboto,Helvetica,Arial,sans-serif',
  }
});


const { chains, publicClient, webSocketPublicClient } = configureChains([B2TestNet], [publicProvider()], { pollingInterval: 800000 });
const projectId = '941d566f55cee7aff5ac12d6e4ad97ad'
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId, chains }),
      okxWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
    ],
  },
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = (
  props: AppLayoutProps,
) => {
  // const apolloClient = useApollo(props.pageProps.initialApolloState);
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BtcProvider>
      <ThemeProvider theme={customTheme}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} theme={lightTheme({
            accentColor: 'black',
            accentColorForeground: 'white'
          })} locale='en'>
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
          </RainbowKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </BtcProvider>
  );
};

export default MyApp
