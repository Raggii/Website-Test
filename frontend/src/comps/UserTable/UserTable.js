import styles from "./UserTable.module.css";
import React, { useEffect, useState } from "react";

const UserRow = ({ index, fname, lname, email }) => {
  return (
    <ul className={styles.dataRow}>
      <li className={styles.dataCol}>{fname}</li>
      <li className={styles.dataCol}>{lname}</li>
      <li className={styles.dataCol}>{email}</li>
      <li className={styles.dataCol}>
        <button className={styles.actionsButton} disabled onClick={() => {}}>
          Actions
        </button>
      </li>
    </ul>
  );
};

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setUsers([
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
        <div className={styles.userTable}>
          <ul className={styles.tableHeaders}>
            <h5 className={styles.headerCol}>First Name</h5>
            <h5 className={styles.headerCol}>Last Name</h5>
            <h5 className={styles.headerCol}>Email</h5>
            <h5 className={styles.headerCol}>Actions</h5>
          </ul>

          {loading ? (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <div className="spinner-grow text-primary" role="status" />
            </div>
          ) : (
            users
              .slice(0, 5)
              .map((val, index) => (
                <UserRow
                  key={index}
                  index={index}
                  fname={val.fname}
                  lname={val.lname}
                  email={val.email}
                />
              ))
          )}
        </div>
      </div>
    </>
  );
};
