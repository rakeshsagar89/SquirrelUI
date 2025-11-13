import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function SiteFooter(){
  return (
    <footer className="mt-5">
      <Container>
        <Row className="py-4">
          <Col md={6}>
            <h5 style={{color: "#fff"}}>SKWRL</h5>
            <p style={{color: "#ddd", maxWidth: 480}}>Minimal premium clothing. Crafted for style and comfort.</p>
          </Col>
          <Col md={3}>
            <h6 style={{color: "#fff"}}>Shop</h6>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Accessories</li>
            </ul>
          </Col>
          <Col md={3}>
            <h6 style={{color: "#fff"}}>Contact</h6>
            <p style={{color: "#ddd"}}>hello@skwrl.com</p>
          </Col>
        </Row>
        <hr style={{borderColor: "rgba(255,255,255,0.06)"}} />
        <div className="text-center pb-3" style={{color: "#ddd"}}>© {new Date().getFullYear()} SKWRL. All rights reserved.</div>
      </Container>
    </footer>
  );
}
