import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import PRODUCTS from "../data/products";

export default function Product({ addToCart }){
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id);
  if(!product) return <Container className="py-5"><h3>Product not found</h3></Container>;

  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <img src={product.images[0]} alt={product.title} className="img-fluid rounded" />
        </Col>
        <Col md={6}>
          <h2 style={{fontFamily: "Georgia, serif"}}>{product.title}</h2>
          <p className="text-muted">₹{product.price}</p>
          <p>{product.desc}</p>
          <div className="d-flex gap-2">
            <Button variant="dark" onClick={() => addToCart(product)}>Add to cart</Button>
            <Button variant="outline-dark">Wishlist</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
