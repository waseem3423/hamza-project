"use client";

export default function Hero() {
  const getFallback = (path: string) => `https://html.vikinglab.agency/homz${path}`;

  return (
    <>
      {/*===== HERO AREA STARTS =======*/}
      <div className="hero1-section-area" style={{ backgroundColor: "#ffffff", backgroundImage: "none" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-main-content heading1">
                <img src="/assets/img/elements/star1.png" onError={(e) => { e.currentTarget.src = getFallback("/assets/img/elements/star1.png"); }} alt="" className="star1 keyframe5" />
                <img src="/assets/img/elements/star1.png" onError={(e) => { e.currentTarget.src = getFallback("/assets/img/elements/star1.png"); }} alt="" className="star2 keyframe5" />
                <h1 className="text-anim">Stunning Homes Await In The <br className="d-lg-block d-none" /> Best Neighborhoods</h1>
              </div>
            </div>
            <div className="space74 d-lg-block d-none"></div>
            <div className="space30 d-lg-none d-block"></div>
            <div className="col-lg-3">
              <div className="header-pera heading1">
                <img src="/assets/img/elements/star2.png" onError={(e) => { e.currentTarget.src = getFallback("/assets/img/elements/star2.png"); }} alt="" className="star3 keyframe5" />
                <p className="text-anim">Discover a wide range of exclusive properties tailored to your unique lifestyle and preferences. Whether you’re looking for a cozy apartment in the heart of the.</p>
                <div className="video-btn-area">
                  <a href="https://www.youtube.com/watch?v=Y8XpQpW5OVY" className="popup-youtube">
                    <span className="video"><i className="fa-solid fa-play"></i></span>
                    <span className="play">Play Videos</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7"></div>
            <div className="col-lg-2">
              <div className="all-counter-area">
                <div className="counter-area" data-aos="fade-left" data-aos-duration="800">
                  <h2><span className="counter">5.0</span></h2>
                  <p> Home Rating Starts</p>
                </div>
                <div className="space60"></div>
                <div className="counter-area" data-aos="fade-left" data-aos-duration="1000">
                  <h2><span className="counter">89</span>k+</h2>
                  <p>Asset Management</p>
                </div>
                <div className="space60"></div>
                <div className="counter-area" data-aos="fade-left" data-aos-duration="1100">
                  <h2>$<span className="counter">40</span>M+</h2>
                  <p>Total Asset Sold</p>
                </div>
                <div className="space60"></div>
                <div className="counter-area" data-aos="fade-left" data-aos-duration="1200">
                  <img src="/assets/img/all-images/others-img1.png" onError={(e) => { e.currentTarget.src = getFallback("/assets/img/all-images/others-img1.png"); }} alt="" />
                  <div className="space16"></div>
                  <h2><span className="counter">12</span>K+</h2>
                  <p>Satisfied Customers</p>
                </div>
              </div>

            </div>
            <div className="col-lg-10 m-auto">
              <div className="header-images text-center">
                <div className="img1" data-aos="fade-down" data-aos-duration="1200">
                  <img
                    src="/assets/img/all-images/header-img1.png"
                    onError={(e) => { e.currentTarget.src = getFallback("/assets/img/all-images/header-img1.png"); }}
                    alt="Hero Header"
                  />
                </div>
                <p className="aniamtion-key-1">
                  <img src="/assets/img/icons/logo-icon.svg" onError={(e) => { e.currentTarget.src = getFallback("/assets/img/icons/logo-icon.svg"); }} alt="" />
                  100+ New Home Ready
                </p>

                <div className="circle-area">
                  <a href="#about" aria-label="Explore About">
                    {/* Pure React SVG Circular Spinning Text */}
                    <svg
                      viewBox="0 0 120 120"
                      className="keyframe5 circle"
                      style={{ width: "120px", height: "120px", position: "relative", top: "10px", margin: "0 auto", display: "block" }}
                    >
                      <defs>
                        <path
                          id="circlePath"
                          d="M 60, 60 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                        />
                      </defs>
                      <text fill="#ffffff" fontSize="9.2" fontWeight="600" letterSpacing="1.8">
                        <textPath href="#circlePath" startOffset="0%">
                          BUILD A SUCCESS BRAND • NICOLE MASHINI REAL ESTATE •
                        </textPath>
                      </text>
                    </svg>

                    {/* Centered Arrow Icon (↗) */}
                    <svg
                      className="arrow2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "28px", height: "28px", position: "absolute", top: "56px", left: "56px", pointerEvents: "none" }}
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== HERO AREA ENDS =======*/}
    </>
  );
}
