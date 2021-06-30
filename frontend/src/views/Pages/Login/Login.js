import React, { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../../Api";
import styles from "./Login.module.css";
import largeLogo from "../../../assets/largeLogo.PNG";

/**
 * Ensure that a given username follows the expected requirements before submission
 *
 * @param {string} username User's username
 * @returns {response} The success of the validation and the message associated with it.
 */
const validateUsername = (username) => {
  const response = { success: true, msg: "" };

  if (username.length <= 0) {
    response.msg = "Username is required.";
    response.success = false;
  }

  if (username.length > 30) {
    response.msg = "Username cannot be longer the 30 characters.";
    response.success = false;
  }

  return response;
};

/**
 * Ensure that a given password follows the expected requirements before submission
 *
 * @param {string} password User's password
 * @returns {response} The success of the validation and the message associated with it.
 */
const validatePassword = (password) => {
  const response = { success: true, msg: "" };

  if (password.length <= 0) {
    response.msg = "Password is required.";
    response.success = false;
  }

  if (password.length > 30) {
    response.msg = "Password cannot be longer the 30 characters.";
    response.success = false;
  }

  return response;
};

/**
 * Provides a controlled component functionality for the login form
 * (i.e. keeps track of the username and password for the login form)
 *
 * @returns { values handleChange, handleSubmit } The values as an object and two handlers for
 * value changes and submission
 */
const useLoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateFields = () => {
    const errorsCopy = { ...errors };
    let success = true;

    // Ensure the username is valid
    const usernameResponse = validateUsername(values.username);
    errorsCopy.username = usernameResponse.msg;
    if (!usernameResponse.success) {
      success = false;
    }

    //Ensure that the password is valid
    const passwordResponse = validatePassword(values.password);
    errorsCopy.password = passwordResponse.msg;
    if (!passwordResponse.success) {
      success = false;
    }

    return { success, errorsCopy };
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { success, errorsCopy } = validateFields();
    setErrors(errorsCopy);

    if (!success) {
      return;
    }

    // TODO Implement all cases handling
    Api.signIn(values.username, values.password);
  };

  return { values, errors, handleChange, handleSubmit };
};

/**
 * Login form. Contains username and password fields *
 */
export default function Login() {
  const { values, errors, handleChange, handleSubmit } = useLoginForm();

  return (
    <>
      <div className={`container px-4 pt-4 mt-5 ${styles.loginContainer}`}>
        <div className="row mb-1">
          <div className="col d-flex justify-content-center">
            <img src={largeLogo} alt="large logo"></img>
          </div>
        </div>
        {/* Tite */}
        <div className="row">
          <div className="col">
            <h2 className="m-4 text-center" id="login-title">
              Login
            </h2>
          </div>
        </div>

        {/* Error model */}
        <div></div>

        <form className="needs-validation px-auto" noValidate onSubmit={handleSubmit}>
          {/* Username */}
          <div className="row">
            <div className="col">
              <label htmlFor="login-username" className="form-label">
                Username
              </label>
              <input
                id="login-username"
                name="username"
                className={`form-control ${styles.inputField} ${
                  errors.username ? "is-invalid" : ""
                }`}
                type="string"
                onChange={handleChange}
                value={values.username}
              ></input>
              {errors.username && <div className="invalid-feedback">{errors.username}</div>}
            </div>
          </div>

          {/* Password */}
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="login-password" className="form-label">
                Password
              </label>
              <input
                id="login-password"
                name="password"
                className={`form-control ${styles.inputField} ${
                  errors.password ? "is-invalid" : ""
                }`}
                type="password"
                onChange={handleChange}
                value={values.password}
              ></input>
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
          </div>

          {/* Login Button */}
          <div className="row mt-4 pb-4 text-center mb-5">
            <div className="col">
              {/* <button className="btn btn-outline-primary" type="submit">
                Login
              </button> */}
              <Link className="btn btn-outline-dark" to="/Dashboard">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
