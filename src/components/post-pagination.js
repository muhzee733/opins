import React from "react"

const PostPagination = () => {
  return (
    <div className="blog-post-pagination text-center">
      <a className="prev" href="#none">
        <i className="fa fa-arrow-left"></i>
      </a>
      <a className="active" href="#none">
        01
      </a>
      <a href="#none">02</a>
      <a href="#none">03</a>
      <a href="#none">04</a>
      <a href="#none">05</a>
      <a className="next" href="#none">
        <i className="fa fa-arrow-right"></i>
      </a>
    </div>
  )
}

export default PostPagination
