"use client"

import { Box, Button } from "@mui/material"
import { ReactNode, useEffect, useState } from "react";
import Top from "@/components/Ecosystem/Top";
import ListApp from "@/components/Ecosystem/ListApp";


const Ecosystem = () => {

  return (
    <Box sx={{
      margin: 'auto',
      width: '100%',
    }}>
      <Top />
      <ListApp />
    </Box>
  )
}

export default Ecosystem;
