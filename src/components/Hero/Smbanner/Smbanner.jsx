import React from "react";
import styles from "./Smbanner.module.css";

const Smbanners = () => {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <p>crazy deals</p>
        <h4>buy 1 get 1 free</h4>
        <p>The best classic dress is on sale at cara</p>
        <button>Learn More</button>
      </div>
      <div className={styles.box1}>
        <p>crazy deals</p>
        <h4>buy 1 get 1 free</h4>
        <p>The best classic dress is on sale at cara</p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Smbanners; // Yeh zaroori hai
