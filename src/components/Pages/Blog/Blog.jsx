import React from "react";
import styles from "./../Blog/blog.module.css";
import Blogcomponent from "../../Blogcomponent/Blogcomponent";

const Blog = () => {
  return (
    <>
      <div className={styles.main}>
        <h1>#readmore</h1>
        <h5>Read all case studies about our products!</h5>
      </div>
      <Blogcomponent />
    </>
  );
};

export default Blog;
