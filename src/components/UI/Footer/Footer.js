import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import useUserData from "../../../hooks/useUserData";
import IconButton from "../IconButton/IconButton";

const Footer = (props) => {
  const links = useUserData().getLinks();
  const user = useUserData().getUser();
  return (
    <footer>
      <Container>
        <Row className="justify-content-center mb-3">
          <Col xs="auto" className="px-3">
            <IconButton href={links.linkedin} size="lg" icon="fa-brands fa-linkedin" />
          </Col>
          <Col xs="auto" className="px-3">
            <IconButton href={links.github} size="lg" icon="fa-brands fa-github" />
          </Col>
          <Col xs="auto" className="px-3">
            <IconButton href={links.email} size="lg" icon="fa-solid fa-envelope" />
          </Col>
        </Row>
        <p className="copyright text-muted text-center">{`Copyright © ${user.firstName} ${user.lastName} 2023`}</p>
      </Container>
    </footer>
  );
};

export default Footer;