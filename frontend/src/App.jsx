import React from 'react'
import MainLayOut from './layout/MainLayOut'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayOut />}>
                <Route
                    index={true}
                    element={<Home />}
                />
            </Route>
        </Routes>
    )
}

export default App