import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const MainLayOut = () => {
  return (
    <>
      <Header />
      <div className='layoyt-main'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayOut