import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import "./Footer.scss"

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer>
        <p>
            <AiOutlineCopyright />
            <span>{year} </span>
            Copyright: TechScape
        </p>
    </footer>
  )
}

export default Footer