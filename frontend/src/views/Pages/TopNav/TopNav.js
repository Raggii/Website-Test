import React from 'react'
import "../PagesCss/TopNav.css"


export default function TopNav(props) {
    return (
        
        <nav className="navbar">
            <a id="menu-toggle" onClick={() =>props.toggle()}>
               <div className="container-fluid">
                <button className="buttonSide"> </button>
            </div>
            </a>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

