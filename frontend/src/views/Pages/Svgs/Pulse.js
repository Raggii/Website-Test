import React from 'react'
import "./Svgs.css"

export default function Pulse({text, colour}) {
    return (
        <div>
            <svg  width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.8529 13H20.119L16.5686 21.6667L11.8347 4.33334L8.28431 13H3.55042" stroke={colour} strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
            
            </svg>
            {text}
        </div>
    )
}
