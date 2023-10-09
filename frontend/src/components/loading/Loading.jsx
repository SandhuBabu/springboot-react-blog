import React from 'react'
import logo from '../../assets/logo-car.png'
import './Loading.scss'

const Loading = () => {
    return (
        <section className='loading'>
            <img src={logo} alt="" />
            <p>Loading, Please Wait...</p>
        </section>
    )
}

export default Loading