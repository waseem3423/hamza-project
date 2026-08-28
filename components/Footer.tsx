"use client";

import Button from "./Button";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <>
{/*===== FOOTER AREA STARTS =======*/}
<div className="footer1-section-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="footer-logo-area">
          <BrandLogo variant="dark" size="lg" />
          <div className="space32"></div>
          <h4>Newsletter Subscription</h4>
          <div className="space16"></div>
          <p>At Nicole Mashini Real Estate, we are committed to providing exceptional service and support. Whether you are looking buy, sell, or invest in real estate, our team is here help.</p>
          <form onSubmit={(e) => { e.preventDefault(); window.open("https://myrentsolution.com/", "_blank"); }} className="d-flex align-items-center gap-2 flex-wrap">
            <input type="text" placeholder="Enter Your Email" />
            <Button type="submit" href="https://myrentsolution.com/" target="_blank">Discover More</Button>
          </form>
          <ul>
            <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg col-md-6">
        <div className="footer-header padding-left1">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#property">Properties</a></li>
            <li><a href="#blog">Blog News</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg col-md-6">
        <div className="footer-header padding-left">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Apartment</a></li>
            <li><a href="#">My House</a></li>
            <li><a href="#">Interiors</a></li>
            <li><a href="#">Square Area</a></li>
            <li><a href="#">Terms & Condition</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg col-md-6">
        <div className="footer-header">
          <h3>Contact Info</h3>
          <ul>
            <li><span><img src="/assets/img/icons/location1.svg" alt="" /></span><a href="#">570 White Mission Apt. hellerborough</a></li>
            <li><span><img src="/assets/img/icons/call1.svg" alt="" /></span><a href="tel:(925)683-1469">(925) 683-1469</a></li>
            <li><span><img src="/assets/img/icons/mail1.svg" alt="" /></span><a href="mailto:social@nicolemashini.com">social@nicolemashini.com</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="space50 d-lg-block d-none"></div>
    <div className="space30 d-lg-none d-block"></div>
    <div className="row">
      <div className="col-lg-12">
        <div className="copyright">
          <div className="pera">
            <p>ⓒCopyright 2026 Nicole Mashini. All rights reserved</p>
          </div>
          <ul>
            <li><a href="#">Terms & Condition |</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/*===== FOOTER AREA ENDS =======*/}
    </>
  );
}
