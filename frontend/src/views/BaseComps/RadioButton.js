import React, {useState}from 'react'



export default function RadioButton({title}) {

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [forth, setForth] = useState(false);

    return (

        <div className="row">
            
            <div class="input-group">

                <div className="col-4 text-center">{title}</div>
                <div className = "col-2 text-center">
                    <div class="input-group-text d-flex justify-content-center">
                        <input class="form-check-input mt-0" type="radio" value="" />
                    </div>
                </div>
                <div className = "col-2">
                    <div class="input-group-text d-flex justify-content-center">
                        <input class="form-check-input mt-0" type="radio" value="" />
                    </div>
                </div>
                <div className = "col-2">
                    <div class="input-group-text d-flex justify-content-center">
                        <input class="form-check-input mt-0" type="radio" value="" />
                    </div>
                </div>
                <div className = "col-2">
                    <div class="input-group-text d-flex justify-content-center">
                        <input class="form-check-input mt-0" type="radio" value="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

