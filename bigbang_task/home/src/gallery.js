import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './pro.css';
import Co1 from './co1.jpg';
import Co2 from './co2.jpg';
import Co3 from './co3.jpg';
import Co4 from './co4.jpg';
import { Carousel } from "react-bootstrap";


export default function Gallery() {
    return (
        <>
            <div className="container-fluid cour">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 className="text-secondary border">OUR GALLERY</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <Carousel>
                            <Carousel.Item>
                                <img className="d-block w-100 mb-5" src={Co1} alt="First slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 mb-5" src={Co2} alt="Second slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 mb-5" src={Co3} alt="Third slide" />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="d-block w-100 mb-5" src={Co4} alt="Fourth slide" />
                            </Carousel.Item>
                        </Carousel>

                    </div>
                </div>
            </div>
        </>
    );
}