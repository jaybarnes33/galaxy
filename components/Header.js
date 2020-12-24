import { Navbar, Nav, Form, Image, Container, Button } from "react-bootstrap";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar expand="lg" fixed="top">
      <Container>
        {" "}
        <Navbar.Brand href="/">
          <Image className="logo" src="/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          {" "}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-filter-right"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
            />
          </svg>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <Link href="/">Home </Link>
            </Nav.Link>

            <Nav.Link>
              <Link href="/causes">Causes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/events">Events</Link>
            </Nav.Link>
            <Nav.Link>
              <Link href="/blog">Blog</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
