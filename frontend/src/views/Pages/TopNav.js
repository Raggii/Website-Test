import React from 'react'
import "./PagesCss/TopNav.css"


export default function TopNav(props) {
    return (
        
        <div>
            <nav class="navbar">
                <ul className="navbar-nav"> {props.children}</ul>
            </nav>
        </div>
    )
}

