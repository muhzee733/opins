import React from "react"
import { Link } from "gatsby"

const PageHeader = ({ crumbtext, title }) => {
  return (
    <section className="inner-banner">
      <div className="container">
        <ul className="thm-breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <span className="sep">.</span>
          </li>
          <li>
            <span className="page-title">{crumbtext}</span>
          </li>
        </ul>
        <h2>{title}</h2>
      </div>
    </section>
  )
}

export default PageHeader
