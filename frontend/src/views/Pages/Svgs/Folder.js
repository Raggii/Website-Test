import React from 'react'
import "./Svgs.css"
// RFC
export default function Folder({text, colour}) {
    return (
        <div>
            <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.13097 4.33331H11.0357L14.7143 7.58331H23.2976C24.652 7.58331 25.75 8.55336 25.75 9.74998V18.4166C25.75 19.6133 24.652 20.5833 23.2976 20.5833H6.13097C4.77656 20.5833 3.67859 19.6133 3.67859 18.4166V6.49998C3.67859 5.30336 4.77656 4.33331 6.13097 4.33331" stroke={colour} strokeWidth="1.625" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <span>{text}</span>
        </div>
    )
}
