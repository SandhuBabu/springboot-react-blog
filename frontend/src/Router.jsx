import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayOut from './layout/MainLayOut'
import {
    Home,
    BlogList,
    Projects,
    Contact,
    About
} from './Pages'

export const Router = () => {
  return (
    <Routes>
            <Route path='/' element={<MainLayOut />}>
                <Route
                    index={true}
                    element={<Home />}
                />
                <Route
                    path='/blogs'
                    element={<BlogList />}
                />
                <Route
                    path='/projects'
                    element={<Projects />}
                />
                <Route
                    path='/contact'
                    element={<Contact />}
                />
                <Route
                    path='/about'
                    element={<About />}
                />
            </Route>
        </Routes>
  )
}
