import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      console.log(data)
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/chatbot">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/corona">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;