import React, { useEffect, useState } from "react";
import styles from "./DashboardMain.module.css";
import { getCookieData } from "../../../helpers/jwtHelper";
import { DashboardCalender } from "../../../comps/DashboardCalender/DashboardCalender";
import ReminderHolder from "../Svgs/ReminderHolder";

const UserDashboard = () => {
  return (
    <>
      <h1>User dashboard</h1>
    </>
  );
};

const UserRow = ({ index, fname, lname, email, actions }) => {
  return (
    <ul className={styles.dataRow}>
      <li className={styles.dataCol}>First Name</li>
      <li className={styles.dataCol}>Last Name</li>
      <li className={styles.dataCol}>Email</li>
      <li className={styles.dataCol}>Actions</li>
    </ul>
  );
};

const VetDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await setUsers([
      {
        fname: "first name",
        lname: "last name",
        email: "email",
      },
      {
        fname: "first name",
        lname: "last name",
        email: "email",
      },
      {
        fname: "first name",
        lname: "last name",
        email: "email",
      },
      {
        fname: "first name",
        lname: "last name",
        email: "email",
      },
      {
        fname: "first name",
        lname: "last name",
        email: "email",
      },
    ]);
    setLoading(false);
  }, []);

  return (
    <>
      <div className={styles.userTableWrapper}>
        <ul className={styles.tableHeaders}>
          <h5 className={styles.headerCol}>First Name</h5>
          <h5 className={styles.headerCol}>Last Name</h5>
          <h5 className={styles.headerCol}>Email</h5>
          <h5 className={styles.headerCol}>Actions</h5>
        </ul>

        {loading ? (
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <div class="spinner-grow text-primary" role="status" />
          </div>
        ) : (
          users.map((val, index) =>
            UserRow({
              index,
              fname: val.fname,
              lname: val.lname,
              email: val.email,
              actions: "actions",
            })
          )
        )}
      </div>
    </>
  );
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
