import React from "react";
import styles from "./Bannerthree.module.css";

const Bannerthree = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bannerbox1}>
        <h4>SEASONAL SALE</h4>
        <h5>winter collection -50% OFF</h5>
      </div>
      <div className={styles.bannerbox2}>
        <h4>SEASONAL SALE</h4>
        <h5>winter collection -50% OFF</h5>
      </div>
      <div className={styles.bannerbox3}>
        <h4>SEASONAL SALE</h4>
        <h5>winter collection -50% OFF</h5>
      </div>
    </div>
  );
};

export default Bannerthree;
