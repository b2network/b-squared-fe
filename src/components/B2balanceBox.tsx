import useB2Balance from "@/hooks/useB2Balance"
import { useBtc } from "@/wallets/btcWallet"
import { Box } from "@mui/material"
import LogoSvg from '@/assets/icons/logo_icon.svg'
import { usePathname } from "next/navigation"
import { useMemo } from "react"

const B2BalanceBox = () => {
  const { address } = useBtc()
  const balance = useB2Balance(address || '')
  const pathname = usePathname()
  const show = useMemo(() => {
    return pathname.includes('/bridge') && address
  }, [pathname, address])

  return (
    <Box sx={{
      display: show ? 'flex' : 'none',
      alignItems: 'center',
      px: '10px',
      gap: '4px',
      borderRadius: '22px',
      height: '44px',
      lineHeight: '44px',
      textAlign: 'center',
      color: 'black',
      background: '#FFA728',
      whiteSpace: 'nowrap',
      '&:hover': {
        borderRadius: '22px',
        border: 'none',
        cursor: 'pointer'
      }
    }}>
      <LogoSvg style={{ transform: 'scale(0.7)' }} />
      <Box>{balance}</Box>
    </Box>
  )
}
export default B2BalanceBox;