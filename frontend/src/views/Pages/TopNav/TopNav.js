import React from 'react'
import "../PagesCss/TopNav.css"


export default function TopNav(props) {
    return (
        
        <nav className="navbar">
            <a id="menu-toggle" onClick={() =>props.toggle()}>
               <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            </a>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

