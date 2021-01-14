import React from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    <>
      <div className={styles.nav_wrapper}>
        <nav>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img
                className={styles.logo_image}
                src="http://chasebovineservices.com/wp-content/uploads/2019/09/CBS-Logo.20190924-305x194.jpg"
                alt="Chase Bovine Services"
              />
            </Link>
            <p className={styles.logo_description}>
              Dairy Nutrition and Veterinary Consulting
            </p>
          </div>

          <ul className={styles.nav_links}>
            <NavbarLinkItem to="/">Home</NavbarLinkItem>
            <NavbarLinkItem to="/about-me">About me</NavbarLinkItem>
            <NavbarLinkItem to="/resources">Resources</NavbarLinkItem>
            <NavbarLinkItem to="/contact">Contact</NavbarLinkItem>
            <NavbarLinkItem to="/login">Login</NavbarLinkItem>
          </ul>
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
