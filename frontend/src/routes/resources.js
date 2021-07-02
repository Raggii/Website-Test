import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/resources.module.css";

const Resources = () => {
  return (
    <>
      <div className={styles.resources_container}>
        <div className={styles.resource_item_wrap}>
          <Link
            to="/pregnancy-generation-preparation-for-success-20200416"
            className={styles.resource_item}
          >
            Improving Pregnancy Generation: Preparation for Success
          </Link>
        </div>
      </div>
    </>
  );
};

export default Resources;
