import './App.css';

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from './component/Home';
import HomeHeader from './component/HomeHeader';
import Resume from './component/Resume';
import Project from './component/Project';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <AppBody />
      </BrowserRouter>
    </div>
  );
}

function AppHeader() {
  return (
    <Routes>
      <Route index element={
        <header className='sticky-top'>
          <AppNavBar variant='dark' bg='dark' />
        </header>
      } />
      <Route path="*" element={    
        <header className='sticky-top'>
          <AppNavBar variant='light' bg='light'/>
          <div className="mb-3" />
        </header>
      } />
    </Routes>
  );
}

function AppNavBar(props) {
  var variant = (props.variant === 'dark') ? 'dark' : 'light';
  var style = props.bg === 'transparent' ? {backgroundColor: "#00000000"} : {};
  return (
    <Navbar variant={variant} bg={props.bg} expand="md" stlye={style}>
      <Container>
        <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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

function AppBody() {
  return (
    <Container fluid className="px-0">
      <Routes>
        <Route index element={<HomeHeader />} />
      </Routes>
      <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path='resume' element={<Resume />} />
            <Route path='project/*' element={<Project />} />
          </Routes>
      </Container>
    </Container>
  );
}

export default App;
