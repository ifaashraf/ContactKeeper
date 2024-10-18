import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-address-book fa-bounce" style={{color: "#d36d4a"}}/>
          {' '}
            ContactKeeper
          </Navbar.Brand>
        </Container>
      </Navbar>

    </>
  )
}

export default Header