import React from "react";
import styles from "./futter.module.css";
import logo from "./../../../public/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import app from "./../../../public/img/pay/app.jpg";
import pay from "./../../../public/img/pay/pay.png";
import play from "./../../../public/img/pay/play.jpg";

const Futter = () => {
  return (
    <div className={styles.main}>
      <div className={styles.contact}>
        <img src={logo} alt="logo" />
        <h5>Contact</h5>
        <p>Address: 562 wellington Rode, Street 32, San Francisco</p>
        <p>Phone: +01 2222 365 /(+91) 01 2345 6789</p>
        <p>Hours: 10:00 - 18:00, Mon - Sat</p>
        <h5 className={styles.hicon}>follow us</h5>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faPinterest} />
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </div>
      <div className={styles.about}>
        <h5>About</h5>
        <p>About us</p>
        <p>Delivery Information</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Contact Us</p>
      </div>
      <div className={styles.myaccount}>
        <h5>My Account</h5>
        <p>Sign In</p>
        <p>View Cart</p>
        <p>My Wishlist</p>
        <p>Track my order</p>
        <p>Help</p>
      </div>
      <div className={styles.install}>
        <h5>Install App</h5>
        <p>From App store or Google play</p>
        <img className={styles.pay} src={app} alt="app" />
        <img className={styles.pay} src={play} alt="play" />
        <p>Secured Payment Gateways</p>
        <img className={styles.pays} src={pay} alt="pay" />
      </div>
    </div>
  );
};

export default Futter;
