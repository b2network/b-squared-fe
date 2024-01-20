import { HistoryTab } from "@/typings/common";
import { Box, Button } from "@mui/material";

const Tab = ({ handleSelectTab }: { handleSelectTab: (t: HistoryTab) => void, current: HistoryTab }) => {
  return <Box sx={{ display: 'flex', gap: '16px', my: '30px' }}>
    <Button
      variant="contained"
      sx={{
        p: '10px 58px',
        borderRadius: '100px',
        background: 'black',
        color: 'white',
        fontSize: '24px',
        fontWeight: '600',
        textTransform: 'none',
        '&:hover': {
          background: 'black'
        }
      }} onClick={() => { handleSelectTab(HistoryTab.Deposit) }}>Deposit</Button>
    <Button
      variant="contained"
      sx={{
        p: '10px 58px',
        borderRadius: '100px',
        background: 'white',
        color: '#000',
        fontSize: '24px',
        fontWeight: '600',
        textTransform: 'none',
        cursor: 'not-allowed',
        border:'1px solid #000',
        '&:hover': {
          background: 'white'
        }
      }}
      onClick={() => {
        // handleSelectTab(HistoryTab.Withdraw)
      }}>Withdraw</Button>
  </Box>
}

export default Tab;