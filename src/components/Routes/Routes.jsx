import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Hero";
import Menu from "../Pages/Menu/About";
import Contact from "../Pages/Contact/Contact";
import App from "../../App";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <App />
    </Routes>
  );
}
export default AppRoutes;
