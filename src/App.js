import React from 'react';
import './App.css';

// Bootstrap
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';

import Home from './component/Home';
import Resume from './component/Resume';
import Project from './component/Project';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentBody: <Home /> };
    this.setCurrentBody = this.setCurrentBody.bind(this)
  }

  setCurrentBody(selectedKey) {
    var body = <Home />;
    switch (selectedKey) {
      case "home":
        body = <Home />;
        break;
      case "resume":
        body = <Resume />;
        break;
      case "project1":
      case "project2":
      case "project3":
        body = <Project />;
        break;
      default:
        break;
    }
    this.setState(
      {
        currentBody: body
      }
    );
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  render() {
    return (
      <div className="App">
        <header className='sticky-top'>
          <AppNavBar variant='dark' bg='dark' handleClick={this.setCurrentBody} />
        </header>
        <AppBody currentBody={this.state.currentBody} />
        <footer>
          <AppFooter />
        </footer>
      </div>
    );
  }
}

function AppNavBar(props) {
  var variant = (props.variant === 'dark') ? 'dark' : 'light';
  var style = props.bg === 'transparent' ? { backgroundColor: "#00000000" } : {};
  return (
    <Navbar collapseOnSelect variant={variant} bg={props.bg} expand="md" stlye={style}>
      <Container>
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" onSelect={props.handleClick}>
            <Nav.Link href="#" eventKey="home">Home</Nav.Link>
            <Nav.Link href="#" eventKey="resume">Resume</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#" eventKey="project1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#" eventKey="project2">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="#" eventKey="project3">Project 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function AppBody(props) {
  return (
    props.currentBody
  );
}

function AppFooter(props) {
  return (
    <Container>
      <Row className="justify-content-center mb-3">
        <Col xs="auto" className="px-3">
          <a href="">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-brands fa-linkedin fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </Col>
        <Col xs="auto" className="px-3">
          <a href="">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-brands fa-github fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </Col>
        <Col xs="auto" className="px-3">
          <a href="">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-solid fa-envelope fa-stack-1x fa-inverse"></i>
            </span>
          </a>
        </Col>
      </Row>
      <p class="copyright text-muted">Copyright © Your Website 2022</p>
    </Container>
  );
}

export default App;
