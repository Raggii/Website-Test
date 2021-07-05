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

const useUserTable = () => {
  const [data, setData] = useState({
    users: [],
    pageNumber: 0,
    maxPageNumber: 0,
  });

  return { tableData: data, setTableData: setData };
};

export const UserTable = () => {
  const { tableData, setTableData } = useUserTable();
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    setTableData({
      ...tableData,
      users: [
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
      ],
      maxPageNumber: 4,
    });

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
            tableData.users
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

          {loading ? (
            <> </>
          ) : (
            <div className={styles.paginationWrapper}>
              <ul className={styles.pagination}>
                <li className={styles.paginationPage}>
                  asd
                  <i className="bi bi-circle"></i>
                </li>
                <li className={styles.paginationPage}>
                  asd
                  <i className="bi bi-circle"></i>
                </li>
                <li className={styles.paginationPage}>
                  asd
                  <i className="bi bi-circle"></i>
                </li>
                <li className={styles.paginationPage}>
                  asd
                  <i className="bi bi-circle"></i>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
