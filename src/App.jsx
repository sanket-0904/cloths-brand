import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Pages/Hero/Hero";
import Newslatter from "./components/Hero/Newsletter/Newslatter";
import About from "./components/Pages/About/ABout";
import Product from "./components/Pages/Product/Product"; // Assume contact page exists
import Footer from "./components/Footer/Footer"; // Assume footer component exists
import Blog from "./components/Pages/Blog/Blog";
import Aboutus from "./components/Pages/Aboutus/Aboutus";
import Contact from "./components/Pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Shop" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Newslatter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
