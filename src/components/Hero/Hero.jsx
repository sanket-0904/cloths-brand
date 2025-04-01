import React from "react";
import style from "./Hero.module.css";
import "@fontsource/spartan"; // ✅ Direct import
import "@fontsource/poppins/500.css"; // popppins font
import Cards from "../Cards/Cards";
import Products from "../Products/Products";
import Banners from "../Banner/Banner";
import Productstwo from "../Productstwo/Productstwo";
import Smbanners from "./Smbanner/Smbanner.jsx";
import Bannerthrees from "./Bannerthree/Bannerthree.jsx";

const Hero = () => {
  return (
    <div>
      <div className={style.hero}>
        <div className={style.content}>
          <h4>Trade-in-offer</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons & up to 70% off!</p>
          <button className={style.buttons}>Shop Now</button>
        </div>
      </div>
      <Cards />
      <div className={style.title}>
        <h1>Featured Products</h1>
        <p>Summer Collection New Morden Design</p>
      </div>
      <Products />
      <Banners />
      <div className={style.title}>
        <h1>New Arrivals</h1>
        <p>Summer Collection New Morden Design</p>
      </div>
      <Productstwo />
      <Smbanners />
      <Bannerthrees />
    </div>
  );
};

export default Hero;
