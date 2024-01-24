"use client"
import React, { ReactNode, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  connectorsForWallets,
  lightTheme
} from '@rainbow-me/rainbowkit';
import NiceModal from '@ebay/nice-modal-react';
import { CssBaseline } from '@mui/material';
import NextNProgress from 'nextjs-progressbar';
import {
  metaMaskWallet,
  okxWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { B2TestNet } from '@/constant';
import { useIsMounted } from '@/hooks/useIsMouted';
import { BtcProvider } from '../wallets/btcWallet';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }: { children: React.ReactNode }) {
  const customTheme = createTheme({
    palette: { mode: 'light' },
    typography: {
      fontFamily: 'Titillium Web,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Hanson',
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
        // walletConnectWallet({ projectId, chains }),
        // injectedWallet({ chains }),
        // rainbowWallet({ projectId, chains }),
      ],
    },
  ]);
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [...connectors(), new WalletConnectConnector({
      chains,
      options: {
        projectId,
      },
    }),],
    publicClient,
    webSocketPublicClient,
  });
  const isMouted = useIsMounted()

  return (
    <ThemeProvider theme={customTheme}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={lightTheme({
          accentColor: 'black',
          accentColorForeground: 'white'
        })} locale='en'>
          <BtcProvider>
            <NiceModal.Provider>
              <CssBaseline />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <NextNProgress color='#FFA728' height={10} />
              {
                isMouted && children
              }
            </NiceModal.Provider>
          </BtcProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
