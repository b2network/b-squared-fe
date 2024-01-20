"use client"

import { Box } from "@mui/material"

const Maintain = () => {
  return (
    <Box sx={{
      margin: 'auto',
      width: '100%',
    }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'white',
        borderRadius: '12px',
        border: '1px solid black',
        pt: '186px',
        pb: '200px',
        '& .img': {
          width: '140px',
          height: '140px'
        }
      }}>
        <img className="img" src="/assets/maintain.svg" alt="maintain" />
        <Box sx={{ width: '600px', mt: '16px', textAlign: 'center', fontWeight: '600px' }}>
          Sorry for the inconvenience, We{"'"}re undergoing maintenance to enhance yourexperience.
          Please check back soon!</Box>
      </Box>
    </Box>
  )
}

export default Maintain;
