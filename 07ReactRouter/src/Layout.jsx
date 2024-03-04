import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
        <Header />
        <Outlet />    {/*Outlet is used to add different components between Header and Footer*/}
        <Footer />
    </>
  )
}

export default Layout