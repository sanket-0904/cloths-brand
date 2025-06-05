import React from "react";
import styles from "./products.module.css";
import pro1 from "/public/img/products/f1.jpg";
import pro2 from "/public/img/products/f2.jpg";
import pro3 from "/public/img/products/f3.jpg";
import pro4 from "/public/img/products/f4.jpg";
import pro5 from "/public/img/products/f5.jpg";
import pro6 from "/public/img/products/f6.jpg";
import pro7 from "/public/img/products/f7.jpg";
import pro8 from "/public/img/products/f8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  return (
    <div className={styles.main}>
      <div
        className="products"
        onClick={() => (window.location.href = "/Product")}
      >
        <img src={pro1} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
      <div className="products">
        <img src={pro2} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
      <div className="products">
        <img src={pro3} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
      <div className="products">
        <img src={pro4} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
      <div className="products">
        <img src={pro5} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
      <div className="products">
        <img src={pro6} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
      <div className="products">
        <img src={pro7} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
      <div className="products">
        <img src={pro8} alt="product1" />
        <div className="content">
          <p>adidas</p>
          <h5>Cartoon Astronaut T-Shirt</h5>
          <li>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </li>
          <span>
            <h5 className="price">$78</h5>
            <button className="buy">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;
