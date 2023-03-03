import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({variant, bg, handleClick}) => {
  variant = (variant === 'dark') ? 'dark' : 'light';

  return (
    <header className='sticky-top shadow'>
      <Navbar collapseOnSelect variant={variant} bg={bg} expand="md">
        <Container>
          <Navbar.Brand href="#" onClick={() => handleClick("about")}>My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" onSelect={handleClick}>
              <Nav.Link href="#" eventKey="about">About</Nav.Link>
              <Nav.Link href="#" eventKey="projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;