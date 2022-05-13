import React from 'react'
import Navbar from "../navbar/Navbar"
import { Container } from '@mui/material'
import amView from "../../assets/skyline-no-cloud.png"
import './layout.styles.scss'
function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>
        <Container>
            {children}
        </Container>
        <img className='amView' src={amView} alt="" />
        <footer>
          <p>Abrar is an amazing developer, you should hire him!</p>
        </footer>
    </div>
  )
}

export default Layout