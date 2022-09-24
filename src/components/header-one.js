import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import NavLinks from "./nav-links"
import logoImage from "../assets/images/logo-1-1.png"

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false)
  const menuEl = useRef(null)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true)
    } else if (window.scrollY < 70) {
      setSticky(false)
    }
  }

  return (
    <header className="site-header header-one">
      <nav
        className={`navbar navbar-expand-lg navbar-light header-navigation stricky  ${
          sticky === true ? "stricky-fixed" : " "
        }`}
      >
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <Link to="/" className="navbar-brand">
              <img src={logoImage} alt="Awesome alter Text" />
            </Link>
            <button
              className="menu-toggler"
              onClick={e => {
                e.preventDefault()
                menuEl.current.classList.toggle("active")
              }}
            >
              <span className="fa fa-bars"></span>
            </button>
          </div>

          <div className="main-navigation" ref={menuEl}>
            <NavLinks />
          </div>
          <div className="right-side-box">
            <a href="#none" className="header-btn">
              Login
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default HeaderOne
