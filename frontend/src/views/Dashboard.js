//import {useState } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import logoImage from "./Logo2.png";
import "./Dashboard.css";
import DashboardMain  from "./Pages/DashboardMain";
import DietEvaluator from './Pages/DietEvaluator';
import MilkRevenue from './Pages/MilkRevenue';
import TimeBudgetTool from './Pages/TimeBudgetTool';
import YourFarm from './Pages/YourFarm/YourFarm';
import PlaceOrder from './Pages/PlaceOrder';
import TopNav from './Pages/TopNav/TopNav';
import NavItem from './Pages/TopNav/NavItem';
import Pulse from './Pages/Svgs/Pulse';
import SquareWithHill from './Pages/Svgs/SquareWithHill';
import TickPage from './Pages/Svgs/TickPage';
import Folder from './Pages/Svgs/Folder';
import TwoSquare from './Pages/Svgs/TwoSquare';
import Letter from './Pages/Svgs/Letter';

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
              <li><a onClick={() => setPage(0)}><div><Pulse text="Dashboard" colour="#ffffff"></Pulse> </div></a></li>
              <li><a onClick={() => setPage(1)} ><TwoSquare text="Your Farm" colour="#ffffff"></TwoSquare></a></li>
              <li><a onClick={() => setPage(2)} ><TickPage text="Diet Evaluator" colour="#ffffff"></TickPage></a></li>
              <li><a onClick={() => setPage(3)} ><Folder text="Time Budget Tool" colour="#ffffff"></Folder></a></li>
              <li><a onClick={() => setPage(4)} ><TwoSquare text="Milk Revenue" colour="#ffffff"></TwoSquare></a></li>
              <li><a onClick={() => setPage(5)} ><Letter text="Place Order" colour="#ffffff"></Letter></a></li> 
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
                <p className="fs-5">{page === 0 ? 
                    <Pulse text="Dashboard" colour="#000000"></Pulse>: 
                  page === 1 ?
                    <TwoSquare text="Your Farm" colour="#000000"></TwoSquare> :
                   page === 2 ?
                   <TickPage text="Diet Evaluator" colour="#000000"></TickPage> :
                  page === 3 ?
                    <Folder text="Time Budget Tool" colour="#000000"></Folder>:
                  page === 4 ?
                    <TwoSquare text="Milk Revenue" colour="#000000"></TwoSquare> :
                  page === 5 ?
                    <Letter text="Place Order" colour="#000000"></Letter> :  
                  page > 5 ? 
                    null : 
                  page < 0 ? null : null}</p>
                
                <div id="line">
                  <svg width= {widthScreen} >
                    <rect width={widthScreen} />
                    Sorry, your browser does not support inline SVG.  
                  </svg>
                </div>


                <div id="mainPages">
                  {page === 0 ? 
                    <DashboardMain></DashboardMain>: 
                  page === 1 ?
                    <YourFarm></YourFarm> :
                   page === 2 ?
                    <DietEvaluator></DietEvaluator> :
                  page === 3 ?
                    <TimeBudgetTool></TimeBudgetTool> :
                  page === 4 ?
                    <MilkRevenue></MilkRevenue> :
                  page === 5 ?
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