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

//


export default function Dashboard() {

  
const [display, setDisplay] = useState(false);
// changes between the 5 different pages

const [page, setPage] = useState(0);


  return (
    <div id={display ? "wrapper" : "wrapper-menu-displayed"}>

        {/*Side bar stuff */}
        <div id="sidebar-wrapper">
           <ul className="sidebar-nav">
              <p><img src={logoImage} className="img-fluid" alt=""/> </p>
              <li><a onClick={() => setPage(0)} >Dashboard</a></li> {/*  this allows for changes between pages*/}
              <li><a onClick={() => setPage(1)} >Your Farm</a></li> {/* Change to have the images if u can*/}
              <li><a onClick={() => setPage(2)} >Diet Evaluator</a></li>
              <li><a onClick={() => setPage(3)} >Time Budget Tool</a></li>
              <li><a onClick={() => setPage(4)} >Milk Revenue</a></li>
              <li><a onClick={() => setPage(5)} >Place Order</a></li> 
           </ul>
        </div>

        {/*  main content */}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <p className="fs-1">Home Page</p>
                <a className="btn btn-success" id="menu-toggle" 
                onClick={() =>setDisplay(!display)}>Open Menu</a>
                <div>
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