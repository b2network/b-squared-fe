import { primaryColor } from "@/utils";
import { Box, Grid } from "@mui/material"

const INVESTLIST = [
  '/assets/invest/icon_hashkey.png',
  '/assets/invest/icon_okx.svg',
  '/assets/invest/icon_abcde.svg',
  '/assets/invest/icon_idg.svg',
  '/assets/invest/icon_kucoin.png',
  '/assets/invest/icon_water.svg',
  '/assets/invest/icon_satoshi.svg',
  '/assets/invest/icon_antalpha.svg',
  '/assets/invest/icon_ogs.svg',
  '/assets/invest/icon_leland.svg',
]

const Invest = () => {
  return (
    <Box sx={{
      background: 'url("/assets/invest_bg.png") no-repeat center center',
      p: '30px'
    }}>
      <Box data-aos='fade-up'  sx={{ fontSize: '30px', fontWeight: 700, fontFamily: 'Hanson', color: primaryColor, mb: '30px' }}>Invested By</Box>
      <Grid container spacing={4} justifyContent={'center'}>
        {
          INVESTLIST.map((v, i) => <Grid data-aos='fade-up' item key={i}> <img style={{width: "220px", height: "61px"}} src={v} alt="icon" /></Grid>)
        }
      </Grid>
    </Box>
  )
}

export default Invest;