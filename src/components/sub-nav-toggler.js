import React from "react"

const SubNavToggler = ({ onClick }) => {
  return (
    <button className="sub-nav-toggler" onClick={onClick}>
      <span className="sr-only">Toggle navigation</span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>
  )
}

export default SubNavToggler
