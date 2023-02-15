import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './pro.css';
import Image1 from './arch.jpg';


export default function About() {
    return (
        <>
            <div className='container-fluid abo one'>
                <div className='row'>
                    <div className='col-lg-12 text-center mt-2'>
                        <h2 className='text-secondary border'>ABOUT US</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-2'>&nbsp;</div>
                    <div className='col-lg-4'>
                        <img src={Image1} className='por' />
                    </div>
                    <div className='col-lg-4'>
                        <h4 className='text-primary'>We Will Provide You The Best </h4>
                        <h4 className='text-primary'>Work Which You Dreamt For! </h4>
                        <p className='text-light'>At our company, providing exceptional service is a top priority. Our dedicated team of professionals is committed to delivering the best experience possible to each and every one of our customers.</p>
                        <a href='http://godrejpune.net/?gclid=Cj0KCQiAorKfBhC0ARIsAHDzslte3NEZXhlsoEMNMhcfxC9mKJK2cRBIIpZIy03VGIz4-oyUPiDFxGcaAtL6EALw_wcB '><button className=' btn bg-primary text-light'>READ MORE</button></a>
                    </div>
                    <div className='col-lg-2'>&nbsp;</div>

                </div>
                <div className='row mt-3 text-center'>
                    <div className='col-lg-1'>&nbsp;</div>
                    <div className='col-lg-2 bg-secondary'>
                        <h1 className='text-primary'>10+</h1>
                        <p className='text-light'>years of experience</p>
                    </div>
                    <div className='col-lg-1'>&nbsp;</div>
                    <div className='col-lg-2 bg-secondary'>
                        <h1 className='text-primary'>15000+</h1>
                        <p className='text-light'>projects completed</p>
                    </div>
                    <div className='col-lg-1'>&nbsp;</div>
                    <div className='col-lg-2 bg-secondary'>
                        <h1 className='text-primary'>750+</h1>
                        <p className='text-light'>satisfied clients</p>
                    </div>
                    <div className='col-lg-1'>&nbsp;</div>
                    <div className='col-lg-2 bg-secondary'>
                        <h1 className='text-primary'>450+</h1>
                        <p className='text-light'>active workers</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>&nbsp;</div>
                </div>
            </div>


        </>
    );
}    