import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './pro.css';


export default function Testimonials() {
    return (
        <>
            <div className='container-fluid test'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h3 className='text-secondary border mt-3'>TESTIMONIALS</h3>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-6 text-center'>
                        <iframe src="https://www.youtube.com/embed/N4x9F6H8rmY?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen ></iframe>
                    </div>
                    <div className='col-lg-6 '>
                        <div class="card">
                            <div class="card-header  text-primary">
                                Our Client Testimonials
                            </div>
                            <div class="card-body card">
                                <h5 class="card-title text-secondary">We provide good service</h5>
                                <p class="card-text text-light">At our company, providing exceptional service is a top priority. Our dedicated team of professionals is committed to delivering the best experience possible to each and every one of our customers. From the moment you first contact us, you can expect a friendly and responsive approach that puts your needs first. We go above and beyond to ensure that you receive the right solutions, delivered in a timely and efficient manner. We believe that the key to building long-lasting relationships with our clients is through providing good service, and we take that responsibility seriously.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}        