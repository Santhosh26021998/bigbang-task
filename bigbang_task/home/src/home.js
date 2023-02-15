import React from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Container, } from 'react-bootstrap';
import './pro.css';
import Image from './bi.webp';
import Link from 'react-scroll';
export default function Home() {
    return (
        <>
            <div className='container-fluid bg-light back'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Navbar expand="md">
                            <Container>
                                <Navbar.Brand href="#home" className='txt1mnbr' ><h4 className='text-secondary col-lg-3'>We<span className='text-primary'>Build</span></h4></Navbar.Brand>
                                <div className='col-lg-4'>&nbsp;</div>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto navmnbr col-lg-5">
                                        <Nav.Link href="/"><h6 className='text-secondary'>Home</h6></Nav.Link>
                                        <Nav.Link href="/about" spy={true} smooth={true} duration={1000}><h6 className='text-secondary'>About</h6></Nav.Link>
                                        <Nav.Link href="/project"><h6 className='text-secondary'>Project</h6></Nav.Link>
                                        <Nav.Link href="/Testimonials"><h6 className='text-secondary'>Testimonials</h6></Nav.Link>
                                        <Nav.Link href="/gallery"><h6 className='text-secondary'>Gallery</h6></Nav.Link>
                                        <Nav.Link href="/contact"><h6 className='text-secondary'>Contact</h6></Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div></div>

            </div>



        </>
    );
}