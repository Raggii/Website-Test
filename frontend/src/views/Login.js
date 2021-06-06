import React, { useState } from "react";
import Api from "../Api";

/**
 * Ensure that a given username confines to the requirements
 *
 * @param {string} username User's username
 * @returns {response} Returns the success of the validation and the message associated with it.
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
 * Provides a controlled component functionality for the login form
 * (i.e. keeps track of the username and password for the login form)
 *
 * @returns { values handleChange, handleSubmit } Returns the values as an object and two handlers for
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ensure the username is valid
    const usernameResponse = validateUsername(values.username);
    if (!usernameResponse.success) {
      setErrors({
        ...errors,
        username: usernameResponse.msg,
      });
      return;
    }

    Api.signIn(values.username, values.password);
  };

  return { values, handleChange, handleSubmit, errors };
};

/**
 * Login form. Contains username and password fields *
 */
export default function Login() {
  const { values, handleChange, handleSubmit } = useLoginForm();

  return (
    <>
      <div className="container">
        {/* Tite */}
        <div className="row">
          <div className="col">
            <h3 className="m-4 text-center">Login</h3>
          </div>
        </div>

        <form className="needs-validation px-auto " onSubmit={handleSubmit}>
          {/* Username */}
          <div className="row">
            <div className="col">
              <label htmlFor="username-input-id" className="form-label">
                Username
              </label>
              <input
                id="username-input-id"
                name="username"
                className="form-control"
                type="string"
                onChange={handleChange}
                value={values.username}
              ></input>
            </div>
          </div>

          {/* Password */}
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="password-input-id" className="form-label">
                Password
              </label>
              <input
                id="password-input-id"
                name="password"
                className="form-control"
                type="password"
                onChange={handleChange}
                value={values.password}
              ></input>
            </div>
          </div>

          {/* Login Button */}
          <div className="row mt-4 text-center">
            <div className="col">
              <button className="btn btn-outline-primary" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
