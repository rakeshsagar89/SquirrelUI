import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Checkout() {
  return (
    <Container className="text-center" style={{ padding: "100px 20px" }}>
      <h2>Checkout Page</h2>
      <p>Complete your payment securely here.</p>
      <Button variant="dark">Proceed with Payment</Button>
    </Container>
  );
}
