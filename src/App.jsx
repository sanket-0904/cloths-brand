import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Pages/Hero/Hero";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Hero />
        {/* <AppRoutes /> */}
      </Router>
    </div>
  );
};

export default App;
