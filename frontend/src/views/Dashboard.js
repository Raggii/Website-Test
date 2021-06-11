import { Link } from "react-router-dom";
import logoImage from "./Logo2.png";
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
//import {PageOne} from "./PageOne"; -- how to import files
// import "https://cdn.syncfusion.com/ej2/material.css" ; -- idk why this doesnt work lol

export default function Dashboard() {
  return (
    <div id="wrapper">
        <div id="sidebar">
           <ul className="sidebar-nav">
              <li><a href="/login"> account</a></li> {/*  this allows for changes between pages*/}
              <li><a href="#"> Page1</a></li>
              <li><a href="#"> pagw2</a></li>

           </ul>
        </div>
        {/* this can have the 5 or 6 different pages as individual stuff */}
        <div id="page-content-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <a href="#" className="btn btn-sucess" id="menu-toggle">toggle menu</a>
                <h1>sidebar layours are cool</h1>
                <p>
                  d as d as dasdasd wqew qwee qeq weqweq weqwe qweqe qweqwe qw eqwe qweqeqweqwe qweq weqw 
                   qweqw eqwe qwe qwe qweqw eqweqweqewqwe qwe qeq weqw qwe qwe qwe qweqwe qweqw rqw qweqw
                   qweqw eqwe qwe qwe qweqw eqweqweqewqwe qwe qeq weqw qwe qwe qwe qweqwe qweqw rqw qweqw
                </p>
                <CalendarComponent></CalendarComponent> {/*ITS A FREAKING CALENDER*/}
                {/* <PageOne></PageOne> * HOW DO THIS/}

                {/* select a specific DATE  const dateVal = newdate and assign values from this CAN DO REMINDERS */}
              </div>
            </div>
          </div>
        </div>
    
    </div>

  );
}
