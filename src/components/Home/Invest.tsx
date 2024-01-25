import { primaryColor } from "@/utils";
import { Girl } from "@mui/icons-material";
import { Box, Grid } from "@mui/material"

const INVESTLIST = [
  '/assets/invest/icon_hashkey.svg',
  '/assets/invest/icon_ventures.svg',
  '/assets/invest/icon_abcde.svg',
  '/assets/invest/icon_idg.svg',
  '/assets/invest/icon_kucoin.svg',
  '/assets/invest/icon_water.svg',
  '/assets/invest/icon_ogs.svg',
  '/assets/invest/icon_antalpha.svg',
]

const Invest = () => {
  return (
    <Box sx={{
      background: 'url("/assets/invest_bg.png") no-repeat center center',
      p: '30px'
    }}>
      <Box sx={{ fontSize: '30px', fontWeight: 700, fontFamily: 'Hanson', color: primaryColor, mb: '30px' }}>Invested By</Box>
      <Grid container spacing={4} justifyContent={'center'}>
        {
          INVESTLIST.map((v, i) => <Grid item key={i}> <img src={v} alt="icon" /></Grid>)
        }
      </Grid>
    </Box>
  )
}

export default Invest;