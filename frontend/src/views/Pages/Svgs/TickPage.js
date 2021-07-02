import React from 'react'
import "./Svgs.css"
// RFC
export default function TickPage({text, colour}) {
    return (
        <div>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.75002 5.41669H7.58335C6.38674 5.41669 5.41669 6.38674 5.41669 7.58335V20.5834C5.41669 21.78 6.38674 22.75 7.58335 22.75H18.4167C19.6133 22.75 20.5834 21.78 20.5834 20.5834V7.58335C20.5834 6.38674 19.6133 5.41669 18.4167 5.41669H16.25" stroke={colour} stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="9.75" y="3.25" width="6.5" height="4.33333" rx="2.16667" stroke={colour} stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.75 15.1667L11.9167 17.3333L16.25 13" stroke={colour} stroke-width="1.625" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {text}
        </div>
    )
}
