import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Clipboard from "../Svgs/Clipboard";
import Reload from "../Svgs/ArrowRepeat";
import Api from "../../../Api";
import { useHistory } from "react-router-dom";

export default function AddUser() {
  const [registerUrl, setregisterUrl] = useState("https://example/register");
  const [clipboardColor, setClipboardColor] = useState("");
  const [reloadColor, setReloadColor] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  async function fetchRegisterUrl() {
    await Api.getRegisterToken()
      .then((res) => {
        if (res.status === 200) {
          setregisterUrl(`${process.env.REACT_APP_BASE_URL}/${res.data.tok}`);
        } else {
          throw Error("Unexpected response!");
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 403) {
            setError("403: You don't have permissions.");
            history.push("/Dashboard");
          } else if (err.response.status === 401) {
            history.push("/login");
          } else if (err.response.status === 500) {
            setError("500: Something unexpected went wrong.");
          } else {
            setError("Something unexpected went wrong.");
          }
        } else if (err.request) {
          setError("503: Timeout occured.");
        } else {
          setError("Something unexpected went wrong.");
        }
      });
  }

  return (
    <div className={styles.dashboardWrap}>
      <div className={styles.createRegisterTokenWrap}>
        <h3>Create Register Link</h3>
        <div className={styles.registerGeneratorWrap}>
          <input value={registerUrl} onChange={() => {}}></input>
          <div
            className={styles.clickableIcon}
            onClick={() => {
              navigator.clipboard.writeText(registerUrl);
              alert("Copied to url clipboard!");
            }}
            onMouseOver={() => {
              setClipboardColor("orange");
            }}
            onMouseOut={() => {
              setClipboardColor("black");
            }}
          >
            <Clipboard color={clipboardColor} />
          </div>
          <div
            className={styles.clickableIcon}
            onClick={() => {
              fetchRegisterUrl();
            }}
            onMouseOver={() => {
              setReloadColor("orange");
            }}
            onMouseOut={() => {
              setReloadColor("black");
            }}
          >
            <Reload color={reloadColor} />
          </div>
        </div>
      </div>
    </div>
  );
}
