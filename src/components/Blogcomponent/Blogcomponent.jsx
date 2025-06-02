import React from "react";
import styles from "../Blogcomponent/blogcomponent.module.css";
import boneimg from "./../../../public/img/blog/b1.jpg";
import btwoimg from "./../../../public/img/blog/b2.jpg";
import bthreeimg from "./../../../public/img/blog/b3.jpg";
import bfourimg from "./../../../public/img/blog/b4.jpg";
import bfiveimg from "./../../../public/img/blog/b6.jpg";

const Blogcomponent = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.bone}>
          <div className={styles.img}>
            <img src={boneimg} />
          </div>
          <div className={styles.content}>
            <h4>The Cotton-Jersey Zip-Up Hoodie </h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony. godard
            </p>
            <button>continue reading</button>
          </div>
        </div>
        <div className={styles.bone}>
          <div className={styles.img}>
            <img src={btwoimg} />
          </div>
          <div className={styles.content}>
            <h4>How to Style a Quiff</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony. godard
            </p>
            <button>continue reading</button>
          </div>
        </div>
        <div className={styles.bone}>
          <div className={styles.img}>
            <img src={bthreeimg} />
          </div>
          <div className={styles.content}>
            <h4>Must-Have Skater Girl Items</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony. godard
            </p>
            <button>continue reading</button>
          </div>
        </div>
        <div className={styles.bone}>
          <div className={styles.img}>
            <img src={bfourimg} />
          </div>
          <div className={styles.content}>
            <h4>Runway-Inspired Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony. godard
            </p>
            <button>continue reading</button>
          </div>
        </div>
        <div className={styles.bone}>
          <div className={styles.img}>
            <img src={bfiveimg} />
          </div>
          <div className={styles.content}>
            <h4>AW20 Menswear Trends</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony. godard
            </p>
            <button>continue reading</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogcomponent;
