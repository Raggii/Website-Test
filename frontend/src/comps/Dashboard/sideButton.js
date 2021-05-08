import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Styles from "../../styles/dashboardStyles/navBar.module.css";
import imageDefault from "../../../public/assets/placeholder-nav-link.svg";

const SideButton = ({ name }) => {
  return (
    <div>
      <Link className={Styles.buttonSingle}>
        <img src={imageDefault}></img>
        {name}
      </Link>
    </div>
  );
};

export default SideButton;
