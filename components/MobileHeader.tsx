"use client";

import Button from "./Button";
import BrandLogo from "./BrandLogo";

export default function MobileHeader() {
  return (
    <>
      {/*===== MOBILE HEADER STARTS =======*/}
      <div className="mobile-header mobile-header-main d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <BrandLogo size="sm" variant="light" />
              </div>
              <div className="mobile-nav-icon dots-menu">
                <i className="fa-solid fa-bars-staggered"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-sidebar mobile-sidebar1">
        <div className="logosicon-area">
          <div className="logos">
            <BrandLogo size="sm" variant="dark" />
          </div>
          <div className="menu-close">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="mobile-nav mobile-nav1">
          <ul className="mobile-nav-list nav-list1">
            <li className="nav-item"><a href="/" className="nav-link"><span>Home</span></a></li>
            <li className="nav-item"><a href="#about" className="nav-link"><span>About</span></a></li>
            <li className="nav-item"><a href="#feature" className="nav-link"><span>Features</span></a></li>
            <li className="nav-item"><a href="#gallery" className="nav-link"><span>Gallery</span></a></li>
            <li className="nav-item"><a href="#property" className="nav-link"><span>Property</span></a></li>
            <li className="nav-item"><a href="#testimonial" className="nav-link"><span>Testimonials</span></a></li>
            <li className="nav-item"><a href="#blog" className="nav-link"><span>Blogs</span></a></li>
            <li className="nav-item"><a href="/contact" className="nav-link"><span>Contact Us</span></a></li>
          </ul>
          <div className="allmobilesection">
            <Button href="/contact">Contact Now</Button>
            <div className="single-footer">
              <h3>Contact Info</h3>
              <div className="footer1-contact-info">
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <span><i className="fa-solid fa-phone-volume"></i></span>
                  </div>
                  <div className="contact-info-text">
                    <a href="tel:(925)683-1469">(925) 683-1469</a>
                  </div>
                </div>
                <div className="contact-info-single">
                  <div className="contact-info-icon">
                    <span><i className="fa-solid fa-envelope"></i></span>
                  </div>
                  <div className="contact-info-text">
                    <a href="mailto:social@nicolemashini.com">social@nicolemashini.com</a>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Our Location</h3>
                  <div className="contact-info-single">
                    <div className="contact-info-icon">
                      <span><i className="fa-solid fa-location-dot"></i></span>
                    </div>
                    <div className="contact-info-text">
                      <a href="#">570 White Mission Apt. hellerborough</a>
                    </div>
                  </div>
                </div>
                <div className="single-footer">
                  <h3>Social Links</h3>
                  <div className="social-links-mobile-menu">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                      <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== MOBILE HEADER ENDS =======*/}
    </>
  );
}
