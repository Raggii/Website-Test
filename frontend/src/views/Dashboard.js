//import {useState } from "react-router-dom";
import React, { useState } from 'react';
import logoImage from "./Logo2.png";
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
import "./Dashboard.css";
import PageOne from "./Pages/PageOne";
//import "https://cdn.syncfusion.com/ej2/material.css";


export default function Dashboard() {

  
const [display, setDisplay] = useState(false);

  return (
    <div id={display ? "wrapper" : "wrapper-menu-displayed"}>

        {/*Side bar stuff */}
        <div id="sidebar-wrapper">
           <ul className="sidebar-nav">
              <p><img src={logoImage} className="img-fluid" alt=""/> </p>
              <li><a href="/login"> Dashboard</a></li> {/*  this allows for changes between pages*/}
              <li><a href="">Page</a></li> {/* Change to have the images if u can*/}
              <li><a href="">Page</a></li>
              <li><a href="">Page</a></li>
              <li><a href="">Page</a></li>
              <li><a href="">Page</a></li>
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
                <PageOne></PageOne>

                {/* select a specific DATE  const dateVal = newdate and assign values from this CAN DO REMINDERS */}
              </div>
            </div>
          </div>
        </div>
    
    </div>

  );
}
