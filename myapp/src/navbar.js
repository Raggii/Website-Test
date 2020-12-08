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
            <NavLink exact to="/" activeclass="active-nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-me" activeclass="active-nav-link">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" activeclass="active-nav-link">
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeclass="active-nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
