import React, { useEffect, useState } from "react";
//import { NavLink, Link } from "react-router-dom";
import LogoImage from "../../../public/assets/Logo2";
import { NavLink, Link } from "react-router-dom";
import PageOne from "./PageOne";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styles from "../../styles/dashboardStyles/navBar.module.css";
import SideButton from "./sideButton";

//Make Button with inputs logo and name
const Navbar = () => {
  return (
    <>
      <div className={Styles.sideBox}>
        <Link to="/">
          <img src={LogoImage} alt="Chase Bovine Services " />
        </Link>
        <div>
          <SideButton name="button1"></SideButton>
          <SideButton name="button2"></SideButton>
          <SideButton name="button3"></SideButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
