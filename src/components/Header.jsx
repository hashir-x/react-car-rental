import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <>
      <header style={{zIndex:"10000",background:"transparent"}}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand href="#home">
            <Link to={'/'}>
              <img src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png" width="145" height="51" className="d-inline-block align-top" alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas style={{width:"100%",height:"100vh"}}
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                </Offcanvas.Title>
            </Offcanvas.Header>
          <Offcanvas.Body style={{width:"100%"}}>   
          <Nav style={{gap:"1.5rem",minWidth:"565px"}} className="ms-auto d-flex align-items-center justify-content-center">
            <Link to={'/'} className='nav-options'>Home</Link>
            <Link to={'/about'} className='nav-options'>About</Link>
            <Link to={'/models'} className='nav-options'>Vehicle Models</Link>
            <Link to={'testimonials'} className='nav-options'>Testimonials</Link>
            <Link to={'/team'} className='nav-options'>Our Team</Link>
            <Link to={'contact'} className='nav-options contact'>Contact</Link>
          </Nav>
          <Nav style={{minWidth:"218px"}} className="login-option ms-auto d-flex align-items-center justify-content-center gap-3">
            <Button style={{background:"transparent",border:"none",color:"#000",fontWeight:"600"}}>Sign In</Button>
            <button style={{backgroundColor:"#FF4D30",border:"none",padding:"0.8rem 1.8rem",fontWeight:"600",color:"#fff",borderRadius:"0.25rem"}}>Register</button>
          </Nav>
          </Offcanvas.Body> 
          </Navbar.Offcanvas>
      </Container>
      </Navbar>
      </header>
    </>
  )
}

export default Header