import React from "react";
import styles from "./Cards.module.css";
import f1 from "./../../../public/img/features/f1.png";
import f2 from "./../../../public/img/features/f2.png";
import f3 from "./../../../public/img/features/f3.png";
import f4 from "./../../../public/img/features/f4.png";
import f5 from "./../../../public/img/features/f5.png";
import f6 from "./../../../public/img/features/f6.png";

const Cards = () => {
  return (
    <>
      <div className={styles.main}>
        <div className="cards">
          <img src={f1} alt="f1" />
          <p className={styles.f1}>Free shipping</p>
        </div>
        <div className="cards">
          <img src={f2} alt="f1" />
          <p className={styles.f2}>Online order</p>
        </div>
        <div className="cards">
          <img src={f3} alt="f1" />
          <p className={styles.f3}>Save money</p>
        </div>
        <div className="cards">
          <img src={f4} alt="f1" />
          <p className={styles.f4}>Promotions</p>
        </div>
        <div className="cards">
          <img src={f5} alt="f1" />
          <p className={styles.f5}>Happy sell</p>
        </div>
        <div className="cards">
          <img src={f6} alt="f1" />
          <p className={styles.f6}>F24/7 Support</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
