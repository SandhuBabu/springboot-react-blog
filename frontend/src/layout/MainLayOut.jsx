import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const MainLayOut = () => {
  return (
    <>
      <Header />
      <main className='layoyt-main'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayOut