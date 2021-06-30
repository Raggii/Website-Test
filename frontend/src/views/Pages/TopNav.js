import React from 'react'
import { useState } from 'react'
import "./PagesCss/TopNav.css"


export default function TopNav(props) {
    return (
        
        <nav className="navbar">
            <a className="btn btn-success" id="menu-toggle" 
                onClick={() =>props.toggle()}>Open Menu</a>
            <ul ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

