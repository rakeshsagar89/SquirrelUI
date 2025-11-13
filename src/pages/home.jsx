import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PRODUCTS from "../data/products";
import { Link } from "react-router-dom";

export default function Home({ addToCart }){
  // hero image use first product image or a large placeholder matching screenshot
//   const heroImage = "https://placehold.co/2000x900?text=Express+yourself+Hero";
  const heroImage = "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay w-100">
          <Container>
            <Row>
              <Col md={6}>
                <h1>Move in Perfection. Wear SKWRL.</h1>
                <p>Stand out with custom designs that speak to you.</p>
                <div className="mt-4">
                  <Link to="/catalog" className="btn btn-light btn-lg">Shop now</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className="my-5">
        <h3 className="mb-4" style={{fontFamily: "Georgia, serif"}}>Featured products</h3>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {PRODUCTS.map(p => (
            <Col key={p.id}>
              <Card className="product-card h-100">
                <Card.Img variant="top" src={p.images[0]} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="card-title">{p.title}</Card.Title>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <div>
                      <div className="price">₹{p.price}</div>
                    </div>
                    <div className="d-flex gap-2">
                      <Button variant="outline-dark" as={Link} to={`/product/${p.id}`}>View</Button>
                      <Button variant="dark" onClick={() => addToCart(p)}>Add</Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
