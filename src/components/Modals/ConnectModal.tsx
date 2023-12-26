import React from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography, Box } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useIsMobile from '@/hooks/useIsMobile';
import CloseIcon from '@mui/icons-material/Close';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BtcConnectorName, useBtc } from '@/wallets/btcWallet';
import { useConnect, useNetwork, useSwitchNetwork } from 'wagmi';
import { B2ChainId } from '@/constant';
import UnisatLogo from '../../assets/icons/xverse.svg'
import XverseLogo from '@/assets/icons/xverse.svg'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const BTCWallets = [
  {
    key: 'Unisat',
    logo: '/assets/unisat.svg'
  },
  // {
  //   key: 'OKX',
  //   logo: <OkxLogo />
  // },
  {
    key: 'Xverse',
    logo: '/assets/xverse.svg'
  },
]

const ConnectModal = NiceModal.create(() => {
  const modal = useModal();
  const isMobile = useIsMobile()
  const { connect, isConnected } = useBtc()
  // const { connect, connectors, error, isLoading, pendingConnector } =
  //   useConnect();
  // const { chain } = useNetwork()
  const connectBtcWallet = async (btcWallet: BtcConnectorName) => {
    const res = await connect(btcWallet)
    res && modal.hide()
  }
  // const { switchNetwork } = useSwitchNetwork()



  return (
    <Dialog
      TransitionComponent={Transition}
      open={modal.visible}
      onClose={() => modal.hide()}
      TransitionProps={{
        onExited: () => modal.remove(),
      }}
      sx={{
        '.MuiPaper-root': {
          borderRadius: '12px',
          background: 'white',
          width: isMobile ? '90vw' : '400px'
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CloseIcon onClick={() => modal.hide()} sx={{ color: 'black', cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <Typography sx={{ width: '100%' }}>B² chain </Typography>
        <Box sx={{ width: '100%' }}>
          <div>
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => {
                  connect({ connector })
                }}
              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  ' (connecting)'}
              </button>
            ))}
            <ConnectButton />
            {error && <div>{error.message}</div>}
          </div>
        </Box>
        <Typography sx={{ width: '100%' }}>BTC </Typography> */}
        <Box >
          {
            BTCWallets.map(wallet => {
              return <Box
                key={wallet.key} display={'flex'} gap={'20px'}
                sx={{
                  p: '10px 20px',
                  border: '1px solid #888',
                  borderRadius: '8px',
                  mb: '20px',
                  cursor: 'pointer',
                  background: '#fef9ed',
                  alignItems: 'center',
                  '& .icon': {
                    width: '30px',
                    height: '30px'
                  }
                }}>
                <img className='icon' src={wallet.logo} alt="logo" />
                <Box sx={{ fontSize: '20px', fontWeight: 600 }} onClick={() => connectBtcWallet(wallet.key as BtcConnectorName)}> Connect {wallet.key} </Box>
              </Box>
            })
          }
        </Box>
      </DialogContent>
    </Dialog>
  );
});

export default ConnectModal;
