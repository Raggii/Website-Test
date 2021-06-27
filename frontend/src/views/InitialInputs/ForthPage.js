import React from 'react'
import Input from '../BaseComps/Input'
import DropBox from '../BaseComps/DropBox'

export default function ForthPage() {
    return (
        <>
        <div class="row">
            {/* Consultant */}
            <div class="col-4"></div>
            <h2 class="col-4">
                {"       CHASE BOVINE SERVICES PAGE 4"}
            </h2>       
        </div>
        {/* Needs to move these to the top of the inputs */}
            <div>
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-2">
                        ppm                
                    </div>
                    <div class="col-2">
                        mg/c/d
                    </div>
                </div>
            </div>

            <div>
                {/* Total Zinc */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Total Zinc
                        
                    </div>
                    
                    <div class="col-2">
                        <Input isText = {false}></Input>
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>
                        
                    </div>
                </div>

                {/* Organic Zinc */}
                {/* MOVE THIS TO THE LEFT SLIGHTLY ADD EXTRA IDER */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Organic Zinc
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>
                        
                    </div>
                </div>

                {/* Total Manganese */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Total Manganese
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                </div>

                {/* Total Copper */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Total Copper
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>
                        
                    </div>
                </div>

                {/* Organic Copper */}
                {/* MOVE THIS TO THE LEFT SLIGHTLY ADD EXTRA IDER */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Organic Copper
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>
                    </div>
                </div>

                {/* Total Cobalt */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Total Cobalt
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>
                        
                    </div>
                </div>

                {/* Total Iodine */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Total Iodine
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>
                    </div>
                </div>

                {/* Total Selenium */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Total Selenium
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>

                        
                    </div>
                </div>

                {/* Organic Chromium */}
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-1">
                        Organic Chromium
                        
                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>


                    </div>
                    <div class="col-2">
                        <Input isText = {false}></Input>
                        
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">

                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-danger">Cancel</a>
                    
                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-secondary">Defaults</a>

                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-secondary" href="/DataCollect3">Back</a>

                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-primary" href="/Dashboard">Sumbit Form</a>

                    </div>
                    <div class="col-4">

                    </div>
                </div>
            

            </div>


        </>
    )
}
