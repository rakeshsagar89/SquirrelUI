import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/siteNavbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

export default function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      return [...prev, { ...product, qty }];
    });
  };

  const removeFromCart = (id) =>
    setCart((prev) => prev.filter((i) => i.id !== id));

  return (
    <>
      <SiteNavbar
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCartClick={() => setShowCart(true)}
      />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
        <Route
          path="/product/:id"
          element={<Product addToCart={addToCart} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <SiteFooter />

      {/* 🛒 Cart Drawer */}
      {showCart && (
        <div className="cart-overlay" onClick={() => setShowCart(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <h4>Your Cart</h4>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h6>{item.name}</h6>
                    <p>
                      ₹{item.price} × {item.qty}
                    </p>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
            {cart.length > 0 && (
              <button
                className="btn btn-dark w-100 mt-3"
                onClick={() => alert("Proceed to Checkout")}
              >
                Checkout
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
