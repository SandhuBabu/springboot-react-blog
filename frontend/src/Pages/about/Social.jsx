import React from 'react'
import {BsInstagram, BsYoutube} from 'react-icons/bs'
import {RiThreadsFill, RiTwitterXLine} from 'react-icons/ri'

const Social = () => {
  return (
    <section className="social">
        <p>
            <BsInstagram className='social-icon' />
            <span>Follow Us On Instagram</span>
        </p>
        <p>
            <BsYoutube className='social-icon' />
            <span>Subscribe On Youtube</span>
        </p>
        <p>
            <RiThreadsFill className='social-icon' />
            <span>Follow Us On Threads</span>
        </p>
        <p>
            <RiTwitterXLine className='social-icon' />
            <span>Follow Us On X App</span>
        </p>
    </section>
  )
}

export default Social