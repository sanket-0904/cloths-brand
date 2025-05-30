import React from "react";
import { useState } from "react";
import Productstwo from "./../../Productstwo/Productstwo";
import styles from "./Product.module.css"; // Adjust the path as necessary
import pro1 from "./../../../../public/img/products/f1.jpg";
import pro2 from "./../../../../public/img/products/f2.jpg";
import pro3 from "./../../../../public/img/products/f3.jpg";
import pro4 from "./../../../../public/img/products/f4.jpg";

export default function Product() {
  const [mainImg, setMainImg] = useState(pro1);
  return (
    <>
      <div className={styles.main}>
        <div className={styles.img}>
          <div className={styles.mainimg}>
            <img src={mainImg} />
          </div>
          <div className={styles.imgs}>
            <img src={pro1} onClick={() => setMainImg(pro1)} />
            <img src={pro2} onClick={() => setMainImg(pro2)} />
            <img src={pro3} onClick={() => setMainImg(pro3)} />
            <img src={pro4} onClick={() => setMainImg(pro4)} />
          </div>
        </div>
        <div className={styles.contents}>
          <h5>Men's Fashion T Shirt</h5>
          <p class="price">$139.00</p>

          <select>
            <option>Select Size</option>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
            <option>Large</option>
          </select>
          <input className={styles.inputs} type="number" name="" id="" />
          <button>Add To Cart</button>

          <h3>Product Details</h3>
          <p>
            The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz.
            per sq. yd. fabric constructed from 100% cotton, this classic fit
            preshrunk jersey knit provides unmatched comfort with each wear.
            Featuring a taped neck and shoulder, and a seamless double-needle
            collar.
          </p>
        </div>
      </div>
      <div className={styles.title}>
        <h1>Featured Products</h1>
        <p>Summer Collection New Morden Design</p>
      </div>
      <Productstwo />
    </>
  );
}
