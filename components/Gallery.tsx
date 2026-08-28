"use client";

export default function Gallery() {
  return (
    <>
{/*===== GALLERY AREA STARTS =======*/}
<div className="gallery1-section-area sp2" id="gallery">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 m-auto">
        <div className="gallery-header text-center heading2">
          <h5 className="text-anim">Our Gallery</h5>
          <h2 className="text-anim">Explore Our Featured Luxury Properties</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="galler-author-area" data-aos="fade-up" data-aos-duration="800">
          <div className="img1">
            <img src="/assets/img/all-images/gallery-img1.png" alt="Luxury Villa" />
          </div>

          <div className="content-area">
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Luxury Waterfront Villa</a>
            <p>12 Properties</p>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div className="galler-author-area" data-aos="fade-up" data-aos-duration="1000">
          <div className="img1">
            <img src="/assets/img/all-images/gallery-img2.png" alt="Modern Penthouse" />
          </div>

          <div className="content-area">
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Modern Penthouse</a>
            <p>8 Properties</p>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="galler-author-area active" data-aos="fade-up" data-aos-duration="1100">
          <div className="img1">
            <img src="/assets/img/all-images/gallery-img3.png" alt="Architectural Mansion" />
          </div>

          <div className="content-area">
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Architectural Mansion</a>
            <p>15 Properties</p>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>

        <div className="galler-author-area" data-aos="fade-up" data-aos-duration="1200">
          <div className="img1">
            <img src="/assets/img/all-images/gallery-img5.png" alt="Beachfront Residence" />
          </div>

          <div className="content-area">
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Beachfront Residence</a>
            <p>10 Properties</p>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-12">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="galler-author-area" data-aos="fade-up" data-aos-duration="900">
              <div className="img1">
                <img src="/assets/img/all-images/gallery-img7.png" alt="Contemporary Estate" />
              </div>
    
              <div className="content-area">
                <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Contemporary Estate</a>
                <p>6 Properties</p>
                <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-6">
            <div className="galler-author-area" data-aos="fade-up" data-aos-duration="1000">
              <div className="img1">
                <img src="/assets/img/all-images/gallery-user-6.jpg" alt="Tudor Heritage Estate" />
              </div>
    
              <div className="content-area">
                <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Tudor Heritage Estate</a>
                <p>9 Properties</p>
                <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*===== GALLERY AREA ENDS =======*/}
    </>
  );
}
