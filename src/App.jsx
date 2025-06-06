import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Pages/Hero/Hero";
import Newsletter from "./components/Hero/Newsletter/Newsletter";
import About from "./components/Pages/About/ABout";
import Products from "./components/Products/Products"; // Assume contact page exists
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
        <Route path="/Product" element={<Products />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
