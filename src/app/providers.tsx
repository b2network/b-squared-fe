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
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  okxWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { B2TestNet } from '@/constant';
import { useIsMounted } from '@/hooks/useIsMouted';
import { BtcProvider } from '../btcWallet';

export function Providers({ children }: { children: React.ReactNode }) {
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
