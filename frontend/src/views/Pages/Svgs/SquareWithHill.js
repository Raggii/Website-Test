import React from 'react'
import "./Svgs.css"

export default function SquareWithHill({text, colour}) {
    return (
        <div>
            <svg  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="14" height="14" rx="1.55556" stroke={colour} strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="5.27778" cy="5.27778" r="1.16667" stroke={colour} strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 10.3333L11.1111 6.44446L2.55554 15" stroke={colour} strokeWidth="1.55556" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {text}
        </div>
    )
}
