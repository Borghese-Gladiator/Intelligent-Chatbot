import React from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const MyNav = (props) => {
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/chatbot">Chatbot</Nav.Link>
              <Nav.Link href="/corona">Coronabot</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav