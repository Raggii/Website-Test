import React, { useEffect, useState } from "react";
//import { NavLink, Link } from "react-router-dom";
import LogoImage from "../../assets/Logo2.png";
import { NavLink, Link } from "react-router-dom";
import PageOne from './PageOne';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//Make Button with inputs logo and name
const DashNav = () => {
    return (
        <>
            <div>
                <Link to="/">
                <img
                    src={LogoImage}
                    alt="Chase Bovine Services"
                />
                </Link>
                
            </div>
            <svg viewBox="0 0 307 500" 
            xmlns="http://www.w3.org/2000/svg">

            <rect width="100" height="100" />
            </svg>

        </>
    )
}

export default DashNav
