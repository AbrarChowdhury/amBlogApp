import React from 'react'
import Navbar from "../navbar/Navbar"
import { Container } from '@mui/material'
function Layout({children}) {
  return (
    <div>
        <Navbar/>
        <Container>
            {children}
        </Container>
    </div>
  )
}

export default Layout