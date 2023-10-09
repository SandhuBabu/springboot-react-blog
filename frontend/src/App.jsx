import React, { useEffect, useState } from 'react'
import Loading from './components/loading/Loading'
import { Router } from './router'

const App = () => {

    const [load, setLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {setLoad(true)}, 3000)
    }, [])

    return load ? <Router /> : <Loading />
}

export default App