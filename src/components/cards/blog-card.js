import React from "react"
import { Link } from "gatsby"

const BlogCard = ({ image, author, date, comments, title, text, link }) => {
  return (
    <div className="single-blog-style-one">
      <div className="image-block">
        <div className="inner-block">
          <img src={image} alt="Awesome alter Text" />
          <div className="date-block">{date}</div>
        </div>
      </div>
      <div className="text-block">
        <div className="meta-info">
          <Link to={link}>By {author}</Link>
          <span className="sep">.</span>
          <Link to={link}>{comments}</Link>
        </div>
        <h3>
          <Link to={link}>{title}</Link>
        </h3>
        <p>{text}</p>
        <div className="line-block"></div>
        <Link to={link} className="more-link">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
