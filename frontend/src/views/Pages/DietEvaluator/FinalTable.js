import React from 'react'
import DropBox from '../../BaseComps/DropBox'
import "./DietEvaluator.css"

function Input() {
    return (

            <input className="inputButton"></input>

    )
}


export default function FinalTable() {
    return (
        <div className="row removePadding" style={{}}>
            <div className="col-3" style={{maxWidth:"100%"}}>
                <Input></Input>
            </div>
            <div className="col-3" style={{maxWidth:"100%"}}>
                <Input></Input>
            </div>
            <div className="col-3" style={{maxWidth:"100%"}}>
                <DropBox></DropBox>
            </div>
            <div className="col-3" style={{maxWidth:"100%"}}>
                <Input></Input>
            </div>
        </div>
    )
}
