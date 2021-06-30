import React from 'react'

export default function Input({name, isText}) {
    return (
        
        
        <div class="input-group mb-3">
            { isText == false ? null :<span class="input-group-text" id="inputGroup-sizing-default">{name}</span>}
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
    )
}
