import { Box, Input, Typography } from "@mui/material";
import { allCategories, allProject } from './data';
import { useEffect, useState } from "react";

type Iprops = {
  val: number,
  handleClick: (v: number) => void
}

const Tab = ({ val, handleClick }: Iprops) => {
  const [showData, setShowData] = useState(allProject);
  const [searchVal, setSearchVal] = useState("");
  const [filterData, setFilterData] = useState(allProject);

  useEffect(() => {
    let data = allProject;
    if (val !== 0) {
      data = allProject?.filter(projectItem => projectItem.categorize?.includes(allCategories[val]))
    }
    setShowData(data)
    setFilterData(data);
  }, [val])

  const searchProjectFn = (value: string) => {
    let data;
    if (!value) {
      data = filterData;
    } else {
      data = filterData?.filter(projectItem => projectItem.projectName.toLocaleLowerCase()?.indexOf(value.toLocaleLowerCase()) > -1);
    }

    setShowData(data)
  }

  return <Box sx={{
    display: 'flex',
    background: '#fff',
    borderRadius: '12px 12px 0 0',
    padding: '36px',
    margin: '0 1px'
  }}>
    <Box sx={{
      display: 'flex',
      color: '#000',
      flexDirection: 'column'
    }}>
      {
        allCategories.map((item, index) => {
          return <Box
            key={item}
            onClick={() => {
              setSearchVal('');
              handleClick(index)

            }}
            sx={{
              width: '148px',
              height: '46px',
              marginBottom: '12px',
              textTransform: 'capitalize',
              background: index == val ? '#fef9ed' : '#fff',
              lineHeight: '46px',
              textAlign: 'center',
              border: '1px solid transparent',
              borderColor: index === val ? '#000' : '',
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: '600'
            }}>
            {item}
          </Box>
        }
        )
      }
    </Box>
    <Box sx={{ flex: '1', marginLeft: '60px', display: 'flex', flexDirection: 'column' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box sx={{ width: '316px', position: 'relative'}}>
          <Input value={searchVal} onChange={(e) => {
            setSearchVal(e.target.value?.trim())
            searchProjectFn(e.target.value?.trim())
          }} placeholder="Search" className="project_input" sx={{ border: '1px solid #000' }} />
          <img
            // onClick={() => {
            // searchProjectFn();
            // }}
            style={{ position: 'absolute', right: '10px', top: '10px', width: '24px', height: '24px', cursor: 'pointer' }} src="/assets/search.svg" alt='search' />
        </Box>
        <Box display="flex" sx={{ cursor: 'pointer',width: '125px' }} onClick={() => {
          window.open("https://forms.gle/apH3QcEsusr8P4V26")
        }}>
          <img style={{ marginRight: '3px', width: '24px', height: '24px' }} src='/assets/list.svg' alt='list'/>
          <Typography color="#000" fontSize="16px" fontWeight="700">List your Dapp</Typography>
        </Box>
      </Box>
      <Box sx={{ flex: "1", height: "100%", marginTop: '24px' }}>
        {
          showData?.map((item, index) => {
            return <Box
              key={item.projectName}
              // onClick={() => {
              //   handleClick(index)
              // }}
              sx={{
                width: '100%',
                minHeight: '130px',
                // textTransform: 'capitalize',
                marginBottom: '24px',
                background: 'url("/assets/project_bg.png") no-repeat center center',
                backgroundSize: '100% 100%',
                borderRadius: '12px',
                // cursor: 'pointer',
                fontSize: '18px',
                padding: '20px',
                display: 'flex',

              }}>

              <Box sx={{ display: 'flex', flex: '1', marginRight: '30px' }}>
                <Box sx={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '20px',border:'1.2px solid #000' }}>
                  <img style={{ width: '100%', height: '100%',}} src={`/assets/project/${item.img}.png`} alt="project" />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography marginRight="20px" color="#000" fontSize="24px" fontWeight="700">{item?.projectName}</Typography>
                    {item?.categorize?.map((categorizeItem => {
                      return (
                        <Box key={categorizeItem} sx={{ padding: '6px 19px', background: '#000', fontSize: '16px', fontWeight: '600', marginRight: '5px', color: '#fff', borderRadius: '42px', height: 'fit-content' }}>{categorizeItem}</Box>
                      )
                    }))}
                  </Box>
                  <Box sx={{ fontSize: '16px', fontWeight: '600', marginTop: '8px', lineHeight: '24px', color: 'rgba(0, 0, 0, 0.75)' }}>{item?.description}</Box>
                </Box>
              </Box>
              <Box sx={{ width: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'url("/assets/visitBg.svg") no-repeat center center', cursor: 'pointer' }} onClick={() => {
                item?.visitLink && window.open(item?.visitLink)
              }}>
                <Typography color="#fff" fontSize="16px" fontWeight="700">Visit</Typography>
                <img style={{ width: '12px', height: '8px', marginLeft: '8px' }} src="/assets/visitIcon.svg" alt='visit'/>
              </Box>
            </Box>
          }
          )
        }
      </Box>
    </Box>
  </Box>
}

export default Tab;
