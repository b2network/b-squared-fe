import React from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useIsMobile from 'utils/hooks/useIsMobile';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SubscribeDialog = NiceModal.create(() => {
  const modal = useModal();
  const isMobile = useIsMobile()
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
        <img style={{ width: isMobile ? '100%' : '280px' }} src="/assets/subscribe.svg" alt="coming" />
        <DialogContentText fontSize={'20px'} color={'#000'} mt={'20px'} id="alert-dialog-slide-description">
          thank you for subscribing!
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '20px'
      }}>
        <Button className='hvr-bounce-to-right' sx={{ background: '#FFB852', color: 'black' }} onClick={() => modal.hide()} color="primary">
          ok
        </Button>
      </DialogActions>
    </Dialog>
  );
});

export default SubscribeDialog;



