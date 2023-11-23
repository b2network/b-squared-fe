import { Box, Button, useMediaQuery } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ConnectButtonLocal = () => {

  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready && account && chain && (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    sx={{
                      px: '12px',
                      width: '100%',
                      height: '50px',
                      background: 'black',
                      borderRadius: '25px',
                      fontWeight: '600',
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '20px',
                      '&:hover': {
                        background: 'black',
                        transform: 'scale(1.01)',
                        transition: '0.3s',
                      },
                    }}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    sx={{
                      px: '12px',
                      height: '40px',
                      background: '#FF494A',
                      borderRadius: '12px',
                      fontWeight: '700',
                      color: 'white',
                      textTransform: 'none',
                      fontSize: '16px',
                      '&:hover': {
                        background: '#FF494A',
                        transform: 'scale(1.05)',
                        transition: '0.3s',
                      },
                    }}
                    endIcon={<ExpandMoreIcon sx={{ fontSize: '20px', fontWeight: 'bold' }} />}
                  >
                    Wrong network
                  </Button>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12, width: '100%', alignItems: 'center' }}>
                  {account.address && (
                    <Box
                      onClick={() => {
                        openAccountModal();
                      }}
                      sx={{
                        width: '100%',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#fef9ed',
                        height: '50px',
                        borderRadius: '50px',
                        fontSize: '20px',
                        fontWeight: 600,
                        gap: '6px',
                        cursor: 'pointer',
                        border: '1px solid black',
                        '&:hover': {
                          transform: 'scale(1.01)',
                          transition: '0.3s',
                        },
                      }}
                    >
                      <Box fontSize={'16px'} fontWeight={'bold'}>
                        {account.displayName}
                      </Box>
                      <ExpandMoreIcon sx={{ width: '24px', height: '24px' }} />
                    </Box>
                  )}
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default ConnectButtonLocal;
