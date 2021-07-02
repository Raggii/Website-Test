import React from 'react'
import "./Svgs.css"

export default function Letter({text, colour}) {
    return (
        <div>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3.25" y="5.41666" width="19.5" height="15.1667" rx="2.16667" stroke={colour} stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.25 7.58334L13 14.0833L22.75 7.58334" stroke={colour} stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {text}
        </div>
    )
}
