"use client";

import Button from "./Button";

export default function About() {
  return (
    <>
      {/*===== EXACT ARINDE ABOUT AREA STARTS =======*/}
      <section className="about-area py-128 black-100-bg" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 content pt-40">
              <div className="big-text category-line text-anim" data-aos="fade-right" data-aos-duration="1000">
                ABOUT US
              </div>
              <div className="row pt-32">
                <h2 className="col-md-7 text-anim" data-aos="fade-up" data-aos-duration="1000">
                  We are a passionate team aiming to create the best luxury living spaces
                </h2>
              </div>
              <div className="row pt-96 pb-64 align-items-center">
                <p className="col-md-6 col-lg-4 text text-anim" data-aos="fade-up" data-aos-duration="1200">
                  Nicole Mashini Real Estate has worked on projects nationwide and worldwide, designs that make magic happen, without the wand. Focuses more on structural design, whereas interior design is the practice of creating interior atmosphere. This involves carefully designing lines, colors, plants, lighting, building materials, and space to create an area that feels nurturing to the human body.
                </p>
                <img
                  className="small-image col-md-6 col-lg-4 img-fluid"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  src="/assets/img/about/luxury_interior_detail.webp"
                  alt="Nicole Mashini Luxury Interior"
                  title="Nicole Mashini Luxury Interior"
                />
              </div>
              <div className="pt-32" data-aos="fade-up" data-aos-duration="1000">
                <Button href="https://myrentsolution.com/">Discover More</Button>
              </div>
            </div>
            <img
              className="col-sm-12 col-md-5 right-image img-fluid"
              data-aos="zoom-in"
              data-aos-duration="1400"
              src="/assets/img/about/nicole_about.jpg"
              alt="Nicole Mashini Real Estate"
              title="Nicole Mashini"
            />
          </div>
        </div>
      </section>
      {/*===== EXACT ARINDE ABOUT AREA ENDS =======*/}
    </>
  );
}
