"use client";

import Button from "./Button";

export default function NotFoundArea() {
  return (
    <>
{/*===== 404 AREA STARTS =======*/}
<div className="404-section-area sp1">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 m-auto">
                <div className="img1 text-center image-anime reveal">
                    <img src="/assets/img/all-images/404.png" alt="" />
                </div>
                <div className="space50"></div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-5 m-auto">
                <div className="heading2 text-center">
                    <h2> Sorry! Page Not Found!</h2>
                    <div className="space16"></div>
                    <p>Sorry, the page you are looking for doesn’t exist or has <br className="d-lg-block d-none" /> been moved. Here are some helpful links.</p>
                    <div className="space32"></div>
                    <div className="btn-area1">
                        <Button href="https://myrentsolution.com/">Visit Our Property</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/*===== 404 AREA ENDS =======*/}
    </>
  );
}
