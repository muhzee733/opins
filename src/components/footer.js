import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import logoImage from "../assets/images/logo-1-1.png"

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <span className="bubble-1"></span>
        <span className="bubble-2"></span>
        <span className="bubble-3"></span>
        <span className="bubble-4"></span>
        <span className="bubble-5"></span>
        <span className="bubble-6"></span>
        <Container>
          <div className="inner-container">
            <Row>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <a href="index.html">
                    <img src={logoImage} alt="Awesome alter Text" />
                  </a>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Address</h3>
                  </div>
                  <ul className="contact-list">
                    <li>888 999 0000</li>
                    <li>needhelp@opins.com</li>
                    <li>
                      855 road, broklyn street <br />
                      new york 600
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Explore</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="#none">About</a>
                    </li>
                    <li>
                      <a href="#none">Our Team</a>
                    </li>
                    <li>
                      <a href="#none">Features</a>
                    </li>
                    <li>
                      <a href="#none">Blog</a>
                    </li>
                    <li>
                      <a href="#none">How It Works</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Links</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="#none">Help</a>
                    </li>
                    <li>
                      <a href="#none">Support</a>
                    </li>
                    <li>
                      <a href="#none">Clients</a>
                    </li>
                    <li>
                      <a href="#none">Contact</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Follow</h3>
                  </div>
                  <div className="social-block">
                    <a href="#none">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#none">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#none">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#none">
                      <i className="fa fa-dribbble"></i>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>

      <div className="bottom-footer text-center">
        <Container>
          <p>
            &copy; copyright 2020 by <a href="#none">Layerdrops.com</a>
          </p>
        </Container>
      </div>
    </>
  )
}

export default Footer
