"use client";

export default function Blog() {
  return (
    <>
{/*===== BLOG AREA STARTS =======*/}
<div className="blog1-section-area sp2" id="blog">
  <div className="container">
    <div className="row">
      <div className="col-lg-5 m-auto">
        <div className="blog1-header heading2 text-center">
          <h5>Our Blog</h5>
          <h2 className="text-anim">Our Latest Blog & News</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1000">
        <div className="blog-author-boxarea">
          <div className="img1 image-anime">
            <img src="/assets/img/all-images/blog-img1.png" alt="" />
          </div>
          <div className="date">
            <a href="#">12 May 2024</a>
          </div>
          <div className="content-area">
            <ul>
              <li><a href="#"><span>#</span>Property</a></li>
              <li><a href="#"><span><img src="/assets/img/icons/author1.svg" alt="" /></span>Anderson</a></li>
            </ul>
            <div className="space16"></div>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Stay Informed: The Latest Trends And Insights In The Real Estate Market</a>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1200">
        <div className="blog-author-boxarea">
          <div className="img1 image-anime">
            <img src="/assets/img/all-images/blog-img2.png" alt="" />
          </div>
          <div className="date">
            <a href="#">10 May 2024</a>
          </div>
          <div className="content-area">
            <ul>
              <li><a href="#"><span>#</span>Property</a></li>
              <li><a href="#"><span><img src="/assets/img/icons/author1.svg" alt="" /></span>Jhon Doe</a></li>
            </ul>
            <div className="space16"></div>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Home Buying, Selling, and Beyond Comprehensive Real Estate Articles</a>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration="1400">
        <div className="blog-author-boxarea">
          <div className="img1 image-anime">
            <img src="/assets/img/all-images/location-user-3.jpg" alt="" />
          </div>
          <div className="date">
            <a href="#">08 May 2024</a>
          </div>
          <div className="content-area">
            <ul>
              <li><a href="#"><span>#</span>Luxury</a></li>
              <li><a href="#"><span><img src="/assets/img/icons/author1.svg" alt="" /></span>Sarah Connor</a></li>
            </ul>
            <div className="space16"></div>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer">Navigating Luxury Real Estate Investments & Prime Properties</a>
            <a href="https://myrentsolution.com/" target="_blank" rel="noopener noreferrer" className="readmore">Read More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*===== BLOG AREA ENDS =======*/}
    </>
  );
}
