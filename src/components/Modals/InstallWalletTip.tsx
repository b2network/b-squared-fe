import React, { useMemo, useState } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography, InputBase } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useIsMobile from '@/hooks/useIsMobile';
import CloseIcon from '@mui/icons-material/Close';
import { BtcConnectorName } from '@/wallets/btcWallet';
import { primaryColor } from '@/utils';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const UNISATDOWNLOAD = 'https://unisat.io/download'
const XVERSEDOWNLOAD = 'https://www.xverse.app/'
const InstallWalletTip = NiceModal.create(({ wallet }: { wallet: BtcConnectorName }) => {
  const modal = useModal();
  const downloadUrl = useMemo(() => {
    if (wallet === 'Unisat') return UNISATDOWNLOAD
    if (wallet === 'Xverse') return XVERSEDOWNLOAD
    return ''
  }, [])
  const handleConfirm = () => {
    modal.hide()
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
          width: '600px'
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CloseIcon onClick={() => modal.hide()} sx={{ color: 'black', cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography>Please Install <a target='_blank' style={{ color: primaryColor }} href={downloadUrl}>{wallet} Wallet</a> Plugin to Continue.</Typography>
      </DialogContent>
      <DialogActions sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '20px'
      }}>
        <Button sx={{
          background: '#000', color: 'white', width: '140px', borderRadius: '70px',
          textTransform: 'none',
          '&:hover': {
            background: 'black'
          }
        }} onClick={handleConfirm} color="primary">
          Comfirm
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default InstallWalletTip;



