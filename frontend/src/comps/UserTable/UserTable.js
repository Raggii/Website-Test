import styles from "./UserTable.module.css";
import React, { useEffect, useState } from "react";
import Api from "./../../Api";

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

const EmptyRow = () => {
  return (
    <ul className={styles.dataRow}>
      <li className={styles.dataCol}></li>
      <li className={styles.dataCol}></li>
      <li className={styles.dataCol}></li>
      <li className={styles.dataCol}></li>
    </ul>
  );
};

function CurrentPage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-circle-fill"
      viewBox="0 0 16 16"
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  );
}

function OptionPage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    </svg>
  );
}

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
    const response = await Api.getUsers();

    while (response.length < 7) {
      response.push(undefined);
    }

    setTableData({
      ...tableData,
      users: response,
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
              .slice(0, 7)
              .map((val, index) =>
                val ? (
                  <UserRow
                    key={index}
                    index={index}
                    fname={val.fname}
                    lname={val.lname}
                    email={val.email}
                  />
                ) : (
                  <EmptyRow />
                )
              )
          )}

          {loading ? (
            <> </>
          ) : (
            <div className={styles.paginationWrapper}>
              <ul className={styles.pagination}>
                <li className={styles.paginationPage}>
                  <CurrentPage />
                </li>
                <li className={styles.paginationPage}>
                  <OptionPage />
                </li>
                <li className={styles.paginationPage}>
                  <OptionPage />
                </li>
                <li className={styles.paginationPage}>
                  <OptionPage />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
