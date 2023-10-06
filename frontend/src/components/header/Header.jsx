import React from 'react'
import './Header.scss'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo-t.png'

const Header = () => {
    const handleHeader = () => {
        const height = document.querySelector('header').style.height;
        if (height === "5em") {
            document.querySelector('header').style.height = "15em"
            return
        }
        document.querySelector('header').style.height = "5em"
    }
    return (
        <>
            <header style={{ height: "5em" }} className='header'>
                <div className="logo"><img src={logo} alt="" /></div>

                <ul>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                </ul>

                {/* <div className="util-btns">
                    <button className='open-search' onClick={handleHeader}><BsSearch /></button>
                    <button className='menu-toggle' onClick={handleHeader}><AiOutlineMenu /></button>
                </div> */}
            </header>
        </>
    )
}

export default Header