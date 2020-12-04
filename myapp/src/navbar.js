import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <section>
          <Link to="/">
            <img
              src="http://chasebovineservices.com/wp-content/uploads/2019/09/CBS-Logo.20190924-305x194.jpg"
              alt="Chase Bovine Services"
            />
          </Link>
          <p>Dairy Nutrition and Veterinary Consulting</p>
        </section>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me">About Me</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
