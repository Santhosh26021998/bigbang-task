import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import './contact.css'
export default function Contact() {
    return (<>
        <div className="container-fluid foot">
            <div className="row">
                <div className="col-lg-6 mt-4">
                    <p className="text-center title"><h3 className="text-secondary border text-center">CONTACT US</h3></p>
                    <div className="content row p-4">

                        <div className="col-lg-8 text-left">
                            <br />
                            <h3 className="instruction text-center text-primary">Enter your details</h3>

                            <div className="row fields mt-3">
                                <br />

                                <div className="col-lg-4" >
                                    <label className="text-secondary">Enter your name<span className="colon">:</span></label>
                                </div>
                                <div className="col-lg-7 mt-2">

                                    <input type="text" className="form-control" />
                                </div>
                            </div>



                            <br /><div className="row">
                                <br />
                                <div className="col-lg-4">
                                    <label className="text-secondary">Mobile number<span className="colon2">:</span></label>
                                </div>
                                <div className="col-lg-7 mt-2">

                                    <input type="text" className="form-control" />
                                </div>
                            </div>


                            <br /><div className="row">
                                <br />
                                <div className="col-lg-4">
                                    <label className="text-secondary" >Estimate your amount<span className="colon3">:</span></label>
                                </div>
                                <div className="col-lg-7">

                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <br /><div className="row">
                                <br />
                                <div className="col-lg-4">
                                    <label className="text-secondary" >Enter squre feet<span className="colon4">:</span></label>
                                </div>
                                <div className="col-lg-7">

                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <br /><div className="row">
                                <br />
                                <div className="col-lg-3">
                                    <a href="mailto:santhoshpannerselvam.1998@gmail.com"><button className="btn btn-primary">Register</button></a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-lg-5 mt-5"><div className="row mt-5">



                    <div className="col-lg-5 loc  mt-5 ">

                        <p className="tsecond text-primary">Location</p>
                        <p className="second1 text-secondary ">Plot No:824&826, Ram Nagar South, 3rd Main Road, Saravanam patti, Coimbatore - 600091, Tamilnadu,India </p>
                        <p className="second2 text-secondary">+91-44-4856-3345</p>
                        <p className="second3 text-secondary">@skillspoint.in</p>
                        <p className="second4 text-secondary">www.skillspoint.in</p>
                    </div>


                    <div className="col-lg-6 gtouch mt-5">
                        <p className="tthird text-primary">Get In Touch</p>
                        <p className="third text-secondary">Keep in touch to committed for your better future, committed for your better freedom</p>
                        <p className="allicons text-light"><FiFacebook className="icons"></FiFacebook><FiInstagram className="icons"></FiInstagram><FiTwitter className="icons"></FiTwitter><FiLinkedin className="icons"></FiLinkedin></p>

                    </div>
                </div>
                </div>

            </div>
        </div>














    </>);
}