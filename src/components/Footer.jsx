import React from 'react'

function Footer() {
    return (
      <footer className="footer pt-4">
          <div className="p-3 text-secondary">
              <div className="inner">
              <div className="about">
                  <h1 className="display-5 px-3">
                      About Us
                  </h1>
                  <p className="lead px-3">
                      Lorem ipsum dolor sit amet consectetur 
                      adipisicing elit.
                  </p>
                  <p className="lead px-3">Lorem ipsum dolor sit olor sit amet consectetur .</p>
                  <div className="icons">
                      <i className="social fa fa-facebook"></i>
                      <i className="social fa fa-twitter"></i>
                      <i className="social fa fa-linkedin"></i>
                      <i className="social fa fa-google-plus"></i>
                      <i className="social fa fa-youtube"></i>
                  </div>
              </div>
              <div className="menu">
                  <h4>
                      Main Menu
                  </h4>
                  <ul>
                      <li>Home</li>
                      <li>Men</li>
                      <li>Women</li>
                      <li>Blog</li>
                      <li>Promo</li>
                      <li>Contact us</li>
                  </ul>
              </div>         
             <div className="events">
                  <h4>
                      Events
                  </h4>
                  <ul>
                      <li>First day of the week promo</li>
                      <li>10% off men sneakers</li>
                      <li>Women Wednesday Promo</li>
                      <li>Thursday Specialty</li>
                      <li>Buy one Get one Free</li>
                      <li>Donkomi</li>
                  </ul>
              </div>
              <div className="contact-info">
                  <h4>
                     Contact Info
                  </h4>
                 <div className="contact-item">
                     <i className="fa fa-map-marker social"></i>
                     <p className="intro-text">
                         Lorem ipsum dolor sit amet.
                     </p>
                 </div>
                 <div className="contact-item ">
                     <i className="fa fa-phone social"></i>
                     <p className="intro-text">
                         Lorem ipsum dolor sit amet.
                     </p>
                 </div>
                 <div className="contact-item ">
                     <i className="fa fa-envelope social"></i>
                     <p className="intro-text">
                         Lorem ipsum dolor sit amet.
                     </p>
                 </div>
                 <div className="contact-item ">
                     <i className="fa fa-globe social"></i>
                     <p className="intro-text">
                         Lorem ipsum dolor sit amet.
                     </p>
                 </div>
              </div>
              </div>
              <p className="lead text-light p-3 text-center">
                  &copy;2021 All rights reserved  Designed & developed by  Liptonzuma
              </p>
          </div>
      </footer>
    )
}

export default Footer
