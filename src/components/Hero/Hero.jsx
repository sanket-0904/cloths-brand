import React from "react";
import style from "./Hero.module.css";
import "@fontsource/spartan"; // ✅ Direct import
import "@fontsource/poppins/500.css"; // popppins font
import Cards from "../Cards/Cards";

const Hero = () => {
  return (
    <div>
      <div className={style.hero}>
        <div className={style.content}>
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons & up to 70% off!</p>
          <button>Shop Now</button>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Hero;
