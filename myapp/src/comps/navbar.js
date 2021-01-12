import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.nav_wrapper}>
        <nav>
          {/* <section className="item"> */}
          <div className={styles.logoContainer}>
            <Link to="/">
              <img
                src="http://chasebovineservices.com/wp-content/uploads/2019/09/CBS-Logo.20190924-305x194.jpg"
                alt="Chase Bovine Services"
              />
            </Link>
            <p style={{ margin: "0" }}>
              Dairy Nutrition and Veterinary Consulting
            </p>
          </div>

          <ul className={styles.nav_links}>
            <NavbarLinkItem to="/">Home</NavbarLinkItem>
            <NavbarLinkItem to="/about-me">About Me</NavbarLinkItem>
            <NavbarLinkItem to="/resources">Resources</NavbarLinkItem>
            <NavbarLinkItem to="/contact">Contact</NavbarLinkItem>
            <NavbarLinkItem to="/login">Login</NavbarLinkItem>
            {/* <NavbarLinkItem to="/login">Login</NavbarLinkItem> */}
          </ul>
          {/* </section> */}
        </nav>
      </div>
    </>
  );
}

export default Navbar;

const NavbarLinkItem = ({ to, children }) => {
  return (
    <li>
      <NavLink
        exact
        to={to}
        activeClassName={styles.active_nav_link}
        className={styles.nav_link}
      >
        {children}
      </NavLink>
    </li>
  );
};
