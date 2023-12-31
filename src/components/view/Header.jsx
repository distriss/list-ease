import React from 'react';
import { Container, Col, Image} from 'react-bootstrap';

export default function Header() {
  return (
    <Col xs={10} sm={10} md={10} lg={10} xl={9} xxl={8} className='mx-auto m-5 mx-4'>
    <header className="header text-white py-4">
    <Container >
    <div className="d-flex flex-column align-items-center justify-content-center text-center">
          <Image
            src="/assets/img/listease-logo.webp"
            alt="ListEaser Logo"
            width={150}
            height={150}
            className="mb-3"
          />
          <h1 className="mb-0 text-wrap text-break">ListEase</h1>
        </div>
    </Container>
  </header>
  </Col>
  );
};