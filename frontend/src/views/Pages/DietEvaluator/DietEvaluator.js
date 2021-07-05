import React from 'react'
import BottomTable from './BottomTable'
import Ingredients from './Ingredients'


export default function DietEvaluator() {
    return (
        <div className="boxContainer">  
            <div className="row">
                <div className="col-4">
                    <Ingredients></Ingredients>
                </div>
            </div>
            <div className="row">
                <div className="col-2">Space for buttons</div>
                <div className="col-10"><BottomTable></BottomTable></div>
            </div>
        </div>
    )
}

