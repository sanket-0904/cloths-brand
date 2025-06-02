import React from "react";
import styles from "./../Aboutus/aboutus.module.css";
import Cardimg from "./../../../../public/img/about/a6.jpg";
import Video from "./../../../../public/img/about/1.mp4";
import Cards from "../../Cards/Cards";

const Aboutus = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.banner}>
          {/* <img src={Banner} /> */}
          <h1>#KnowUs</h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={Cardimg} />
          </div>
          <div className={styles.contents}>
            <h1>Who We Are?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis praesentium, aliquid impedit, sit consequatur
              possimus accusamus ipsum pariatur quo, quos cumque quidem. Quasi,
              modi ducimus commodi qui cum facere quis tempore similique magni.
              Dolores nobis in, exercitationem accusantium a, totam vero non sed
              voluptatum vel, optio molestiae odio assumenda excepturi?
            </p>
          </div>
        </div>
        <div className={styles.video}>
          <h1>
            download Our <span>App</span>
          </h1>
          <video src={Video} autoPlay loop muted></video>
        </div>
      </div>
      <div className={styles.cards}>
        <Cards />
      </div>
    </>
  );
};

export default Aboutus;
