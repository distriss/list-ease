import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
      <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
      <Container>
          <Navbar.Brand href="#home">
            <img
              alt="ListEase Logo"
              src="src\components\view\assets\img\listease-logo.webp"
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
      </>
    )
}

export default Header