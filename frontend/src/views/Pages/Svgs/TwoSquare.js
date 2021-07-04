import React from 'react'
import "./Svgs.css"

export default function TwoSquare({text, colour}) {
    return (
        <div>
            <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9.47919" y="8.66669" width="14.2187" height="13" rx="2.16667" stroke={colour} strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.9583 8.66665V6.49998C18.9583 5.30336 17.8973 4.33331 16.5885 4.33331H7.10935C5.80055 4.33331 4.73956 5.30336 4.73956 6.49998V15.1666C4.73956 16.3633 5.80055 17.3333 7.10935 17.3333H9.47915" stroke={colour} strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {text}
        </div>
    )
}
