'use client'
import { Box, Link, Popover } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import IconBug from '@/assets/icons/icon_bug.svg'
import IconGit from '@/assets/icons/icon_git.svg'
import IconFaucet from '@/assets/icons/icon_faucet.svg'
import { useRouter } from "next/navigation";
import { BSqured } from "@/utils";

const DEVELOPERLINKS = [
  {
    name: 'Bug Bounty Program',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSeUQE-BfDk4cRl9iyMhAlZNj-XTH4YJo3MaaNoHKA2IXc7gJQ/viewform',
    icon: <IconBug />
  }, {
    name: 'Github',
    link: 'https://github.com/b2network',
    icon: <IconGit />
  },
  {
    name: 'B² Testnet Faucet',
    icon: <IconFaucet style={{ transform: 'scale(1.3)' }} />,
    link: BSqured + '/faucet'
  }, {
    name: 'Grant',
    icon: <img src="/assets/grant.svg" style={{ width: '26px', height: '26px' }} alt="icon" />,
    link: 'https://medium.com/@bsquarednetwork/b%C2%B2-network-grant-program-all-you-need-to-know-4f740f551979'
  }
]


const Developers = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };


  const open = Boolean(anchorEl);
  return (
    <>
      <Box
        onClick={handlePopoverOpen}
        sx={{
          display: 'flex',
          gap: '3px',
          fontSize: '20px',
          color: '#000',
          fontWeight: open ? 700 : 400,
          cursor: 'pointer',
          alignItems: 'center',
          py: '20px',
          minWidth: '135px'
        }}>
        <Box>Developers</Box>
        <ExpandMoreIcon />
      </Box>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        sx={{
          '.MuiPaper-root': {
            borderRadius: '8px',
            mt: '5px',
            p: '20px',
            pb: '2px'
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        disableRestoreFocus
      >
        <Box
          onMouseLeave={handlePopoverClose}
        >
          {
            DEVELOPERLINKS.map(
              link => {
                return (
                  <Box onClick={handlePopoverClose} key={link.name} sx={{
                    mb: '18px',
                    opacity: 0.6,
                    '&:hover': {
                      opacity: 1,
                      cursor: 'pointer',
                      fontWeight: 600
                    }
                  }}>
                    <Link href={link.link} sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '17px',
                      color: 'black',
                      textDecoration: 'none',
                      fontSize: '18px',
                      cursor: 'pointer'
                    }} target='_blank'>
                      {link.icon}
                      {link.name}
                    </Link>
                  </Box>
                )
              }
            )
          }
        </Box>

      </Popover>
    </>
  )
}

export default Developers;