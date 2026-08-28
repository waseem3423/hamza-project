"use client";

import Button from "./Button";
import CustomSelect from "./CustomSelect";

const personalPropertyCategoryOptions = [
  { label: "Select Property Category", value: "" },
  { label: "Residential Property", value: "residential" },
  { label: "Commercial Property", value: "commercial" },
  { label: "Industrial Property", value: "industrial" },
  { label: "Land Property", value: "land" },
  { label: "Mixed-Use Property", value: "mixed-use" },
];

const propertyTypeOptions = [
  { label: "Select Type", value: "" },
  { label: "Residential Property", value: "residential" },
  { label: "Commercial Property", value: "commercial" },
  { label: "Industrial Property", value: "industrial" },
  { label: "Land Property", value: "land" },
  { label: "Mixed-Use Property", value: "mixed-use" },
];

const cityValuationOptions = [
  { label: "Select City", value: "" },
  { label: "France City", value: "france" },
  { label: "Belgium City", value: "belgium" },
  { label: "Norway City", value: "norway" },
  { label: "Italy City", value: "italy" },
  { label: "Denmark City", value: "denmark" },
];

export default function ContactSection() {
  return (
    <>
{/*===== CONTACT AREA STARTS =======*/}
<div className="contact1-section-area sp1" id="contact">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 m-auto">
        <div className="contact-header text-center heading2">
          <h5 className="text-anim">Valuation</h5>
          <h2 className="text-anim">Request Your Property Valuation</h2>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-10 m-auto" data-aos="zoom-in" data-aos-duration="1000">
        <div className="contact-author-boxarea">
          <h3>Personal Information</h3>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-input-area">
                <CustomSelect options={personalPropertyCategoryOptions} defaultValue="" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-input-area">
                <input type="text" placeholder="First Name" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-input-area">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-input-area">
                <input type="email" placeholder="Email Address" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-input-area">
                <input type="number" placeholder="Phone Number" />
              </div>
            </div>
            <div className="space50"></div>
            <h3>Property Information</h3>
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-input-area">
                  <CustomSelect options={propertyTypeOptions} defaultValue="" />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="contact-input-area">
                  <input type="text" placeholder="Zip Code" />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="contact-input-area">
                  <CustomSelect options={cityValuationOptions} defaultValue="" />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="contact-input-area">
                  <input type="text" placeholder="Number of Bedrooms" />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="contact-input-area">
                  <input type="text" placeholder="N. of bathrooms" />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="contact-input-area">
                  <input type="text" placeholder="Your Budget" />
                </div>
              </div>
              <div className="space16"></div>
              <div className="col-lg-12">
                <div className="contact-input-area">
                  <Button type="submit">Submit Now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*===== CONTACT AREA ENDS =======*/}
    </>
  );
}
