import React from "react";
import Navbar from "../component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { Footer } from "../component/Footer";
import { About } from "../pages/About";
import { Products } from "../pages/Products";
import { SingleProduct } from "../pages/SingleProduct";
import Cart from "../pages/Cart";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </>
      <Footer />
    </>
  );
};

export default AppRoutes;
