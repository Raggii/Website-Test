import React from 'react'
import Input from '../BaseComps/Input'
import DropBox from '../BaseComps/DropBox'


export default function SecondPage() {
    return (
        <>
            <div class="row">
                <div class="col-5"></div>
                <h2 class="col-4">
                    {"       Animal Summary"}
                </h2>       
            </div>
            <div>
                <div class="row">
                    <div class="col-4"></div>
                    <div className="col-2">
                        <DropBox title = "Body Weight (kgs)" opt1="" opt2="" opt3=""></DropBox>
                    </div>
                    <div className="col-2">
                        <Input name = "Week of Lactation"></Input>
                    </div>

                    {/* Week of Lactation */}
                    
                </div>

                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4"><Input name = "kgs Ms/cow/d"></Input></div>
                </div>
                {/* kgs Ms/cow/d */}
                
                 <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <Input name = "Dmi kgs/cow/d:"></Input>
                    </div>
                </div>

                {/* Dmi kgs/cow/d: */}
                

                 <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <Input name = "Days carried Calf"></Input>
                    </div>
                </div>
                {/* Days carried Calf */}
                

                 <div class="row">
                    <div class="col-4"></div>
                    <div class="col-2">
                        <Input name = "Adg kgs/cow/d:"></Input>
                    </div>
                    <div class="col-2">
                        <DropBox title = "Terrain" opt1="Action" opt2="" opt3=""></DropBox>
                    </div>
                </div>
                {/* Adg kgs/cow/d: */}
                
                
                 <div class="row">
                    <div class="col-4"></div>
                    <div class="col-2">
                        <Input name = "Distance to shed (km)"></Input>
                    </div>
                    <div class="col-2">
                        <DropBox title = "Number of Milkings" opt1="Action" opt2="Another action" opt3="Something else here"></DropBox>
                    </div>
                </div>

                

                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-1">
                        <a type="button" class="btn btn-danger">Cancel</a>
                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-secondary">Default</a>
                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-secondary" href="/DataCollect1">Back</a>
                    </div>  
                    <div class="col-1">
                        <a type="button" class="btn btn-primary" href="/DataCollect3">Continue</a>
                    </div>
                </div>


            </div>
        </>
    )
}
