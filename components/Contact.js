import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Contact = ({ rows }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <Container>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <Form.Control
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <Form.Control
          as="textarea"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          rows={rows}
        />

        <Button variant="dark" type="submit">
          Send
        </Button>
      </Container>
    </Form>
  );
};

export default Contact;
