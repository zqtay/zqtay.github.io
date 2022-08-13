import React, { useState, useEffect } from 'react';
import './App.css';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

import About from './components/About';
import Projects from './components/Projects';

import DataUtil from "./user/DataUtil";

const App = (props) => {
  const [currentBody, setCurrentBody] = useState(<About />);

  const setCurrentBodyHandler = (selectedKey) => {
    var body = <About />;
    switch (selectedKey) {
      case "About":
        body = <About />;
        break;
      case "projects":
        body = <Projects />;
        break;
      default:
        break;
    }
    setCurrentBody(body);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    document.title = DataUtil.getUser().documentTitle;
  }, []);

  return (
    <div className="App">
      <header className='sticky-top shadow'>
        <AppNavBar variant='dark' bg='dark' handleClick={setCurrentBodyHandler} />
      </header>
      <AppBody currentBody={currentBody} />
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

const AppNavBar = (props) => {
  var variant = (props.variant === 'dark') ? 'dark' : 'light';
  var style = props.bg === 'transparent' ? { backgroundColor: "#00000000" } : {};

  return (
    <Navbar collapseOnSelect variant={variant} bg={props.bg} expand="md" stlye={style}>
      <Container>
        <Navbar.Brand href="#" onClick={() => props.handleClick("about")}>My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" onSelect={props.handleClick}>
            <Nav.Link href="#" eventKey="about">About</Nav.Link>
            <Nav.Link href="#" eventKey="projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const AppBody = (props) => {
  return (
    props.currentBody
  );
}

const AppFooter = (props) => {
  var links = DataUtil.getLinks();
  var user = DataUtil.getUser();
  return (
    <Container>
      <Row className="justify-content-center mb-3">
        <Col xs="auto" className="px-3">
          <a href={links.linkedin}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-brands fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </Col>
        <Col xs="auto" className="px-3">
          <a href={links.github}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-brands fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </Col>
        <Col xs="auto" className="px-3">
          <a href={links.email}>
            <span className="fa-stack fa-lg">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-solid fa-envelope fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </Col>
      </Row>
      <p className="copyright text-muted">{`Copyright © ${user.firstName} ${user.lastName} 2022`}</p>
    </Container>
  );
}

export default App;
