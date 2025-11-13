import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/cart.css";

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Razorpay Checkout Function
  const handleCheckout = () => {
    // const options = {
    //   key: "rzp_test_YourKeyHere", // 🔹 Replace with your Razorpay Test Key ID
    //   amount: total * 100, // Amount in paise (₹1 = 100 paise)
    //   currency: "INR",
    //   name: "Pixel Threads",
    //   description: "Order Payment",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Razorpay_logo.svg",
    //   handler: function (response) {
    //     alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
    //   },
    //   prefill: {
    //     name: "Rakesh Vamsi Sagar",
    //     email: "test@example.com",
    //     contact: "9999999999",
    //   },
    //   notes: {
    //     address: "Customer Address",
    //   },
    //   theme: {
    //     color: "#000000",
    //   },
    // };

    // const rzp = new window.Razorpay(options);
    // rzp.open();
  };

  return (
    <Container className="cart-page py-5">
      <h2 className="cart-title text-center fw-bold mb-5">Your Bag</h2>

      {cart.length === 0 ? (
        <div className="empty-cart text-center">
          <p className="text-muted mb-4">Your bag is empty.</p>
          <Link to="/catalog">
            <Button variant="dark" className="rounded-pill px-4">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <Row className="cart-items">
            {cart.map((item) => (
              <Col
                md={12}
                key={item.id}
                className="cart-item d-flex align-items-center justify-content-between mb-4 p-3 border-bottom"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    className="cart-image rounded-3 me-4"
                    style={{
                      width: "120px",
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="fw-semibold mb-1">{item.title}</h5>
                    <p className="text-muted mb-1">Qty: {item.qty}</p>
                    <p className="fw-bold mb-0">₹{item.price}</p>
                  </div>
                </div>

                <Button
                  variant="outline-dark"
                  size="sm"
                  className="remove-btn rounded-pill px-3"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </Col>
            ))}
          </Row>

          <div className="cart-summary text-end mt-5">
            <h4 className="cart-total fw-bold mb-3">
              Total: ₹{total.toLocaleString()}
            </h4>
            <Button
              variant="dark"
              size="lg"
              className="checkout-btn rounded-pill px-5"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
