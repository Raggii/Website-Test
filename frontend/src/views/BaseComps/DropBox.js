import React, { Component } from 'react'
//import  "bootstrap.bundle.min.js"

export default function DropBox({title,opt1,opt2,opt3}) {
    return (
        <>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {title}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">{opt1}</a></li>
                    <li><a class="dropdown-item" href="#">{opt2}</a></li>
                    <li><a class="dropdown-item" href="#">{opt3}</a></li>
                </ul>
                </div>
            </>
        )
}
