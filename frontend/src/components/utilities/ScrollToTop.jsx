import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import "./style.scss"

const ScrollToTop = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if(window.scrollY > 100) {
      setIsVisible(true)
      return
    }

    setIsVisible(false);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return <div 
            className={isVisible ? 'scroll-to-top': 'scroll-to-top hidden'}
            onClick={scrollToTop}
          >
            <AiOutlineArrowUp />
          </div>
}

export default ScrollToTop