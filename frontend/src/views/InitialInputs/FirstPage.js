import React from 'react'
import Input from '../BaseComps/Input'
import DropBox from '../BaseComps/DropBox'


export default function FirstPage() {
    return (
        <>
        <div class="row">
            <div class="col-4"></div>
            <h2 class="col-4">
                {"       CHASE BOVINE SERVICES PAGE 1"}
            </h2>       
        </div>
        {/* Gotta add styling alittle here */}
        {/* a title thingo and make it not shit */}
            <div>
                <div class="row">
                    {/* Consultant */}
                    <div class="col-4"></div>
                    <div class="col-4">
                        <Input name = "Consultant"></Input>
                    </div>       
                </div>
                    
                <div class="row">
                    {/* Contact Details  Email*/}
                    <div class="col-4"></div>
                    <div class="col-4">
                        <Input name = "Contact Email"></Input>
                    </div>
                </div>
                <div class="row">
                    {/* Farm Name */}
                    <div class="col-4"></div>
                    <div class="col-4">
                        <Input name = "Farm Name"></Input>
                    </div>
                </div>
                
                <div class="row">
                    {/* Herd Size */}
                    <div class="col-4"></div>
                    <div class="col-2">
                        <Input name = "Herd Size"></Input>

                    </div>
                    <div class="col-2">
                        {/* Milk Yield (kg MS/c/yr) */}
                        <Input name = "Milk Yield (kg MS/c/yr)"></Input>

                    </div>
                </div>

                {/* Two together */}
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-2">
                        {/* Fat % */}
                        <Input name = "Fat Percentage"></Input>                    
                    </div>
                    <div class="col-2">
                        {/* Prot % */}
                        <Input name = "Prot Percentage"></Input>
                    </div>
                </div>


                {/* Three Drop Boxes */}
                
                 <div class="row">
                    <div class="col-4"></div>
                    <div class="col-2">
                        {/* Fat % */}
                        <DropBox title = "Producition Phase" opt1="" opt2="" opt3=""></DropBox>                    
                    </div>
                    <div class="col-2">
                        {/* Prot % */}
                        <DropBox title = "Predmoninat Breed" opt1="" opt2="" opt3=""></DropBox>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4"> </div>
                    <div class="col-2">
                        {/* Prot % */}
                        <DropBox title = "Production Site" opt1="" opt2="" opt3=""></DropBox>
                    </div>
                    <div class="col-2">
                        {/* RANDOM THINGO WHAT IS THIS? % */}
                        <Input name = "RANDOM THINGO"></Input>

                    </div>
                    
                </div>


                <div class="row">
                    <div class="col-5"> </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-danger">Cancel</a>
                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-primary" href="/DataCollect2">Continue</a>
                    </div>
                </div>

                
            </div>

        </>
    )
}
