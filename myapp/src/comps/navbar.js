import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import styles from "../styles/navbar.module.css";

function Navbar() {
  const [showMenu, setshowMenu] = useState(false);

  const handleBurgerClick = () => {
    setshowMenu(!showMenu);
  };

  return (
    <>
      <div className={styles.navWrapper}>
        <nav>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img
                className={styles.logoImage}
                src="http://chasebovineservices.com/wp-content/uploads/2019/09/CBS-Logo.20190924-305x194.jpg"
                alt="Chase Bovine Services"
              />
            </Link>
            <p className={styles.logoDescription}>
              Dairy Nutrition and Veterinary Consulting
            </p>
          </div>
          <span className={styles.burgerIcon} onClick={handleBurgerClick}>
            {showMenu ? "X" : "☰"}
          </span>
          <ul className={styles.navLinks}>
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

const NavbarLinkItem = ({ to, children }) => {
  return (
    <li>
      <NavLink
        exact
        to={to}
        activeClassName={styles.activeNavLink}
        className={styles.navLink}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
