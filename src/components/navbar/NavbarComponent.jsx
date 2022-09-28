import React from 'react';
import './NavbarComponent.scss';
import holokitablogo from '../../assets/holokitab-logo.ico';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" fixed="top">
            <Container fluid>
                <NavLink to="/" className='navbar-brand'>
                    <img
                        src={holokitablogo}
                        width="40"
                        height="40"
                        // className="d-inline-block align-top"
                        alt="holo-kitab-logo"
                    />{' '}
                    HoloKitab
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
                        style={{ maxHeight: '250px' }}
                        navbarScroll
                    >
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        {/* <NavLink to="/pricing" className='nav-link'>Pricing</NavLink> */}
                        <NavLink to="/services" className='nav-link'>Services</NavLink>
                        <NavLink to="/blog" className='nav-link'>Blog</NavLink>
                        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                        <NavLink to='/order' className='nav-link'>Order Now</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to='/login' className='btn btn-plane' >Log In</NavLink>
                        <NavLink to='/register' className='btn'>Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
