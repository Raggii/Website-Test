import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import LandingPage from "./views/LandingPage";
import Login from "./views/Pages/Login/Login";
import Dashboard from "./views/Dashboard";
import FirstPage from "./views/InitialInputs/FirstPage";
import SecondPage from "./views/InitialInputs/SecondPage";
import ThirdPage from "./views/InitialInputs/ThirdPage";
import ForthPage from "./views/InitialInputs/ForthPage";

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
        {/* CHANGE THIS TO SOMETHING NICER!!!!! */}
        <Route path="/DataCollect1">
          <FirstPage />
        </Route>

        <Route path="/DataCollect2">
          <SecondPage />
        </Route>

        <Route path="/DataCollect3">
          <ThirdPage />
        </Route>

        <Route path="/DataCollect4">
          <ForthPage />
        </Route>
        {/* PLEASE IT IS TO EASY TO GET TO */}

        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/Testing">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
