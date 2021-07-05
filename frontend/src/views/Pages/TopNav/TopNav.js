import React from "react";
import "../PagesCss/TopNav.css";
import Burger from "../../../assets/Burger.PNG";

export default function TopNav(props) {
  return (
    <nav className="navbar">
      <a id="menu-toggle" onClick={() => props.toggle()}>
        <div className="container-fluid">
          <button type="button" className="btn btn-dark">
            <img src={Burger} className="img-fluid" alt="" />
          </button>
        </div>
      </a>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}
