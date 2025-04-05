import { Routes, Route } from "react-router-dom";
import Home from "../../components/Hero/Hero";
import About from "../../components/Pages/About/About";
import Contact from "../../components/Pages/Contact/Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;
