import React from 'react';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Box, Link } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import useIsMobile from '@/hooks/useIsMobile';
import CloseIcon from '@mui/icons-material/Close';
import { primaryColor } from '@/utils';
import { useRouter } from 'next/navigation';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & any,
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SucessContent = ({ txId }: { txId: string }) => {
  const modal = useModal();
  const router = useRouter()
  return (
    <Box sx={{
      '& .img': {
        width: '180px',
        mb: '30px'
      }
    }} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
      <img className="img" src="/assets/icon_success.svg" alt="success" />
      <Box sx={{
        fontSize: '24px',
        fontWeight: 600
      }}>Transaction submitted !</Box>
      <Box fontSize={'20px'} textAlign={'center'} mt='20px' mb={'10px'}>The transfer is in progress. Tokens will be sent to your account in a few minutes.</Box>
      {
        txId && <Link target='_blank' sx={{ color: primaryColor, textDecorationColor: primaryColor }} href={`https://mempool.space/testnet/tx/${txId}`}>Track the progress on the blockchain explorer</Link>
      }
      <Box onClick={() => {
        router.push('/history');
        modal.hide()
      }} sx={{ color: primaryColor, cursor: 'pointer',textDecoration:'underline',mt:'5px' }}>Track the progress on the bridge history</Box>
    </Box>
  )
}

const FailedContent = () => {
  return (
    <Box sx={{
      '& .img': {
        width: '162px',
        mb: '44px'
      }
    }} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
      <img className="img" src="/assets/icon_fail.svg" alt="failed" />
      <Box sx={{
        fontSize: '24px',
        fontWeight: 600
      }}>Transaction failed !</Box>
      <Box fontSize={'18px'} mt='8px' mb={'30px'}>Please try again later.</Box>
    </Box>
  )
}

const ResultModal = NiceModal.create(({ status, txId }: { status: 'success' | 'failed', txId?: string }) => {
  const modal = useModal();
  const isMobile = useIsMobile()
  return (
    <Dialog
      TransitionComponent={Transition}
      open={modal.visible}
      onClose={() => {
        modal.resolve()
        modal.hide()
      }}
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
        <CloseIcon onClick={() => {
          modal.resolve()
          modal.hide()
        }} sx={{ color: 'black', cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {
          status === 'success' && <SucessContent txId={txId || ''} />
        }
        {
          status === 'failed' && <FailedContent />
        }
      </DialogContent>
      {/* <DialogActions sx={{
        display: 'flex',
        justifyContent: 'center',
        mb: '20px'
      }}>
        <Button className='hvr-bounce-to-right' sx={{ background: '#000', color: 'white', width: '140px', borderRadius: '70px' }} onClick={() => modal.hide()} color="primary">
          ok
        </Button>
      </DialogActions> */}
    </Dialog>
  );
});

export default ResultModal;



