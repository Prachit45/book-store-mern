import React, { useState } from "react";
import Home from "./home/Home";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart"; // Cart page

export default function App() {
  const [authUser] = useAuth(); // no need for setAuthUser if not used
  const [cart, setCart] = useState([]); // cart state

  const addToCart = (product) => {
  setCart((prevCart) => {
    const exists = prevCart.find((item) => item.id === product.id);
    if (exists) {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prevCart, { ...product, quantity: 1 }];
  });
};

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      {/* Navbar with cart items */}
      <Navbar cartItems={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course"
          element={
            authUser ? (
              <Courses addToCart={addToCart} />
            ) : (
              <Navigate to="/signup" />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Cart cartItems={cart} removeFromCart={removeFromCart} />
          }
        />
      </Routes>
    </div>
  );
}
