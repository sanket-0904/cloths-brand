import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width={100} />
        </div>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link> {/* Yeh About page kholega */}
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/About">About</Link> {/* Yeh About page kholega */}
          </li>
          <li>
            <Link to="/Contact">Contact</Link> {/* Yeh Contact page kholega */}
          </li>
          <li className={styles.cart}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
