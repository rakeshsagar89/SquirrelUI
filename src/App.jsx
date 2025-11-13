import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SiteFooter from "./components/SiteFooter";
import SiteNavbar from "./components/SiteNavbar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
export default function App() {
  // Load cart from localStorage to persist on refresh
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [showCart, setShowCart] = useState(false);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  return (<>
      <SiteNavbar
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onCartClick={() => setShowCart(true)}
      />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/catalog" element={<Catalog addToCart={addToCart} />} />
        <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
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
                <div key={item.id} className="cart-item d-flex align-items-center mb-3">
                  <img
                    src={item.images ? item.images[0] : item.image}
                    alt={item.name || item.title}
                    style={{ width: "60px", height: "60px", objectFit: "cover", marginRight: "10px" }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.name || item.title}</h6>
                    <p className="mb-0">₹{item.price} × {item.qty}</p>
                  </div>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
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
