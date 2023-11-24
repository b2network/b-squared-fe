import NiceModal from "@ebay/nice-modal-react"
import { Box, MenuItem, Select, Typography } from "@mui/material"
import AddressEditDialog from "components/Modals/AddressEdit"
import { shorterAddress } from "utils"

type Iprops = {
  to: string,
  setTo: (val: string) => void
  amount: string,
  gas: string
}

const WithdrawTo: React.FC<Iprops> = ({ to, setTo, amount,gas }) => {
  const DefaultAmount = '0.0'
  const handleEdit = () => {
    NiceModal.show(AddressEditDialog, { defaultAddress: to }).then((res: any) => {
      // console.log(res, 'modal-res')
      setTo(res.address)
    })
  }

  return (
    <Box sx={{
      p: '24px',
      border: '1px solid black',
      borderRadius: '12px',
      fontSize: '18px',
      fontFamily: 'Titillium Web',
      color: 'rgba(0,0,0,0.65)',
      lineHeight: '27px'
    }}>
      <Box display={'flex'} alignItems={'center'} mb={'16px'}>
        To <Select value={'btc'} sx={{ width: '204px', height: '38px', ml: '8px' }}>
          <MenuItem value='btc' sx={{ verticalAlign: 'middle' }}>
            <Box display={'flex'} alignItems={'center'} sx={{
              '& .img': {
                width: '24px',
                mr: '8px'
              }
            }}>
              <img className="img" src="/assets/icon_btc.svg" alt="icon" />
              BTC
            </Box>
          </MenuItem>
        </Select>
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Box>send to address: {shorterAddress(to)}</Box>
        <Box
          onClick={handleEdit}
          sx={{
            textDecoration: 'underline',
            color: '#FFA728',
            ml: '10px',
            cursor: 'pointer'
          }}>Edit</Box>
      </Box>
      <Box>you will receive: {amount || DefaultAmount} BTC</Box>
      <Box>gas fee:  {gas} BTC</Box>
    </Box>
  )
}

export default WithdrawTo
