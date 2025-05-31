import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Pages/Hero/Hero";
import Newslatter from "./components/Hero/Newsletter/Newslatter";
import About from "./components/Pages/About/ABout";
import Contact from "./components/Pages/Product/Product"; // Assume contact page exists
import Footer from "./components/Footer/Footer"; // Assume footer component exists
import Blog from "./components/Pages/Blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Newslatter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
