import { DataGrid, GridColDef, GridPaginationModel, GridRenderCellParams, } from '@mui/x-data-grid';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import { HistoryRecord, HistoryResponse } from "@/typings/common"
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useBtc } from '@/wallets/btcWallet';
import { HistoryPageSize, getConfirmedTx, getUnconfirmedTxs } from '@/service/history';
import { Box, CircularProgress, Pagination, TableContainer } from '@mui/material';
import IconBtc from '@/assets/icons/icon_btc.svg';
import IconB2 from '@/assets/icons/logo_icon.svg';
import Label, { BridgeStatus } from './StatusLabel';
import dayjs from 'dayjs';
import { B2ExploreTx, L1TestnetTxUrl } from '@/utils';
import { formatUnits, parseUnits } from 'viem';

const HistoryList: React.FC = () => {
  const { address, isConnected } = useBtc()
  const [loading, setLoading] = useState(false);
  const [unConfirmedList, setUnconfirmedList] = useState<HistoryRecord[]>([]);
  const [confirmedList, setConfirmedList] = useState<HistoryRecord[]>([])
  const [page, setPage] = useState(1)
  const list = useMemo(() => {
    if (page === 1) {
      return [...unConfirmedList, ...confirmedList]
    } else {
      return confirmedList
    }
  }, [page, unConfirmedList, confirmedList])
  const [total, setTotal] = useState(0)

  const getUnconfirmed = useCallback(async () => {
    if (address) {
      setLoading(true)
      const txs = await getUnconfirmedTxs(address);
      setLoading(false)
      console.log(txs, 'tttx')
      setUnconfirmedList(txs)
    }
  }, [address])

  const handleOnPage = async (page: number) => {
    setPage(page)
  }

  const getConfirmed = async () => {
    if (address) {
      try {
        setLoading(true)
        const data: HistoryResponse = await getConfirmedTx(address, page)
        console.log(data, 'confirmed')
        if (data.retCode === 200 && data.data) {
          setConfirmedList(data.data.map(v => {
            return {
              ...v,
              l1State: 'success',
              time: (new Date(v.time_l2 || '').valueOf() / 1000).toString(),
              value: formatUnits(BigInt(v.value), 8)
            }
          }))
          setTotal(data.total)
          setLoading(false)
        }
      } catch (error) {
        console.log(error, 'get-tx-error')
      }
    }
  }

  useEffect(() => {
    if (address && page) {
      getConfirmed()
    }
  }, [address, page])

  useEffect(() => {
    if (address) getUnconfirmed()
  }, [address])
  const columns: GridColDef[] = [
    {
      field: 'state',
      headerName: 'State',
      type: 'string',
      sortable: false,
      filterable: false,
      minWidth: 80,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (item: GridRenderCellParams<HistoryRecord>) => {
        return <Box display={'flex'} flexDirection={'column'} gap='6px'>
          <Label status={item.row.l1State as BridgeStatus} />
          <Label status={item.row.state as BridgeStatus} />
        </Box>
      },
    }, {
      field: 'time',
      headerName: 'Time',
      type: 'string',
      sortable: false,
      filterable: false,
      minWidth: 200,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (item: GridRenderCellParams<HistoryRecord>) => {
        return <Box fontSize={'18px'}>{dayjs(new Date(Number(item.row.time) * 1000).toString()).format('YYYY/MM/DD HH:MM:ss')}</Box>
      },
    }, {
      field: 'value',
      headerName: 'Value',
      type: 'string',
      sortable: false,
      filterable: false,
      minWidth: 200,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (item: GridRenderCellParams<HistoryRecord>) => {
        return <Box fontSize={'18px'}>{item.row.value}BTC</Box>
      }
    }, {
      field: 'network',
      headerName: 'Networks',
      type: 'string',
      sortable: false,
      filterable: false,
      minWidth: 200,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (item: GridRenderCellParams<HistoryRecord>) => {
        return <Box>
          <Box display={'flex'} gap={'10px'} fontSize={'18px'} mb='10px' alignItems={'center'}>
            <Box sx={{ opacity: '0.5' }}>From</Box>
            <IconBtc />
            <Box sx={{ fontSize: '16px' }}>Bitcoin Testnet</Box>
            {
              item.row.hash && <LaunchOutlinedIcon onClick={() => {
                window.open(`${L1TestnetTxUrl}/${item.row.hash}`)
              }} sx={{ color: 'rgba(0,0,0,0.5)' }} />
            }
          </Box>
          <Box display={'flex'} gap={'10px'} fontSize={'18px'} alignItems={'center'}>
            <Box sx={{ opacity: '0.5', width: '39.7px' }}>To</Box>
            <IconB2 />
            <Box sx={{ fontSize: '16px', width: '100px' }}>B² Network</Box>
            {
              item.row.hash_l2 && <LaunchOutlinedIcon onClick={() => {
                window.open(`${B2ExploreTx}/${item.row.hash_l2}`)
              }} sx={{ color: 'rgba(0,0,0,0.5)' }} />
            }
          </Box>
        </Box>
      },
    }

  ];
  return (

    <TableContainer sx={{
      position: 'relative',
      mb: '100px'
    }}>
      <DataGrid
        disableColumnMenu
        getRowId={(item: HistoryRecord) => Symbol(item.hash).toString()}
        columnHeaderHeight={66}
        rowHeight={96}
        rows={list}
        columns={columns}
        keepNonExistentRowsSelected={false}
        rowCount={2}
        loading={loading}
        checkboxSelection={false}
        autoHeight
        disableRowSelectionOnClick={false}
        slots={{
          noResultsOverlay: () => (
            <Box display="flex" color={'#000'} alignItems="center" justifyContent="center" height="100%">
              {
                isConnected ? 'No Data' : <Box>Connect</Box>
              }
            </Box>
          ),
          loadingOverlay: () => (
            <Box display="flex" alignItems="center" justifyContent="center" height="100%">
              <CircularProgress sx={{ color: 'rgba(0,0,0,0.45)' }} size={20} />
            </Box>
          ),
          footer: () => {
            return <Box display={'flex'} mt='100px' justifyContent={'center'}>
              {
                total > 0 && <Pagination
                  page={page}
                  onChange={async (event, page) => {
                    await handleOnPage(page);
                  }} count={Math.ceil(total / HistoryPageSize)} variant="outlined" shape="rounded" />
              }
            </Box>
          },
        }}
        sx={{
          color: '#000',
          border: 'none',
          borderRadius: '0',
          overflow: 'hidden',
          '.MuiDataGrid-overlay': {
            backgroundColor: 'white'
          },
          '.MuiDataGrid-virtualScroller': {
            background: 'white',
            overflow: 'visible!important'
          },
          '.MuiDataGrid-columnHeader:focus-within': {
            border: 'none',
            outline: 'none',
          },
          '.MuiDataGrid-columnHeader:focus': {
            border: 'none',
            outline: 'none',
          },
          '.MuiDataGrid-columnHeaders': {
            border: 'none',
            height: '36px',
            borderRadius: '50px',
            paddingLeft: 0,
            paddingRight: 0,
            fontSize: '14px',
            color: '#000',
            fontWeight: 500,
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '.MuiDataGrid-columnHeader': {
              padding: 0,
            },
          },
          '& .MuiDataGrid-main': {
            overflow: 'visible',
            width: '99%',
          },
          '& .MuiDataGrid-row': {
            cursor: 'pointer',
            boxSizing: 'border-box',
            border: '0.5px solid #000',
            marginBottom: '10px',
            borderRadius: '12px',
            '&:hover, &.Mui-selected, &.Mui-selected:hover': {
              backgroundColor: 'rgba(255,255,255,0.03)',
            },
            '& .MuiDataGrid-cell': {
              borderBottom: 'none',
              padding: '13px 0',
              '&:focus-within, &:focus': {
                border: 'none',
                outline: 'none',
              },
            },
          },
        }}
      />
    </TableContainer>
  )

}

export default HistoryList