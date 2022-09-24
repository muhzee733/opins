import React, { Fragment, useRef } from "react"
import { Link } from "gatsby"
import SubNavToggler from "./sub-nav-toggler"
import { Link as ScrollLink } from "react-scroll"

const NavLinks = () => {
  const subMenuEl = useRef(null)
  return (
    <ul className="one-page-scroll-menu navigation-box" ref={subMenuEl}>
      <li>
        <ScrollLink
          activeClass="current"
          to="banner"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </ScrollLink>
        <Fragment>
          <SubNavToggler
            onClick={e => {
              subMenuEl.current.querySelectorAll(".sub-menu").forEach(item => {
                item.classList.remove("active")
              })

              let clickedItem = e.currentTarget.parentNode
              console.log(clickedItem)
              clickedItem.querySelector(".sub-menu").classList.toggle("active")
            }}
          />
          <ul className="sub-menu">
            <li>
              <Link to="/">Home One</Link>
            </li>
            <li>
              <Link to="/index-2">Home Two</Link>
            </li>
          </ul>
        </Fragment>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="service"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Features
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Pricing
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="testimonials"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Testimonials
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          activeClass="current"
          to="blog"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Blog
        </ScrollLink>
        <Fragment>
          <SubNavToggler
            onClick={e => {
              subMenuEl.current.querySelectorAll(".sub-menu").forEach(item => {
                item.classList.remove("active")
              })

              let clickedItem = e.currentTarget.parentNode
              clickedItem.querySelector(".sub-menu").classList.toggle("active")
            }}
          />
          <ul className="sub-menu">
            <li>
              <Link to="/blog">Blog Page</Link>
            </li>
            <li>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </Fragment>
      </li>
    </ul>
  )
}

export default NavLinks
