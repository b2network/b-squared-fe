import { primaryColor } from "@/utils"
import { Box } from "@mui/material"


export enum BridgeStatus {
  Unconfirmed = 'Unconfirmed',
  Success = 'success',
  Failed = 'failed',
  Pending = 'Pending'
}

const COLORS = {
  [BridgeStatus.Unconfirmed]: {
    color: primaryColor,
    bg: 'rgb(255, 244, 229)'
  },
  [BridgeStatus.Success]: {
    color: '#50B042',
    bg: '#F3FEF2'
  },
  [BridgeStatus.Failed]: {
    color: '#E24F48',
    bg: '#FDF3F2'
  }, [BridgeStatus.Pending]: {
    color: primaryColor,
    bg: 'rgb(255, 244, 229)'
  }
}

const Label = ({ status }: { status: BridgeStatus }) => {
  return (
    <Box sx={{
      width: '112px',
      height: '32px',
      borderRadius: '20px',
      lineHeight: '32px',
      color: COLORS[status]?.color,
      border: `1px solid ${COLORS[status]?.color}`,
      background: COLORS[status]?.bg,
      textAlign: 'center',
      textTransform: 'capitalize'
    }}>
      {status}
    </Box>
  )
}
export default Label