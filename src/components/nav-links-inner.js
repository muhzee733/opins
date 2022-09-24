import React, { Fragment, useRef } from "react"
import { Link } from "gatsby"
import SubNavToggler from "./sub-nav-toggler"

const NavLinksInner = () => {
  const subMenuEl = useRef(null)

  return (
    <ul className="one-page-scroll-menu navigation-box" ref={subMenuEl}>
      <li>
        <Link to="/#banner">Home</Link>
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
        <Link to="/#service">Features</Link>
      </li>
      <li>
        <Link to="/#pricing">Pricing</Link>
      </li>
      <li>
        <Link to="/#testimonials">Testimonials</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
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

export default NavLinksInner
