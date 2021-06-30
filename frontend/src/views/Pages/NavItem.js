import React from 'react'
import "./PagesCss/TopNav.css"


export default function NavItem(props) {
    return (
        <li>
            <a herf="#" className="icon-button">
                {props.icon}
            </a>
        </li>
    )
}
