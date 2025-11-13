import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SiteNavbar({ cartCount, onCartClick }) {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase">
          SKWRL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/catalog">
              CATALOG
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              HELP
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              SHOPPING BAG ({cartCount})
            </Nav.Link>

            {/* <Button variant="dark" className="ms-3" onClick={onCartClick}>
              🛒 Cart ({cartCount})
            </Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
