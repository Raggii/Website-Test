import React, { useEffect, useState } from "react";
//import { NavLink, Link } from "react-router-dom";
import LogoImage from "../../assets/Logo2.png";
import { NavLink, Link } from "react-router-dom";
import PageOne from './PageOne';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Styles from '../../styles/dashboardStyles/navBar.module.css'

//Make Button with inputs logo and name
const DashNav = () => {
    return (
        <>
            <div className={Styles.sideBox}>
                <Link to="/">
                <img
                    src={LogoImage}
                    alt="Chase Bovine Services "
                />
                </Link>
                <div>
                    <p>Button1</p>
                    <p>Button2</p>
                </div>
                
            </div>


        </>
    )
}

export default DashNav
