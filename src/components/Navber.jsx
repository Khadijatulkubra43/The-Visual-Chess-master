import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../styles/Navber.css';

function Navber() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="/"
          className="custom-logo"
        >
          <img
            src={logo}
            alt="Logo"
            className="img-fluid custom-logo-image"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto custom-nav-links">
            <Nav.Link href="/" className="mx-3">Home</Nav.Link>
            <Nav.Link href="/About" className="mx-3">About</Nav.Link>
            <Nav.Link href="/portfolio" className="mx-3">Portfolio</Nav.Link>
            <Nav.Link href="/blogs" className="mx-3">Blog</Nav.Link>
            <Nav.Link href="/contact" className="mx-3">Contact</Nav.Link>
          </Nav>
          {/* Get Started Button */}
          <Button
            href="#get-started"
            className="get-started-btn button"
            id='button'
          >
            Get started
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navber;
