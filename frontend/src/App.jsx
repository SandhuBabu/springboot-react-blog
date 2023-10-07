import React from 'react'
import MainLayOut from './layout/MainLayOut'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import BlogList from './Pages/blogs/BlogList'

const App = () => {
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
            </Route>
        </Routes>
    )
}

export default App