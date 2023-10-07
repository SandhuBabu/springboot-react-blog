import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const MainLayOut = () => {
  return (
    <>
      <Header />
      <div className='layoyt-main'>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayOut