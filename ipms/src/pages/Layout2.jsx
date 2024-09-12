import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'

function Layout2() 
{
  return (
    <>
        <Navbar2/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout2