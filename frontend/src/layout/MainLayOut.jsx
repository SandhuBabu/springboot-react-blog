import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'

const MainLayOut = () => {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayOut