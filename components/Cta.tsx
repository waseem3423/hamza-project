"use client";

import Button from "./Button";

export default function Cta() {
  return (
    <>
{/*===== CTA AREA STARTS =======*/}
<div className="cta1-section-area sp1">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5">
        <div className="cta-header heading1">
          <h2 className="text-anim">We’re Here To Find Your New Home Project.</h2>
        </div>
      </div>
      <div className="col-lg-3"></div>
      <div className="col-lg-4">
        <div className="cta-btn-area">
          <Button href="/contact">Get a Quote</Button>
          <Button href="https://myrentsolution.com/" variant="secondary">Our Property</Button>
        </div>
      </div>
    </div>
  </div>
</div>
{/*===== CTA AREA ENDS =======*/}
    </>
  );
}
