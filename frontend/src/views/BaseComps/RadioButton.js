import React from 'react'



export default function RadioButton({title}) {
    return (

        <div className="row">
            
            <div class="input-group">
                <div className="col-3"></div>
                <div className="col-1">{title}</div>
                <div className = "col-1">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                    </div>
                </div>
                <div className = "col-1">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                    </div>
                </div>
                <div className = "col-1">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                    </div>
                </div>
                <div className = "col-1">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

