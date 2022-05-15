import React from 'react'
import Navbar from "../navbar/Navbar"
import { Container } from '@mui/material'
import amView from "../../assets/skyline-no-cloud.png"
import phineas from "../../assets/phineas.png"
import ferb from "../../assets/ferb.svg"
import './layout.styles.scss'
function Layout({children}) {
  return (
    <div className='layout'>
        <Navbar/>

        
        <Container>
                <div className="banner">
          <h1>Want to Work on Something Awesome?</h1>
          <p> <img src={phineas} alt="" /><span>"Yes... Yes I do!"</span></p>
        </div>
            {children}
        </Container>
        <img className='amView' src={amView} alt="" />
        <footer>
          <p>Abrar is an awesome developer, you should hire him!</p>
        </footer>
    </div>
  )
}

export default Layout