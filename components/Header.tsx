"use client";

import Button from "./Button";
import BrandLogo from "./BrandLogo";

export default function Header() {
  return (
    <>
      {/*=====HEADER START =======*/}
      <header>
        <div className="header-area homepage1 header header-sticky d-none d-lg-block " id="header">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav id="navbar-example2" className="navbar">
                  <div className="header-elements">
                    <div className="site-logo">
                      <BrandLogo variant="light" />
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li className="nav-item"><a href="/" className="nav-link"><span>Home</span></a></li>
                        <li className="nav-item"><a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="nav-link"><span>Buy</span></a></li>
                        <li className="nav-item"><a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="nav-link"><span>Sell</span></a></li>
                        <li className="nav-item"><a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="nav-link"><span>Invest</span></a></li>
                        <li className="nav-item"><a href="#about" className="nav-link"><span>About</span></a></li>
                        <li className="nav-item"><a href="#property" className="nav-link"><span>Property</span></a></li>
                        <li className="nav-item"><a href="/contact" className="nav-link"><span>Contact</span></a></li>
                      </ul>
                    </div>
                    <div className="btn-area">
                      <div className="search-icon header__search header-search-btn">
                        <a href="#"><img src="/assets/img/icons/search1.svg" alt="" /></a>
                      </div>
                      <Button href="https://myrentsolution.com/" target="_blank">Schedule Consultation</Button>
                    </div>

                    <div className="header-search-form-wrapper">
                      <div className="tx-search-close tx-close"><i className="fa-solid fa-xmark"></i></div>
                      <div className="header-search-container">
                        <form role="search" className="search-form">
                          <input type="search" className="search-field" placeholder="Search …" defaultValue="" name="s" />
                          <button type="submit" className="search-submit"><img src="/assets/img/icons/search1.svg" alt="" /></button>
                        </form>
                      </div>
                    </div>
                    <div className="body-overlay"></div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*=====HEADER END =======*/}
    </>
  );
}
