import React from 'react'

export default function Input({name}) {
    return (
        
        <>
            <p>{name}</p>
            <div class="input-group mb-3">
                
                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
        </>
    )
}
