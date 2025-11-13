import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PRODUCTS from "../data/products";

function Catalog({ addToCart }) {
  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Collection</h2>
        <Link to="/cart" className="btn btn-dark rounded-pill px-4">Cart</Link>
      </div>
      <Row>
        {PRODUCTS.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="border-0 shadow-sm hover-scale">
              <Card.Img
                variant="top"
                src={product.images[0]}
                className="rounded-3"
                style={{ height: "350px", objectFit: "cover" }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-semibold">{product.name}</Card.Title>
                <Card.Text className="text-muted">₹{product.price}</Card.Text>
                <Button variant="dark" className="rounded-pill px-4" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Catalog;
