import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import styles from './Header.module.scss';

const Header = ({variant, bg}) => {
  variant = (variant === 'dark') ? 'dark' : 'light';

  return (
    <header className={`sticky-top ${styles["header"]}`}>
      <Navbar collapseOnSelect variant={variant} bg={bg} expand="md">
        <Container>
          <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about" eventKey="about">About</Nav.Link>
              <Nav.Link href="#projects" eventKey="projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;