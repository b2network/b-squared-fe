import React from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography, Box } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useIsMobile from '@/hooks/useIsMobile';
import CloseIcon from '@mui/icons-material/Close';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BtcConnectorName, useBtc } from '@/btcWallet';
import ConnectButtonLocal from '../ConnectButtonLocal';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ConnectModal = NiceModal.create(() => {
  const modal = useModal();
  const isMobile = useIsMobile()
  const btc = useBtc()

  const connectBtcWallet = (btcWallet: BtcConnectorName) => {
    btc.connect(btcWallet)
  }

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
          width: isMobile ? '90vw' : '640px'
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CloseIcon onClick={() => modal.hide()} sx={{ color: 'black', cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography>eth </Typography>
        <Box sx={{ width: '100%' }}>
          <ConnectButtonLocal />
        </Box>
        <Typography>btc </Typography>
        <Box display='flex'>
          <Button onClick={() => {
            connectBtcWallet('Unisat')
          }}>Connect unisat</Button>
          <Button onClick={() => {
            connectBtcWallet('OKX')
          }}>Connect Okx</Button>
        </Box>
      </DialogContent>
      {/* <DialogActions sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '20px'
      }}>
        <Button sx={{ background: '#000', color: 'white', width: '140px', borderRadius: '70px' }} onClick={() => modal.hide()} color="primary">
          ok
        </Button>
      </DialogActions> */}
    </Dialog>
  );
});

export default ConnectModal;
