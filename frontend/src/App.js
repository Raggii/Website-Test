import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import LandingPage from "./views/LandingPage";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";

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

        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
