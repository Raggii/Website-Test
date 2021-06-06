import React, { useState } from "react";

const login = (event) => {
  event.preventDefault();
  alert("LOGIN");
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setUsername({ value: event.target.value });
  };

  return (
    <>
      <div className="container">
        {/* Tite */}
        <div className="row">
          <div className="col">
            <h3 className="m-4 text-center">Login</h3>
          </div>
        </div>

        <form className="needs-validation px-auto ">
          {/* Username */}
          <div className="row">
            <div className="col">
              <label htmlFor="username-input-id" className="form-label">
                Username
              </label>
              <input
                onChange={handleChange}
                id="username-input-id"
                className="form-control"
                type="string"
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
                onChange={handleChange}
                id="password-input-id"
                className="form-control"
                type="password"
              ></input>
            </div>
          </div>

          {/* Login */}
          <div className="row mt-4 text-center">
            <div className="col">
              <button className="btn btn-outline-primary" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
