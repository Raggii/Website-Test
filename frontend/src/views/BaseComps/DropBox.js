import React, { Component } from 'react'

//import  "bootstrap.bundle.min.js"

export default function DropBox({title,opt1,opt2,opt3}) {
    return (
        <>
            <div>
                <span>{title}</span>
                <div>

                    <select  style={{width: "100%",borderColor: "#ced4da",padding: "7px"}}>
                        <option value="">Select an Option</option>
                        <option value="Male">{opt1}</option>
                        <option value="Female">{opt2}</option>
                        <option value="Other">{opt3}</option>
                    </select>
                    <div className="dropdown-menu">
                        <div class="inner show">
                            <ul className="dropdown-menu inner show">
                                <li><a className="dropdown-item">
                                    <span >{opt1}</span></a>
                                </li>
                                <li><a className="dropdown-item" >
                                    <span >{opt2}</span></a>
                                </li>
                                <li><a className="dropdown-item" >
                                    <span >{opt3}</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* If Error Comes up display it below */}
                <label></label>
            </div>


        </>    
        )
}
