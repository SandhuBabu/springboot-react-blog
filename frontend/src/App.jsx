import React from 'react'
import MainLayOut from './layout/MainLayOut'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import BlogList from './Pages/blogs/BlogList'
import Projects from './Pages/projects/Projects'

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
                <Route 
                    path='/projects'
                    element={<Projects />}
                />
            </Route>
        </Routes>
    )
}

export default App