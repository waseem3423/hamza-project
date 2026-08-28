"use client";

import Button from "./Button";

export default function Properties() {
  const getFallback = (path: string) => `https://html.vikinglab.agency/homz${path}`;

  return (
    <>
      {/*===== PROPERTIES AREA STARTS =======*/}
      <div className="properties1-section-area sp1" id="property">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 m-auto">
              <div className="property-header text-center heading2">
                <h5 className="text-anim">Properties</h5>
                <h2 className="text-anim">Our Properties</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="property-slider-area owl-carousel">
                <div className="property-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/property-img1.png" alt="" />
                  </div>

                  <div className="content-area">
                    <h2>$7,50,000</h2>
                    <ul>
                      <li><a href="#"><img src="/assets/img/icons/sqft.svg" alt="" />1350 sqft</a></li>
                      <li><a href="#"><img src="/assets/img/icons/bed.svg" alt="" />3 Beds</a></li>
                      <li className="m-0"><a href="#"><img src="/assets/img/icons/bath.svg" alt="" />2 Baths</a></li>
                    </ul>
                    <p>1722 Pollich Heights, Kamronview</p>
                    <div className="space16"></div>
                    <p>Listed by America Ordaz of Real Estate Agency</p>
                    <div className="btn-area1">
                      <Button href="https://myrentsolution.com/" iconSrc="/assets/img/icons/arrow3.svg">Buy Now</Button>
                    </div>
                  </div>
                </div>

                <div className="property-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/property-img2.png" alt="" />
                  </div>

                  <div className="content-area">
                    <h2>$7,50,000</h2>
                    <ul>
                      <li><a href="#"><img src="/assets/img/icons/sqft.svg" alt="" />1350 sqft</a></li>
                      <li><a href="#"><img src="/assets/img/icons/bed.svg" alt="" />3 Beds</a></li>
                      <li className="m-0"><a href="#"><img src="/assets/img/icons/bath.svg" alt="" />2 Baths</a></li>
                    </ul>
                    <p>1722 Pollich Heights, Kamronview</p>
                    <div className="space16"></div>
                    <p>Listed by America Ordaz of Real Estate Agency</p>
                    <div className="btn-area1">
                      <Button href="https://myrentsolution.com/" iconSrc="/assets/img/icons/arrow3.svg">Buy Now</Button>
                    </div>
                  </div>
                </div>

                <div className="property-boxarea">
                  <div className="img1 image-anime">
                    <img src="/assets/img/all-images/property-img3.png" alt="" />
                  </div>

                  <div className="content-area">
                    <h2>$7,50,000</h2>
                    <ul>
                      <li><a href="#"><img src="/assets/img/icons/sqft.svg" alt="" />1350 sqft</a></li>
                      <li><a href="#"><img src="/assets/img/icons/bed.svg" alt="" />3 Beds</a></li>
                      <li className="m-0"><a href="#"><img src="/assets/img/icons/bath.svg" alt="" />2 Baths</a></li>
                    </ul>
                    <p>1722 Pollich Heights, Kamronview</p>
                    <div className="space16"></div>
                    <p>Listed by America Ordaz of Real Estate Agency</p>
                    <div className="btn-area1">
                      <Button href="https://myrentsolution.com/" iconSrc="/assets/img/icons/arrow3.svg">Buy Now</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*===== PROPERTIES AREA ENDS =======*/}
    </>
  );
}
