import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img
            src="http://chasebovineservices.com/wp-content/uploads/2019/09/CBS-Logo.20190924-305x194.jpg"
            alt="Chase Bovine Services"
          />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
