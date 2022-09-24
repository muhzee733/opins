import React, { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import "typeface-roboto"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/css/opins-icon.css"
import "../assets/css/animate.css"
import "swiper/swiper-bundle.min.css"
import "../assets/css/font-awesome.min.css"
import "react-modal-video/css/modal-video.min.css"
import "../assets/css/style.css"
import "../assets/css/responsive.css"

const Layout = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(false)

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true)
    } else if (window.scrollY < 70) {
      setScrollTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop)
    return () => {
      window.removeEventListener("scroll", handleScrollTop)
    }
  })
  return (
    <div>
      <div className="page-wrapper" id="wrapper">
        {children}
      </div>
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          className="scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </div>
  )
}

export default Layout
