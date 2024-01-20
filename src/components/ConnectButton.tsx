import { BtcConnectorName, useBtc } from "@/wallets/btcWallet"
import NiceModal from "@ebay/nice-modal-react"
import { Box, Link, Tooltip, Typography } from "@mui/material"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ConnectModal from "./Modals/ConnectModal"
import { FaucetUrl, primaryColor, shorterAddress } from "@/utils"
import * as React from 'react';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import useB2Balance from "@/hooks/useB2Balance"
import { useCopy } from "@/hooks/useCopy";
import HistoryIcon from '@mui/icons-material/History';
import { useRouter } from "next/navigation";


const ConnectBtcButton = () => {
  const { isConnected, address, connectorName, disconnect } = useBtc()
  const handleClick = () => {
    if (!isConnected) {
      NiceModal.show(ConnectModal)
    }
  }
  const balance = useB2Balance(address || '')
  return (
    <Box
      onClick={handleClick}
      sx={{
        borderRadius: '22px',
        height: '44px',
        lineHeight: '44px',
        textAlign: 'center',
        color: 'white',
        background: 'black',
        fontSize: '20px',
        whiteSpace: 'nowrap',
        ml: '15px',
        '&:hover': {
          borderRadius: '22px',
          border: 'none',
          cursor: 'pointer'
        }
      }}>
      {
        isConnected && address ? <Connected address={address} balance={balance} connectorName={connectorName} disconnect={disconnect} text={shorterAddress(address || '')} /> : <Box sx={{ px: '20px' }}>Connect Wallet</Box>
      }
    </Box>
  )
}



function Connected({ text, disconnect, connectorName, balance, address }: { address: string, text: string, disconnect: () => void, balance: string, connectorName: BtcConnectorName | undefined }) {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const logoPath = React.useMemo(() => {
    if (connectorName === 'Xverse') {
      return '/assets/xverse.svg'
    }
    if (connectorName === 'Unisat') {
      return '/assets/unisat.svg'
    }
    return ''
  }, [connectorName])

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);

  return (
    <div>
      <Box
        sx={{
          display: 'flex', alignItems: 'center',
          px: '30px', gap: '8px',
          '& .img': {
            width: '24px',
            height: '24px'
          }
        }}
        onClick={handlePopoverOpen}
      > <img className="img" src={logoPath} alt="logo" />
        <Box>{text}</Box>
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        sx={{
          '.MuiPaper-root': {
            border: '1px solid #000',
            borderRadius: '8px',
            mt: '5px',
            width: '231px',
            p: '20px'
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box >
          <AddressWithCopy address={address} />
          <Box sx={{ display: 'flex', flexDirection: 'column', pt: '17px', gap: '12px' }}>
            <Box sx={{ display: 'flex', gap: '20px', cursor: 'pointer', alignItems: 'center', }}>
              <img src={"/assets/logo_icon.svg"} style={{ width: '24px', height: '24px' }} alt="logo" />
              <Typography color={'rgba(0,0,0,0.5)'}>{balance || '--'} BTC</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', cursor: 'pointer', alignItems: 'center', }}>
              <HistoryIcon />
              <Typography onClick={() => { router.push('/history') }} fontSize={'18px'}>Bridge History</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', cursor: 'pointer', alignItems: 'center', }}>
              <HistoryIcon />
              <Link sx={{ color: 'black', textDecoration: 'none', fontSize: '18px' }} href={FaucetUrl}>B² Testnet Faucet</Link>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center', cursor: 'pointer', }} onClick={disconnect}>
              <LogoutIcon />
              <Typography fontWeight={400} fontSize={'18px'}>Disconnect</Typography>
            </Box>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}


const AddressWithCopy = ({ address }: { address: string }) => {
  const [isCopy, copyHandler] = useCopy()

  return <Box sx={{
    pb: '17px',
    borderBottom: '1px solid #EDEDED',
    '& .img': {
      width: '32px',
      height: '32px',
    }
  }} display={'flex'} gap={'7px'} alignItems={'center'}>
    <img className="img" src="/assets/icon_address.png" alt="address" />
    <Box fontSize={'20px'} fontWeight={600}>{shorterAddress(address)}</Box>
    <Tooltip open={isCopy} title="Copied !"><ContentCopyIcon sx={
      {
        color: primaryColor
      }
    } onClick={
      () => {
        copyHandler(address)
      }
    } /></Tooltip>
  </Box>
}

export default ConnectBtcButton;



