import { Box, Typography } from "@mui/material"
import useIsMobile from '@/hooks/useIsMobile';
import { useEffect, useState } from "react";
import { odysseyStaticData, buzzStaticData } from '@/service/home_data';


const DataPart = () => {
  const isMobile = useIsMobile();
  const [addressCount, setAddressCount] = useState(0);
  const [txCount, setTxCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [tvlNum, setTvlNum] = useState(0);

  const getStaticDataFn = async () => {
    let userNum = 0;
    const res1 = await odysseyStaticData();
    if (res1.code == 0) {
      setAddressCount(res1?.data?.blockchain_address_count);
      setTxCount(res1?.data?.blockchain_tx_count);
      userNum += Number(res1?.data?.odyssey_user_count);
    }
    const res2 = await buzzStaticData();
    if (res2.code == 0) {
      setTvlNum(res2?.data?.asset_tvl);
      userNum += Number(res2?.data?.deposited_user);
    }
    setUserCount(userNum);
  }

  useEffect(() => {
    getStaticDataFn();
  }, [])

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      alignItems: 'stretch',
      minHeight: isMobile ? '330px' : '321px',
      p: '1px',
      gap: '1px',
      overflow: 'hidden',
      '.data_val': {
        color: '#FFA728',
        fontSize: isMobile ? '23px' : '38px',
        fontWeight: '900',
        lineHeight: '32px',
        fontFamily: 'Titillium Web',
        textTransform: 'uppercase'
      },
      '.data_label': {
        color: '#000000',
        fontSize: isMobile ? '23px' : '22px',
        fontWeight: '400',
        lineHeight: '20px',
        fontFamily: 'Titillium Web',
        textTransform: 'uppercase',
        marginTop: '10px'
      }
    }}>
      <Box sx={{
        py: '30px',
        px: isMobile ? '15px' : '30px',
        minHeight: isMobile ? '330px' : '321px',
        background: 'white',
        flex: '1',
        borderRadius: '8px',
        color: '#000',
        '.text': {
          fontSize: isMobile ? '23px' : '30px',
          fontWeight: '700',
          lineHeight: '1.2',
          fontFamily: 'Hanson',
          textTransform: 'uppercase'
        },
      }}>

        <Typography data-aos='fade-down' className='text'>b² data</Typography>
        <Box sx={{
          width: isMobile ? '200px' : '757px',
          height: isMobile ? '200px' : '71px',
          background: 'url("/assets/data_tab.svg")',
          marginTop: '25px',
          backgroundSize: 'cover',
          '.shadow': {
            position: 'absolute',
            bottom: '50px',
            right: '125px',
          }
        }}>
        </Box>
        <Box sx={{
          width: isMobile ? '200px' : '758px',
          height: isMobile ? '200px' : '103px',
          background: 'url("/assets/data_bg_large.svg")',
          marginTop: '20px',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}>
            <Typography data-aos='fade-down' className='data_val'>{Number(addressCount)?.toLocaleString()}</Typography>
            <Typography data-aos='fade-down' className='data_label'>Wallet Addresses</Typography>
          </Box>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}>
            <Typography data-aos='fade-down' className='data_val'>{Number(txCount)?.toLocaleString()}</Typography>
            <Typography data-aos='fade-down' className='data_label'>Total Transactions</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        width: '418px',
        borderRadius: '8px',
        background: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Box sx={{
          width: '358px',
          height: '115px',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: 'url("/assets/data_bg_small.svg")',
          backgroundSize: 'cover',
        }}>
          <Typography data-aos='fade-down' className='data_val'>{Number(userCount)?.toLocaleString()}</Typography>
          <Typography data-aos='fade-down' className='data_label'>Total Users</Typography>
        </Box>
        <Box sx={{
          width: '358px',
          height: '115px',
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: 'url("/assets/data_bg_small.svg")',
          backgroundSize: 'cover',
          marginTop: '20px'
        }}>
          <Typography data-aos='fade-down' className='data_val'>{Number(tvlNum)?.toLocaleString()}</Typography>
          <Typography data-aos='fade-down' className='data_label'>Buzz TVL</Typography>
        </Box>
      </Box>
    </Box>

  )
}

export default DataPart;