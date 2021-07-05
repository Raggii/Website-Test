//import {useState } from "react-router-dom";
import React, { useState } from "react";
import logoImage from "../assets/Logo1.png";
import "./Dashboard.css";
import DashboardMain from "./Pages/DashboardMain/DashboardMain";
import DietEvaluator from "./Pages/DietEvaluator";
import MilkRevenue from "./Pages/MilkRevenue/MilkRevenue";
import TimeBudgetTool from "./Pages/TimeBudgetTool/TimeBudgetTool";
import YourFarm from "./Pages/YourFarm/YourFarm";
import PlaceOrder from "./Pages/Place Order/PlaceOrder";
import TopNav from "./Pages/TopNav/TopNav";
import NavItem from "./Pages/TopNav/NavItem";
import AddUser from "./Pages/AddUser/AddUser";

import Pulse from "./Pages/Svgs/Pulse";
import TickPage from "./Pages/Svgs/TickPage";
import Folder from "./Pages/Svgs/Folder";
import TwoSquare from "./Pages/Svgs/TwoSquare";
import Letter from "./Pages/Svgs/Letter";
import CogWheel from "./Pages/Svgs/CogWheel";
import Person from "./Pages/Svgs/Person";
import { getCookieData } from "../helpers/jwtHelper";

//
export default function Dashboard() {
  const [display, setDisplay] = useState(false);
  const userData = getCookieData();

  const toggleNav = () => {
    setDisplay(!display);
  };
  const [page, setPage] = useState(0);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const { height, widthScreen } = getWindowDimensions();

  return (
    <div id={display ? "wrapper-menu-disabled" : "wrapper-menu-displayed"}>
      {/*Side bar stuff */}
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <p>
            <img src={logoImage} className="img-fluid" alt="" />{" "}
          </p>
          <li>
            <a onClick={() => setPage(0)}>
              <Pulse text="Dashboard" colour="#C7C0FB"></Pulse>
            </a>
          </li>
          <li>
            <a onClick={() => setPage(1)}>
              <TwoSquare text="Your Farm" colour="#C7C0FB"></TwoSquare>
            </a>
          </li>
          <li>
            <a onClick={() => setPage(2)}>
              <TickPage text="Diet Evaluator" colour="#C7C0FB"></TickPage>
            </a>
          </li>
          <li>
            <a onClick={() => setPage(3)}>
              <Folder text="Time Budget Tool" colour="#C7C0FB"></Folder>
            </a>
          </li>
          <li>
            <a onClick={() => setPage(4)}>
              <TwoSquare text="Milk Revenue" colour="#C7C0FB"></TwoSquare>
            </a>
          </li>

          {userData.role === 0 || userData.role === 1 ? (
            <li>
              <a onClick={() => setPage(6)}>
                <Person text="Add User" colour="#C7C0FB"></Person>
              </a>
            </li>
          ) : (
            <li>
              <a onClick={() => setPage(5)}>
                <Letter text="Place Order" colour="#C7C0FB"></Letter>
              </a>
            </li>
          )}
        </ul>
      </div>

      <div id="top-nav">
        <TopNav toggle={toggleNav}>
          <NavItem>{CogWheel}</NavItem>
          <NavItem icon="DAn"></NavItem>
          <NavItem icon="Kwl"></NavItem>
        </TopNav>
      </div>

      {/*  main content */}
      <div id="page-content-wrapper">
        <div className="container-fluid ms-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="fs-5">
                {page === 0 ? (
                  <h3>
                    <Pulse text="Dashboard" colour="#000000"></Pulse>
                  </h3>
                ) : page === 1 ? (
                  <h3>
                    <TwoSquare text="Your Farm" colour="#000000"></TwoSquare>
                  </h3>
                ) : page === 2 ? (
                  <h3>
                    <TickPage text="Diet Evaluator" colour="#000000"></TickPage>
                  </h3>
                ) : page === 3 ? (
                  <h3>
                    <Folder text="Time Budget Tool" colour="#000000"></Folder>
                  </h3>
                ) : page === 4 ? (
                  <h3>
                    <TwoSquare text="Milk Revenue" colour="#000000"></TwoSquare>
                  </h3>
                ) : page === 5 ? (
                  <h3>
                    <Letter text="Place Order" colour="#000000"></Letter>
                  </h3>
                ) : page > 6 ? null : page < 0 ? null : null}
              </div>

              <div id="mainPages">
                {page === 0 ? (
                  <DashboardMain></DashboardMain>
                ) : page === 1 ? (
                  <YourFarm></YourFarm>
                ) : page === 2 ? (
                  <DietEvaluator></DietEvaluator>
                ) : page === 3 ? (
                  <TimeBudgetTool></TimeBudgetTool>
                ) : page === 4 ? (
                  <MilkRevenue></MilkRevenue>
                ) : page === 5 ? (
                  <PlaceOrder></PlaceOrder>
                ) : page === 6 ? (
                  <AddUser></AddUser>
                ) : page > 6 ? null : page < 0 ? null : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
