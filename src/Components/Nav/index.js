import React from "react";
import { Nav, Navbar, Form, InputGroup, Button } from 'react-bootstrap'

function NavBar() {
  return(
    <div className="w-100 w-75">
      <Navbar bg='primary' expand='lg' style={{zIndex: 2}}>
        <Navbar.Brand href='/' className="navbar-dark px-5 col-md col-lg-2">React Pokedex</Navbar.Brand>
        <Nav.Item>
          <Nav.Link href="/full_dex" className="px-4 col-md col-lg">Full Pokedex</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/randodex" className="px-4 col-md col-lg">Random Pokemon</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Form>
            <InputGroup className="px-3 col-lg">
              <Form.Control
                placeholder="Search by Name"
                aria-label="name_search"
                />
              <Button variant="info">Search</Button>
            </InputGroup>
          </Form>
        </Nav.Item>
        <Nav.Item>
          <Form>
            <InputGroup className="px-3 col-lg">
              <Form.Control
                placeholder="Search by Number"
                aria-label="name_search"
                />
              <Button variant="info">Search</Button>
            </InputGroup>
          </Form>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/battle" className="px-4 col-md col-lg">Battle...?</Nav.Link>
        </Nav.Item>
      </Navbar>
    </div>
  )
}

export default NavBar;