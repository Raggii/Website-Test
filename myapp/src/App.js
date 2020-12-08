import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";

import Navbar from "./comps/navbar";
// pages
import Home from "./routes/home";
import About from "./routes/about-me";
import Contact from "./routes/contact";
import Resources from "./resources";
import Error from "./routes/Error"; // Error page

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
