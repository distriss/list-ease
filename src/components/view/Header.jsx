import React from 'react';
import { Container, Row, Nav, Navbar, Image} from 'react-bootstrap';

const Header = () => {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" >
      <Container >
          <Navbar.Brand className="h1" href="#home">
            
            <Image
              alt="ListEase Logo"
              src="src\components\view\assets\img\listease-logo.webp"
              width="200"
              height="200"
              className="d-inline-block align-center"
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
    )
}

export default Header