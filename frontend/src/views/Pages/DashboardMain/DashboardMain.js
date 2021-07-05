import React, { useEffect, useState } from "react";
import styles from "./DashboardMain.module.css";
import { getCookieData } from "../../../helpers/jwtHelper";
import { DashboardCalender } from "../../../comps/DashboardCalender/DashboardCalender";
import { UserTable } from "../../../comps/UserTable/UserTable";

const UserDashboard = () => {
  return (
    <>
      <h1>User dashboard</h1>
    </>
  );
};

const VetDashboard = () => {
  return <UserTable />;
};

const AdminDashboard = () => {
  return (
    <>
      <h1>Admin Dashboard</h1>
    </>
  );
};

const renderSwitch = (role) => {
  switch (role) {
    case 0:
      return <AdminDashboard />;
    case 1:
      return <AdminDashboard />;
    case 2:
      return <VetDashboard />;
    case 3:
      return <UserDashboard />;
  }
};

const DashboardMain = () => {
  const [userData, setUserData] = useState(getCookieData());

  useEffect(() => {
    setUserData({ ...userData, role: 2 });
  }, []);

  return (
    <div className={styles.dashboardWrap}>
      {renderSwitch(userData.role)}
      <DashboardCalender />
    </div>
  );
};

export default DashboardMain;
