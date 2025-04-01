import React from "react";
import styles from "./banner.module.css";
import bgimg from "./../../../public/img/banner/b2.jpg";

const Banner = () => {
  return (
    <div>
      <div className={styles.bgimg}>
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off</span> - All t-Shirts & Accessories
        </h2>
        <button>Explore More</button>
      </div>
    </div>
  );
};

export default Banner;
