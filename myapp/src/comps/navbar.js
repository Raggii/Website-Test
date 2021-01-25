import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import LogoImage from "../assets/CBS_Logo_20190924_305x194.jpg";
import styles from "../styles/navbar.module.css";

export const HAMBURGER_WIDTH_THRESHOLD_PX = 921;

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthWindow = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidthWindow);
    return () => window.removeEventListener("resize", updateWidthWindow);
  });

  useEffect(() => {
    setIsHamburgerMenu(width <= HAMBURGER_WIDTH_THRESHOLD_PX);
  }, [width]);

  return (
    <>
      <div className={styles.nav_wrapper}>
        <nav>
          <div className={styles.logoContainer}>
            <Link to="/">
              <img
                className={styles.logo_image}
                src={LogoImage}
                alt="Chase Bovine Services"
              />
            </Link>
            <p className={styles.logo_description}>
              Dairy Nutrition and Veterinary Consulting
            </p>
          </div>
          <div>
            {isHamburgerMenu ? <h1>MENU</h1> : <></>}
            <ul className={styles.nav_links}>
              <NavbarLinkItem to="/">Home</NavbarLinkItem>
              <NavbarLinkItem to="/about-me">About me</NavbarLinkItem>
              <NavbarLinkItem to="/resources">Resources</NavbarLinkItem>
              <NavbarLinkItem to="/contact">Contact</NavbarLinkItem>
              <NavbarLinkItem to="/login">Login</NavbarLinkItem>
            </ul>
          </div>
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
        activeClassName={styles.active_nav_link}
        className={styles.nav_link}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Navbar;
