import React from 'react'


export default function FirstPage() {
    return (
        <>
        {/* Gotta add styling alittle here */}
        {/* a title thingo and make it not shit */}
            <div>
                {/* Consultant */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Consultant</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Contact Details  Email*/}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Contact Details Email</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Farm Name */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Farm Name</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Herd Size */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Herd Size</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Milk Yield (kg MS/c/yr) */}
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Milk Yield (kg MS/c/yr)</span>
                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                {/* Two together */}
                <div class="row">
                    <div class="col-6">
                        {/* Fat % */}
                        <div class="input-group mb-3">
                            <span span class="input-group-text" id="inputGroup-sizing-default">Fat %</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>
                    
                    </div>
                    <div class="col-6">
                        {/* Prot % */}
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">Prot %</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                        </div>

                    </div>
                </div>

                {/* Three Drop Boxes */}
                
                {/* Production Phase */}
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Production Phase
                    </button>
                    {/* The drop Down Options */}
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                {/* Predominat Breed */}
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Predominat Breed
                    </button>
                    {/* The drop Down Options */}
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div class="row">
                    <div class="col-6">
                        {/* Production Site: % */}
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Production Site: %
                            </button>
                            {/* The drop Down Options */}
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    
                    </div>
                    <div class="col-6">
                        {/* RANDOM THINGO WHAT IS THIS? % */}
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default">RANDOM THINGO WHAT IS THIS?</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                      </div>

                    </div>
                </div>


                <div class="row">
                    <div class="col-4">
                        <a type="button" class="btn btn-danger">Cancel</a>
                    </div>
                    <div class="col-4">
                        <a type="button" class="btn btn-primary" href="/DataCollect2">Continue</a>
                    </div>
                </div>

                
            </div>

        </>
    )
}
