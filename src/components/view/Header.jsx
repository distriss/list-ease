import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <div>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
            <img
              alt="ListEase Logo"
              src="./view/assets/img/listease-logo.webp"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            ListEase
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    )
}

export default Header