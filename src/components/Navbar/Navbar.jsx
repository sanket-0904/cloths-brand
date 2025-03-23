import React from "react";
import styles from "./navbar.module.css"; // Corrected CSS module import path
import logo from "../../img/logo.png"; // Adjusted the path to the logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // ✅ Import kiya
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width={100} />
      </div>
      <div className={styles.menu}>
        <a href="#">Menu</a>
        <a href="#">Shop</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </nav>
  );
};

export default Navbar; // Corrected export statement
