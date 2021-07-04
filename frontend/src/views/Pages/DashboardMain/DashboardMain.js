import React from "react";
import styles from "./DashboardMain.module.css";
import { DashboardCalender } from "../../../comps/DashboardCalender/DashboardCalender";

const DashboardMain = () => {
  return (
    <div className={styles.dashboardWrap}>
      <div className="col">Column</div>
      <DashboardCalender />
    </div>
  );
};

export default DashboardMain;
