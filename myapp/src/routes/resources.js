import React from "react";
import { Link } from "react-router-dom";

import styles from "./../styles/resources.module.css";

const Resources = () => {
  return (
    <>
      <Link
        to="/pregnancy-generation-preparation-for-success-20200416"
        className={styles.link_item}
      >
        Improving Pregnancy Generation: Preparation for Success
      </Link>
    </>
  );
};

export default Resources;
