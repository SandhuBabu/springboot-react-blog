import React from 'react'
import { NavLink } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import logo from '../../assets/logo-t.png'
import './Header.scss'

const Header = () => {
    const handleHeader = () => {
        const height = document.querySelector('header').style.height;
        console.log("fdf");
        if (height === "5em") {
            document.querySelector('header').style.height = "20em"
            return
        }
        document.querySelector('header').style.height = "15em"
    }
    
    return (
        <>
            <header style={{ height: "5em" }} className='header'>
                <div className="logo">
                    {/* BLOG APP */}
                    <img src={logo} alt="" />
                </div>

                <ul>
                    <li><NavLink to="/"><span>Home</span></NavLink></li>
                    <li><NavLink to="/blog"><span>Blog</span></NavLink></li>
                    <li><NavLink to="/about"><span>About</span></NavLink></li>
                    <li><NavLink to="/contact"><span>Contact Me</span></NavLink></li>
                </ul>

                <div className="util-btns">
                    <button className='open-search' onClick={handleHeader}><BsSearch /></button>
                    <button className='menu-toggle' onClick={handleHeader}><AiOutlineMenu /></button>
                </div>

                <div className='login-btn'><button className='main-btn'>Login</button></div>

            </header>
        </>
    )
}

export default Header