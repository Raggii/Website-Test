import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom";
import Styles from '../../styles/dashboardStyles/navBar.module.css'
import imageDefault from '../../../src/assets/placeholder-nav-link.svg'

const SideButton = ({name}) => {
        return (

            <div >
                <img src={imageDefault}></img>
                <Link className = {Styles.buttonSingle}> {name}</Link>
            </div>


        );
}

export default SideButton
