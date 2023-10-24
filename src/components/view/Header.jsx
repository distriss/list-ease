import React from 'react';
import { Container, Nav, Navbar, Image} from 'react-bootstrap';

export default function Header() {
  return (
    <header className="header d-flex justify-content-center align-items-center">
          <Image
            alt="ListEase Logo"
            src="src\components\view\assets\img\listease-logo.webp"
            width={225}
            height={225}
            className='logo'
          />
          <h1>ListEase</h1>          
    </header>
  );
};