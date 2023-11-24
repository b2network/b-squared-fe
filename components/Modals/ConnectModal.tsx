import React from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Box } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useIsMobile from 'hooks/useIsMobile';
import CloseIcon from '@mui/icons-material/Close';
import { useBtc } from 'btcWallet';
import { useAccount, useConnect } from 'wagmi';
import { shorterAddress } from 'utils';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ConnectDialog = NiceModal.create(() => {
  const modal = useModal();
  const isMobile = useIsMobile()
  const btc = useBtc()
  const evm = useConnect()
  const { isConnected, address } = useAccount()
  const metaMaskConector = evm.connectors.find(v => v.name === 'MetaMask')
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
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>Connect Wallet</Box>
        <CloseIcon onClick={() => modal.hide()} sx={{ color: 'black', cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Button
          onClick={() => {
            btc.connect('Unisat')
          }}
          sx={{
            width: '50%',
            height: '50px',
            borderRadius: '50px',
            background: "black",
            color: 'white',
            fontSize: '20px',
            textTransform: 'none',
            mb: '30px',
            '&:hover': {
              background: 'black'
            }
          }} variant="outlined">
          {btc.isConnected ? shorterAddress(btc.address || '') : 'Connect Unisat'}
        </Button>
        <Button
          onClick={() => {
            metaMaskConector && evm.connect({ connector: metaMaskConector })
          }}
          sx={{
            width: '50%',
            height: '50px',
            borderRadius: '50px',
            background: "black",
            color: 'white',
            fontSize: '20px',
            textTransform: 'none',
            '&:hover': {
              background: 'black'
            }
          }} variant="outlined">{isConnected?shorterAddress(address||''):'Connect Metamask' }</Button>
      </DialogContent>
    </Dialog>
  );
});

export default ConnectDialog;



