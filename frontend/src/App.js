import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/index.css";

// base app stuff
import Navbar from "./comps/navbar";
import Home from "./routes/home";
import About from "./routes/about-me";
import Contact from "./routes/contact";
import Resources from "./routes/resources";
import Error from "./routes/Error"; // Error page
import Login from "./routes/login";

// Dashboard stuff
import Dashboard from "./src/comps/Dashboard/layouts/Admin";
import DashboardCalender from "./comps/Dashboard/PageOne";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/">
          <BaseApp></BaseApp>
        </Route>
      </Switch>
    </Router>
  );
};


const BaseApp = () => {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about-me">
            <About />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/** Error site when the url doesn't match any known extensions*/}
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
