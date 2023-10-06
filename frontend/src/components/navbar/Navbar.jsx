import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import NavSearch from './NavSearch'

import './Navbar.scss'
import Logo from '../../assets/logo-t.png'

const Navbar = () => {


    const formRef = useRef();
    const navRef = useRef();

    const toggleSearchForm = (ref) => ref.current.classList.toggle("hidden")

    const handleMenu = () => {
        document.querySelector(".nav-bar").style.height = "auto"
        // console.log(navRef.current.classList);
        // navRef.current.classList.toggle("active")
    }

    const navbar = <>
        <nav style={{height: "5em"}} ref={navRef} className='nav-bar'>
            <NavSearch ref={formRef} toggleSearchForm={toggleSearchForm} />

            <div  className='logo-top'><Link to="/"><img src={Logo} alt="" /></Link></div>

            <ul>
                <li><NavLink to="/"><span>Home</span></NavLink></li>
                <li><NavLink to="/blog"><span>Blog</span></NavLink></li>
                <li><NavLink to="/about"><span>About</span></NavLink></li>
                <li><NavLink to="/contact"><span>Contact Me</span></NavLink></li>
            </ul>

            <div className="util-btns">
                <button className='open-search' onClick={() => toggleSearchForm(formRef)}><BsSearch /></button>
                <button className='menu-toggle' onClick={handleMenu}><AiOutlineMenu /></button>
            </div>

            <div className='login-btn'><button className='main-btn'>Login</button></div>
        </nav>
    </>


    return navbar
}

export default Navbar