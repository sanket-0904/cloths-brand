import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from ".././../../public/img/logo.png"; // correct path for your image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width={100} />
      </div>

      <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
        <li>
          <Link to="/" className={currentPath === "/" ? styles.activeLink : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Shop"
            className={currentPath === "/Shop" ? styles.activeLink : ""}
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to="/Blog"
            className={currentPath === "/Blog" ? styles.activeLink : ""}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/Aboutus"
            className={currentPath === "/Aboutus" ? styles.activeLink : ""}
          >
            About-us
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className={currentPath === "/Contact" ? styles.activeLink : ""}
          >
            Contact
          </Link>
        </li>
        <li className={styles.cart}>
          <FontAwesomeIcon icon={faShoppingCart} />
        </li>
        <FontAwesomeIcon
          icon={faTimes}
          className={styles.closeIcon}
          onClick={() => setMenuOpen(false)}
        />
      </ul>

      <div className={styles.mobile} onClick={() => setMenuOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
