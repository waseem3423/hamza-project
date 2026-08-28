"use client";

import Button from "./Button";

export default function ContactMainSection() {
  return (
    <>
{/*===== CONTACT AREA STARTS =======*/}
<div className="contact-inner-section-area sp1">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <div className="contact-inner-header heading2">
                    <h5>Contact Us</h5>
                    <h2>Get In Touch With Us: Your Real Estate Partner</h2>
                    <div className="space16"></div>
                    <p>We are here to assist you with all your real estate needs. Whether you are buying, selling, renting, or investing, our experienced team is ready to provide you with the support and expertise you need.</p>
                    <ul> 
                        <li><a href="#"><img src="/assets/img/icons/location1.svg" alt="" /> 570 White Mission Apt. hellerborough</a></li>
                        <li><a href="tel:(925)683-1469"><img src="/assets/img/icons/call1.svg" alt="" /> (925) 683-1469</a></li>
                        <li><a href="mailto:mike@nicolemashini.com"><img src="/assets/img/icons/mail1.svg" alt="" /> mike@nicolemashini.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="blog-contact-boxarea">
                    <h3>Schedule an Appointment</h3>
                    <div className="space4"></div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="input-area">
                                <input type="text" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="input-area">
                                <input type="text" placeholder="Last Name" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="input-area">
                                <input type="email" placeholder="Email" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="input-area">
                                <input type="number" placeholder="Phone" />
                            </div>
                        </div>
                        
                        <div className="col-lg-12">
                            <div className="input-area">
                                <input type="text" placeholder="Subject" />
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="input-area">
                                <textarea placeholder="Message"></textarea>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="input-area">
                                <Button type="submit">Send Now</Button>
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
