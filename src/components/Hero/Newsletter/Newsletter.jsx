import React from "react";
import styles from "./newsletter.module.css";

const Newslatter = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail update about our letest shop <span>special offer.</span>
        </p>
      </div>
      <div className={styles.email}>
        <input type="text" name="email" id="email" />
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Newslatter;
