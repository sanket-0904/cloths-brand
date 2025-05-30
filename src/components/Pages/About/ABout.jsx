import React from "react";
import styles from "./About.module.css";
import Products from "../../Products/Products";
import Productstwo from "../../Productstwo/Productstwo";
import Newslatter from "../../Hero/Newsletter/Newslatter";

const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h1>#stayhome</h1>
        <h5>Save more with coupons & up to 70% off!</h5>
      </div>
      <Products />
      <Productstwo />
      <div className={styles.buttons}>
        <button className={styles.btn1}>1</button>
        <button className={styles.btn2}>2</button>
        <button className={styles.btn3}>⮕</button>
      </div>
    </>
  );
};

export default About;
