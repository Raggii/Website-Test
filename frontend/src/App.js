import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Pages
import LandingPage from "./views/Pages/Landing/Landing";
import Login from "./views/Pages/Login/Login";
import Register from "./views/Pages/Register/Register";
import Dashboard from "./views/Dashboard";
import FirstPage from "./views/InitialInputs/FirstPage";
import SecondPage from "./views/InitialInputs/SecondPage";
import ThirdPage from "./views/InitialInputs/ThirdPage";
import ForthPage from "./views/InitialInputs/ForthPage";

// Auth libs
import Cookies from "js-cookie";

const authenticateUser = () => {
  const jwtCookie = Cookies.get("chronousTheThirdEyedMonster");

  if (jwtCookie) {
    return true;
  }
  // Failed to authenticate
  return false;
};

function PrivateRoute({ children, ...rest }) {
  const response = authenticateUser();

  return (
    <Route
      {...rest}
      render={() => {
        return response === true ? children : <Redirect to="/login" />;
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <PrivateRoute path="/register/:token">
          <Register />
        </PrivateRoute>

        {/* CHANGE THIS TO SOMETHING NICER!!!!! */}
        <PrivateRoute path="/DataCollect1">
          <FirstPage />
        </PrivateRoute>

        <PrivateRoute path="/DataCollect2">
          <SecondPage />
        </PrivateRoute>

        <PrivateRoute path="/DataCollect3">
          <ThirdPage />
        </PrivateRoute>

        <PrivateRoute path="/DataCollect4">
          <ForthPage />
        </PrivateRoute>
        {/* PLEASE IT IS TO EASY TO GET TO */}

        <PrivateRoute path="/Dashboard">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
