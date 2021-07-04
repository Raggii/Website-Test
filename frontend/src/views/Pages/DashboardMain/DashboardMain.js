import React from "react";
import styles from "./DashboardMain.module.css";
import { DashboardCalender } from "../../../comps/DashboardCalender/DashboardCalender";
import jwt from "jsonwebtoken";
import Cookies from "js-cookie";

const DashboardMain = () => {
  console.log(jwt.decode(Cookies.get("chronousTheThirdEyedMonster")));

  return (
    <div className={styles.dashboardWrap}>
      <div className="col">Column</div>
      <DashboardCalender />
    </div>
  );
};

export default DashboardMain;
