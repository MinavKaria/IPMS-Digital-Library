import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Card from '../components/Card'
function Layout() 
{
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>


    </>
  )
}

export default Layout