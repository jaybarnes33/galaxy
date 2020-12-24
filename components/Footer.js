import { Row, Col, Form, Button, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy;{` Copyright-${new Date().getFullYear()}`}</p>
      </Container>
    </footer>
  );
};

export default Footer;
