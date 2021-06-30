import React from 'react'
import "./PagesCss/TopNav.css"


export default function TopNav(props) {
    return (
        
        <nav className="navbar">
            <ul ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

