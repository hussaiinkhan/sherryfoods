import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { CartProvider } from "./context/CartContext";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./Contact";

function App() {
  return (
    <CartProvider>
    <div className="App">
      <Router>
        <Navbar />
        <>
          <Routes>
            <Route exact path="/" element={<Login />} />  {/* Have to create a landing page with path '/' so that it is shown when page is accessed at first */}
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/checkout" element={<Checkout/>} />
          </Routes>
        </>
        <Footer />
      </Router>
    </div>
    </CartProvider>
  );
}

export default App;
