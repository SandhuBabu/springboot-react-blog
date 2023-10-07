import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import "./Footer.scss"

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer>
        <p>
            <AiOutlineCopyright />
            <span>{date} </span>
            Copyright: Sandhu Babu
        </p>
    </footer>
  )
}

export default Footer