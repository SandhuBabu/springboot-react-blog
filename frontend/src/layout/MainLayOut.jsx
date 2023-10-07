import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const MainLayOut = () => {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      {/* <Header /> */}
      <div className='container'>
=======
      <Header />
      <div className='layoyt-main'>
>>>>>>> 8c70883548c8a2bdfc3d4930c8590b98eaba1701
        <Outlet />
      </div>
    </>
  )
}

export default MainLayOut