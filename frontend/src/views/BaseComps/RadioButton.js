import React, {useState}from 'react'



export default function RadioButton({title}) {

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [forth, setForth] = useState(false);

    const firstClick = () => {
        setFirst(true);
        setSecond(false);
        setThird(false);
        setForth(false);

    }
    const secondClick = () => {
        setFirst(false);
        setSecond(true);
        setThird(false);
        setForth(false);

    }
    const thirdClick = () => {
        setFirst(false);
        setSecond(false);
        setThird(true);
        setForth(false);

    }
    const forthClick = () => {
        setFirst(false);
        setSecond(false);
        setThird(false);
        setForth(true);

    }

    return (

        <div className="row">
            
            <div class="input-group">

                <div className="col-4 text-center">{title}</div>
                <div className = "col-2 text-center">
                    <div class="input-group-text d-flex justify-content-center">
                        <input onClick={firstClick} class="form-check-input mt-0" type="radio" checked={first} value="" />
                    </div>
                </div>
                <div className = "col-2">
                    <div class="input-group-text d-flex justify-content-center">
                        <input onClick={secondClick} class="form-check-input mt-0" checked={second}type="radio" value="" />
                    </div>
                </div>
                <div className = "col-2">
                    <div class="input-group-text d-flex justify-content-center">
                        <input onClick={thirdClick} class="form-check-input mt-0" checked={third}type="radio" value="" />
                    </div>
                </div>
                <div className = "col-2">
                    <div class="input-group-text d-flex justify-content-center">
                        <input onClick={forthClick}class="form-check-input mt-0" checked={forth}type="radio" value="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

