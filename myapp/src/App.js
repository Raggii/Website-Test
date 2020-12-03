import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";

import Navbar from "./navbar";
// pages
import Home from "./home";
import About from "./about-me";
import Contact from "./contact";
import Resources from "./resources";
import Error from "./Error"; // Error page

const App = () => {
  return (
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
        {/** Error site when the url doesn't match any known extensions*/}
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
