import HeaderImage from './header.jpg';
import './App.css';

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Resume from './component/Resume';

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
        <header style={{backgroundImage: `url(${HeaderImage})`}}>
          <AppNavBar variant='dark' bg='transparent' />
          <AppHomeHeader />
        </header>
      } />
      <Route path="*" element={    
        <header>
          <AppNavBar variant='light' bg='light'/>
        </header>
      } />
    </Routes>
  );
}


function AppNavBar(props) {
  var variant = (props.variant === 'dark') ? 'dark' : 'light';
  return (
    <Navbar variant={variant} bg={props.bg} expand="md" >
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
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

function AppHomeHeader() {
  return (
    <div>
      Home Header
    </div>     
  );
}

function AppBody() {
  return (
    <Container fluid='md'>
    <Routes>
      <Route index element={<div>Home</div>} />
      <Route path='resume' element={<Resume />} />
      <Route path='project/*' element={<div>Project</div>} />
    </Routes>
    </Container>
  );
}

export default App;
