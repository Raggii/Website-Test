import React from 'react'


export default function SecondPage() {
    return (
        <>
            <div>
                <h2>
                    Animal Summary
                </h2>


            </div>

            <div>
                {/* Body Weight (kgs) */}
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Body Weight (kgs)
                    </button>
                    {/* The drop Down Options */}
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                {/* Week of Lactation */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Week of Lactation</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* kgs Ms/cow/d */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">kgs Ms/cow/d</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Dmi kgs/cow/d: */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Dmi kgs/cow/d:</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Days carried Calf */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Days carried Calf</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Adg kgs/cow/d: */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Adg kgs/cow/d:</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Terrain */}
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Terrain
                    </button>
                    {/* The drop Down Options */}
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                
                {/* Distance to shed (km) */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Distance to shed (km)</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Number of Milkings */}
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Number of Milkings
                    </button>
                    {/* The drop Down Options */}
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div class="row">
                    <div class="col-3">
                        <a type="button" class="btn btn-danger">Cancel</a>
                    </div>
                    <div class="col-3">
                        <a type="button" class="btn btn-secondary">Default</a>
                    </div>
                    <div class="col-3">
                        <a type="button" class="btn btn-secondary" href="/DataCollect1">Back</a>
                    </div>  
                    <div class="col-3">
                        <a type="button" class="btn btn-primary" href="/DataCollect3">Continue</a>
                    </div>
                </div>


            </div>
        </>
    )
}
