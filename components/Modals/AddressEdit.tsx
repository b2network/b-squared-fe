import React, { useState } from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Typography, InputBase } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useIsMobile from 'hooks/useIsMobile';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});


const AddressEditDialog = NiceModal.create(() => {
  const modal = useModal();
  const isMobile = useIsMobile()
  const [address, setAddress] = useState('')
  const handleConfirm = () => {
    modal.resolve({ address })
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
          width: isMobile ? '90vw' : '640px'
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <CloseIcon onClick={() => modal.hide()} sx={{ color: 'black', cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography width={'100%'} textAlign={'left'}>Address</Typography>
        <InputBase
          value={address}
          onChange={(e) => { setAddress(e.target.value) }}
          sx={{
            border: '1px solid black',
            height: '48px',
            pl: '16px',
            width: "100%"
          }} />
      </DialogContent>
      <DialogActions sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '20px'
      }}>
        <Button sx={{
          background: '#000', color: 'white', width: '140px', borderRadius: '70px',
          '&:hover': {
            background:'black'
          }
        }} onClick={handleConfirm} color="primary">
          Comfirm
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default AddressEditDialog;



