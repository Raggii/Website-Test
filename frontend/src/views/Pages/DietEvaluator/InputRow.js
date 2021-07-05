import React from 'react'

function Input() {
    return (
        
        <>
            <div class="">                
                <input type="text" class="form-control"/>
            </div>
        </>
    )
}

export default function InputRow() {
    return (
        
        <div className="row removePadding">
            <div className="col-2">
                <Input></Input>
            </div>
            <div className="col-2">
                <Input></Input>
            </div>
            <div className="col-2">
                <Input></Input>
            </div>
            <div className="col-2">
                <Input></Input>
            </div>
        </div>
    )
}