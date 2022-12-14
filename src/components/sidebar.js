import React from "react"

import postImage1 from "../assets/images/lp-1-1.jpg"
import postImage2 from "../assets/images/lp-1-2.jpg"
import postImage3 from "../assets/images/lp-1-2.jpg"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="single-sidebar search-widget">
        <form action="#" className="search-form">
          <input type="text" name="search" placeholder="Search here..." />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="single-sidebar post-widget">
        <div className="widget-title">
          <h3>Latest Posts</h3>
        </div>
        <div className="widget-post-wrapper">
          <div className="widget-single-post">
            <div className="image-block">
              <div className="inner-block">
                <img src={postImage1} alt="Awesome alter Text" />
              </div>
            </div>
            <div className="text-block">
              <h3>
                <a href="#none">Basic rules of running web agency</a>
              </h3>
            </div>
          </div>
          <div className="widget-single-post">
            <div className="image-block">
              <div className="inner-block">
                <img src={postImage2} alt="Awesome alter Text" />
              </div>
            </div>
            <div className="text-block">
              <h3>
                <a href="#none">Introducing latest app features</a>
              </h3>
            </div>
          </div>
          <div className="widget-single-post">
            <div className="image-block">
              <div className="inner-block">
                <img src={postImage3} alt="Awesome alter Text" />
              </div>
            </div>
            <div className="text-block">
              <h3>
                <a href="#none">Become the best sale marketer</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="single-sidebar categories-widget">
        <div className="widget-title">
          <h3>Categories</h3>
        </div>
        <ul className="links-list">
          <li>
            <a href="#none">Business</a>
          </li>
          <li>
            <a href="#none">Introductions</a>
          </li>
          <li>
            <a href="#none">One Page Template</a>
          </li>
          <li>
            <a href="#none">Parallax Effects</a>
          </li>
          <li>
            <a href="#none">New Technologies</a>
          </li>
          <li>
            <a href="#none">Video Backgrounds</a>
          </li>
        </ul>
      </div>
      <div className="single-sidebar tags-widget">
        <div className="widget-title">
          <h3>Tags</h3>
        </div>
        <div className="tag-list-wrapper">
          <a href="#none">Business,</a> <a href="#none">Agency,</a>{" "}
          <a href="#none">Technology,</a>
          <a href="#none">Parallax,</a> <a href="#none">Innovative,</a>{" "}
          <a href="#none">Professional,</a> <a href="#none">Experience,</a>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
