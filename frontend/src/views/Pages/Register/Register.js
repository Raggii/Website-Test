import React, { useState } from "react";
import styles from "./Register.module.css";
import { useParams } from "react-router-dom";
import { FormWrapper } from "../../../comps/FromWrapper/FormWrapper";
import largeLogo from "./../../../assets/largeLogo.PNG";
import ErrorModel from "./../../../comps/ErrorModel";
import { useHistory } from "react-router-dom";
import Api from "./../../../Api";

const isUsernameValid = (username) => {
  const pattern = new RegExp(/^([a-zA-Z]|[0-9])+$/);

  if (username.length > 30) {
    return "Username has a max length of 30.";
  } else if (pattern.test(username)) {
    return "";
  } else if (!username) {
    return "Username is required";
  } else {
    return "Username must be alphanumeric, between 1 and 30 characters.";
  }
};

const isEmailValid = (email) => {
  const pattern = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

  if (email.length > 30) {
    return "Email has a max length of 30.";
  } else if (pattern.test(email)) {
    return "";
  } else if (!email) {
    return "email is required.";
  }
  return "Invalid email";
};

const isFirstNameValid = (fname) => {
  const pattern = new RegExp(/^[a-zA-Z]+$/);

  if (fname.length > 30) {
    return "First name has a max length of 30.";
  } else if (!fname) {
    return "First name is required";
  } else if (!pattern.test(fname)) {
    return "First name must be alphabetic, between 1 and 30 characters.";
  } else {
    return "";
  }
};

const isLastNameValid = (lname) => {
  const pattern = new RegExp(/^[a-zA-Z]+$/);

  if (lname.length > 30) {
    return "Last name has a max length of 30.";
  } else if (pattern.test(lname)) {
    return "";
  } else if (!lname) {
    return "Last name is required";
  } else {
    return "Last name must be alphabetic, between 1 and 30 characters.";
  }
};

const isPasswordValid = (password) => {
  if (password.length > 30) {
    return "Last name has a max length of 30.";
  } else if (!password) {
    return "Password is required";
  }
  return "";
};

const isConfirmPasswordValid = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Passwords need to match.";
  } else {
    return "";
  }
};

const validateRegister = async (registerValues, setRegisterErrors) => {
  let isValid = true;

  const usernameError = isUsernameValid(registerValues.username);
  if (usernameError) {
    isValid = false;
  }

  const emailError = isEmailValid(registerValues.email);
  if (emailError) {
    isValid = false;
  }

  const fnameError = isFirstNameValid(registerValues.fname);
  if (fnameError) {
    isValid = false;
  }

  const lnameError = isLastNameValid(registerValues.lname);
  if (lnameError) {
    isValid = false;
  }

  const passwordError = isPasswordValid(registerValues.password);
  if (passwordError) {
    isValid = false;
  }

  const confirmPasswordError = isConfirmPasswordValid(
    registerValues.password,
    registerValues.confirmPassword
  );
  if (confirmPasswordError) {
    isValid = false;
  }

  const errors = {
    username: usernameError,
    email: emailError,
    fname: fnameError,
    lname: lnameError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  };

  await setRegisterErrors({
    username: usernameError,
    email: emailError,
    fname: fnameError,
    lname: lnameError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
  });

  return { errors, isValid };
};

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const history = useHistory();

  const [registerValues, setRegisterValues] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerErrors, setRegisterErrors] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
    modelError: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { isValid, errors } = await validateRegister(registerValues, setRegisterErrors);

    if (!isValid) {
      return;
    }

    setLoading(true);
    await Api.register(
      registerValues.username,
      registerValues.password,
      registerValues.email,
      registerValues.fname,
      registerValues.lname,
      token
    )
      .then((res) => {
        if (res.status === 201) {
          history.push("/Dashboard");
          return;
        } else {
          throw Error("Unexpected response!");
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 400) {
            setRegisterErrors({ ...errors, modelError: "400: Some data is invalid." });
          } else if (err.response.status === 403) {
            history.push("/");
            return;
          } else if (err.response.status === 401) {
            history.push("/");
            return;
          } else if (err.response.status === 409) {
            setRegisterErrors({ ...errors, modelError: "Please choose another username" });
          } else if (err.response.status === 500) {
            setRegisterErrors({
              ...errors,
              modelError: "500: Something unexpected went wrong.",
            });
          } else {
            setRegisterErrors({
              ...errors,
              modelError: "Something unexpected went wrong.",
            });
          }
        } else if (err.request) {
          setRegisterErrors({ ...errors, modelError: "503: Timeout occured." });
        } else {
          setRegisterErrors({ ...errors, modelError: "Something unexpected went wrong." });
        }
      });
    setLoading(false);
  };

  return { registerValues, registerErrors, handleChange, loading, handleSubmit };
};

export default function Register() {
  const { registerErrors, registerValues, handleChange, loading, handleSubmit } = useRegister();
  const history = useHistory();

  return (
    <FormWrapper>
      <div className={`container px-4 pt-4 ${styles.loginContainer}`}>
        <div className="row mb-1">
          <div className="col d-flex justify-content-center">
            <img src={largeLogo} alt="large logo"></img>
          </div>
        </div>
        {/* Tite */}
        <div className="row">
          <div className="col">
            <h2 className="m-4 text-center" id="login-title">
              Register
            </h2>
          </div>
        </div>

        {/* Error Message */}
        <ErrorModel error={registerErrors.modelError} />

        <form className="needs-validation px-auto" noValidate onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="row">
            <div className="col-6">
              <label htmlFor="register-fname" className="form-label">
                First Name
              </label>
              <input
                id="register-fname"
                name="fname"
                className={`form-control ${styles.inputField} ${
                  registerErrors.fname ? "is-invalid" : ""
                }`}
                type="string"
                onChange={handleChange}
                value={registerValues.fname}
              ></input>
              {registerErrors.fname && (
                <div className="invalid-feedback">{registerErrors.fname}</div>
              )}
            </div>

            {/* Last Name */}
            <div className="col-6">
              <label htmlFor="register-lname" className="form-label">
                Last Name
              </label>
              <input
                id="register-lname"
                name="lname"
                className={`form-control ${styles.inputField} ${
                  registerErrors.lname ? "is-invalid" : ""
                }`}
                type="string"
                onChange={handleChange}
                value={registerValues.lname}
              ></input>
              {registerErrors.lname && (
                <div className="invalid-feedback">{registerErrors.lname}</div>
              )}
            </div>
          </div>

          {/* Username */}
          <div className="row">
            <div className="col">
              <label htmlFor="register-username" className="form-label">
                Username
              </label>
              <input
                id="register-username"
                name="username"
                className={`form-control ${styles.inputField} ${
                  registerErrors.username ? "is-invalid" : ""
                }`}
                type="string"
                onChange={handleChange}
                value={registerValues.username}
              ></input>
              {registerErrors.username && (
                <div className="invalid-feedback">{registerErrors.username}</div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="row">
            <div className="col">
              <label htmlFor="register-email" className="form-label">
                Email
              </label>
              <input
                id="register-email"
                name="email"
                className={`form-control ${styles.inputField} ${
                  registerErrors.email ? "is-invalid" : ""
                }`}
                type="email"
                onChange={handleChange}
                value={registerValues.email}
              ></input>
              {registerErrors.email && (
                <div className="invalid-feedback">{registerErrors.email}</div>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="register-password" className="form-label">
                Password
              </label>
              <input
                id="register-password"
                name="password"
                className={`form-control ${styles.inputField} ${
                  registerErrors.password ? "is-invalid" : ""
                }`}
                type="password"
                onChange={handleChange}
                value={registerValues.password}
              ></input>
              {registerErrors.password && (
                <div className="invalid-feedback">{registerErrors.password}</div>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="row mt-3">
            <div className="col">
              <label htmlFor="register-confirm-password" className="form-label">
                Confirm Password
              </label>
              <input
                id="register-confirm-password"
                name="confirmPassword"
                className={`form-control ${styles.inputField} ${
                  registerErrors.confirmPassword ? "is-invalid" : ""
                }`}
                type="password"
                onChange={handleChange}
                value={registerValues.confirmPassword}
              ></input>
              {registerErrors.confirmPassword && (
                <div className="invalid-feedback">{registerErrors.confirmPassword}</div>
              )}
            </div>
          </div>

          {/* Register Button */}
          <div className="row mt-4 pb-4 text-center mb-5">
            <div className="col">
              {loading ? (
                <div className="spinner-grow text-primary" role="status" />
              ) : (
                <>
                  <button
                    className={`btn float-end order-1 btn-outline-dark ${styles.primaryButton}`}
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                  <button
                    className={`btn order-0 btn-outline-dark ${styles.primaryButton}`}
                    onClick={() => history.push("/login")}
                  >
                    Back to Login
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </FormWrapper>
  );
}
