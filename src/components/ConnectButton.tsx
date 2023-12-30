import { BtcConnectorName, useBtc } from "@/wallets/btcWallet"
import NiceModal from "@ebay/nice-modal-react"
import { Box, Typography } from "@mui/material"
import ConnectModal from "./Modals/ConnectModal"
import { shorterAddress } from "@/utils"
import * as React from 'react';
import Popover from '@mui/material/Popover';
import LogoutIcon from '@mui/icons-material/Logout';
import useB2Balance from "@/hooks/useB2Balance"

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
        isConnected && address ? <Connected balance={balance} connectorName={connectorName} disconnect={disconnect} text={shorterAddress(address || '')} /> : <Box sx={{ px: '20px' }}>Connect Wallet</Box>
      }
    </Box>
  )
}



function Connected({ text, disconnect, connectorName, balance }: { text: string, disconnect: () => void, balance: string, connectorName: BtcConnectorName | undefined }) {
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
          px: '20px', gap: '8px',
          '& .img': {
            width: '24px',
            height: '24px'
          }
        }}
        onClick={handlePopoverOpen}
      // onMouseLeave={handlePopoverClose}
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
            width: '190px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box >
          <Box sx={{ display: 'flex', borderBottom: '1px solid #888', gap: '20px', cursor: 'pointer', alignItems: 'center', height: '50px', pl: '20px' }} onClick={disconnect}>
            <img src={"/assets/logo_icon.svg"} style={{ width: '24px', height: '24px' }} alt="logo" />
            <Typography fontWeight={500}>{balance || '--'}BTC</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '20px', pl: '20px', alignItems: 'center', cursor: 'pointer', height: '50px' }} onClick={disconnect}>
            <LogoutIcon />
            <Typography fontWeight={600}>Disconnect</Typography>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}

export default ConnectBtcButton;
