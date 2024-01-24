"use client"
import React, { ReactNode, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { publicProvider } from 'wagmi/providers/public';
import NiceModal from '@ebay/nice-modal-react';
import { CssBaseline } from '@mui/material';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { B2TestNet } from '@/constant';
import { useIsMounted } from '@/hooks/useIsMouted';
import { BtcProvider } from '../wallets/btcWallet';
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
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: [ new MetaMaskConnector({ chains }),],
    publicClient,
    webSocketPublicClient,
  });
  const isMouted = useIsMounted()
  return (
    <ThemeProvider theme={customTheme}>
      <WagmiConfig config={wagmiConfig}>
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
            {
              isMouted && children
            }
          </NiceModal.Provider>
        </BtcProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
}
