//import {useState } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import logoImage from "./Logo2.png";
import "./Dashboard.css";
import DashboardMain  from "./Pages/DashboardMain";
import DietEvaluator from './Pages/DietEvaluator';
import MilkRevenue from './Pages/MilkRevenue';
import TimeBudgetTool from './Pages/TimeBudgetTool';
import YourFarm from './Pages/YourFarm';
import PlaceOrder from './Pages/PlaceOrder';
import TopNav from './Pages/TopNav/TopNav';
import NavItem from './Pages/TopNav/NavItem';
import Pulse from './Pages/Svgs/Pulse';
import SquareWithHill from './Pages/Svgs/SquareWithHill';
import TickPage from './Pages/Svgs/TickPage';
import Folder from './Pages/Svgs/Folder';
import TwoSquare from './Pages/Svgs/TwoSquare';

//


export default function Dashboard() {

const [display, setDisplay] = useState(false);

const toggleNav = () => {
  setDisplay(!display)
}

const [page, setPage] = useState(0);

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}


const { height, widthScreen } = getWindowDimensions();



  return (
    <div id={display ? "wrapper-menu-disabled" : "wrapper-menu-displayed"}>

        {/*Side bar stuff */}
        <div id="sidebar-wrapper">
           <ul className="sidebar-nav">
              <p><img src={logoImage} className="img-fluid" alt=""/> </p>
              <li> <a onClick={() => setPage(0)}><div>
                <Pulse text="Dashboard"></Pulse> 
                </div>
                </a></li>
              <li><a onClick={() => setPage(1)} ><SquareWithHill text="Your Farm"></SquareWithHill></a></li>
              <li><a onClick={() => setPage(2)} >Diet Evaluator</a></li>
              <li><a onClick={() => setPage(3)} >Time Budget Tool</a></li>
              <li><a onClick={() => setPage(4)} >Milk Revenue</a></li>
              <li><a onClick={() => setPage(5)} >Place Order</a></li> 
           </ul>
        </div>

        
        <div  id="top-nav">
          <TopNav toggle = {toggleNav}>
            <NavItem icon="Yes"></NavItem>
            <NavItem icon="DAn"></NavItem>
            <NavItem icon="Kwl"></NavItem>
          </TopNav>
        </div>
        


        {/*  main content */}
        <div id="page-content-wrapper">
          <div className="container-fluid ms-0" >
            <div className="row">
              <div className="col-lg-12">
                <p className="fs-1">Home Page</p>
                
                <div id="line">
                  <svg width= {widthScreen} >
                    <rect width={widthScreen} />
                    Sorry, your browser does not support inline SVG.  
                  </svg>
                </div>


                <div id="mainPages">
                  {page == 0 ? 
                    <DashboardMain></DashboardMain>: 
                  page == 1 ?
                    <YourFarm></YourFarm> :
                   page == 2 ?
                    <DietEvaluator></DietEvaluator> :
                  page == 3 ?
                    <TimeBudgetTool></TimeBudgetTool> :
                  page == 4 ?
                    <MilkRevenue></MilkRevenue> :
                  page == 5 ?
                    <PlaceOrder></PlaceOrder> :  
                  page > 5 ? 
                    null : 
                  page < 0 ? null : null}
                </div>

              </div>
            </div>
          </div>
        </div>
    
    </div>

  );

}