import React from 'react'
import "../PagesCss/TopNav.css"


export default function TopNav(props) {
    return (
        
        <nav className="navbar">
            <a id="menu-toggle" onClick={() =>props.toggle()}>
               <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            </a>
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

