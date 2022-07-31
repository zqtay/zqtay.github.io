import HeaderImage from './header.jpg';
import './App.css';

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<AppHomePage />} />
          <Route path="*" element={<AppContentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppHomePage() {
  return (
    <div style={{backgroundImage: `url(${HeaderImage})`}}>
      <AppNavBar theme='dark'/>
      <AppHomeBody />
    </div>
  );
}

function AppContentPage() {
  return (
    <div>
      <AppNavBar theme='light'/>
      <AppContentBody />
    </div>
  );
}

function AppNavBar(props) {
  var theme = (props.theme === 'dark') ? 'dark' : 'light';
  return (
    <Navbar className={'navbar navbar-'+theme} bg='transparent' expand="lg" >
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-nav justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="project/1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="project/2">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="project/3">Project 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function AppHomeBody() {
  return (
    <div>
      Home Header
    </div>     
  );
}

function AppContentBody() {
  return (
    <Routes>
      <Route path='resume' element={<div>Resume</div>} />
      <Route path='project/*' element={<div>Project</div>} />
    </Routes>
  );
}

export default App;
