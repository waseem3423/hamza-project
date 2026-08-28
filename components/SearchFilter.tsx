"use client";

import Button from "./Button";
import CustomSelect from "./CustomSelect";

const cityOptions = [
  { label: "New York City", value: "new-york" },
  { label: "Belgium City", value: "belgium" },
  { label: "Brazil City", value: "brazil" },
  { label: "Argentina City", value: "argentina" },
  { label: "Bangladesh City", value: "bangladesh" },
  { label: "Germany City", value: "germany" },
];

const propertyOptions = [
  { label: "Duplex House", value: "duplex" },
  { label: "Pine Valley Estates", value: "pine-valley" },
  { label: "Sunset Ridge", value: "sunset-ridge" },
  { label: "Oakwood Residences", value: "oakwood" },
  { label: "Riverfront Apartments", value: "riverfront" },
  { label: "Lakeview Heights", value: "lakeview" },
];

const priceOptions = [
  { label: "$4,50,000", value: "450k" },
  { label: "$5,50,000", value: "550k" },
  { label: "$6,50,000", value: "650k" },
  { label: "$7,50,000", value: "750k" },
  { label: "$8,50,000", value: "850k" },
  { label: "$9,50,000", value: "950k" },
];

export default function SearchFilter() {
  return (
    <>
<div className="tabs-section-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 m-auto">
        <div className="tabs-area">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Rent</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Buy</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Sell</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
              <div className="all-cities-area">
                <div className="cities">
                  <p>City/State</p>
                  <div className="input-place after">
                    <CustomSelect options={cityOptions} defaultValue="new-york" />
                  </div>
                </div>
                <div className="cities">
                  <p>Property </p>
                  <div className="input-place after">
                    <CustomSelect options={propertyOptions} defaultValue="duplex" />
                  </div>
                </div>

                <div className="cities">
                  <p>Price Range </p>
                    <div className="input-place m-0">
                      <CustomSelect options={priceOptions} defaultValue="450k" />
                    </div>
                </div>

                <div className="cities">
                  <div className="input-place">
                    <Button href="#" iconSrc="/assets/img/icons/search1.svg">Search</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
              <div className="all-cities-area">
                <div className="cities">
                  <p>City/State</p>
                  <div className="input-place after">
                    <CustomSelect options={cityOptions} defaultValue="new-york" />
                  </div>
                </div>
                <div className="cities">
                  <p>Property </p>
                  <div className="input-place after">
                    <CustomSelect options={propertyOptions} defaultValue="duplex" />
                  </div>
                </div>

                <div className="cities">
                  <p>Price Range </p>
                    <div className="input-place m-0">
                      <CustomSelect options={priceOptions} defaultValue="450k" />
                    </div>
                </div>

                <div className="cities">
                  <div className="input-place">
                    <Button href="#" iconSrc="/assets/img/icons/search1.svg">Search</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
              <div className="all-cities-area">
                <div className="cities">
                  <p>City/State</p>
                  <div className="input-place after">
                    <CustomSelect options={cityOptions} defaultValue="new-york" />
                  </div>
                </div>
                <div className="cities">
                  <p>Property </p>
                  <div className="input-place after">
                    <CustomSelect options={propertyOptions} defaultValue="duplex" />
                  </div>
                </div>

                <div className="cities">
                  <p>Price Range </p>
                    <div className="input-place m-0">
                      <CustomSelect options={priceOptions} defaultValue="450k" />
                    </div>
                </div>

                <div className="cities">
                  <div className="input-place">
                    <Button href="#" iconSrc="/assets/img/icons/search1.svg">Search</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}
