import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css"; // Corrected CSS module import path
import logo from "/img/logo.png"; // Corrected image import path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // ✅ Import kiya
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width={100} />
      </div>
      <div className={styles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Menu/menu.jsx">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </nav>
  );
};

export default Navbar; // Corrected export statement
