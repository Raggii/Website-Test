import React from 'react'
import RadioButton from "../BaseComps/RadioButton"
export default function ThirdPage() {
    return (
        <>    
            <div class="row">
                <div class="col-4"></div>
                <h2 class="col-4">
                    {"       CHASE BOVINE SERVICES PAGE 3"}
                </h2>       
            </div>

            {/* Need to be in columns */}
            <div className="row"> 
                <div className= "col-4"> </div>
                <div className= " col-1">None</div>
                <div className= " col-1">Slight</div>
                <div className= " col-1">Moderate</div>
                <div className= " col-1">Very</div>
            </div>
            <div>
                {/* Lameness */}
                <RadioButton title = "Lameness"></RadioButton>

                {/* Somatic Cell Count */}
                <RadioButton title = "Somatic Cell Count"></RadioButton>

                {/* Body Condition */}
                <RadioButton title = "Body Condition"></RadioButton>
            </div>

            {/* Second Three */}
            <div>        
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2"><h6>Reproductive Preformance</h6></div>
                </div>
                {/* NonCyler Cows */}
                <RadioButton title = "NonCyler Cows"></RadioButton>

                {/* 6wk inCalf % */}
                <RadioButton title = "6wk inCalf %"></RadioButton>


                {/* Final Empty % */}
                <RadioButton title = "Final Empty"></RadioButton>

            </div>


            {/* Third Three */}
            <div>
                
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2"><h6>Transition Disease Incidence</h6></div>
                </div>
                {/* Uterine Disease - RFM */}
                <RadioButton title = "Uterine Disease"></RadioButton>


                {/* Mastitis */}
                <RadioButton title = "Mastitis"></RadioButton>


                {/* Ketosis - Metabolic Dz */}
                <RadioButton title = "Ketosis Metabolic"></RadioButton>

            </div>



            {/* Forth section */}
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2"><h6>Trace Mineral Monitoring</h6></div>
                </div>
                {/* Selenium Status */}
                <RadioButton title = "Selenium Status"></RadioButton>


                {/* Copper Deficiency */}
                <RadioButton title = "Copper Deficiency"></RadioButton>


                {/* Copper Toxicity */}
                <RadioButton title = "Copper Toxicity"></RadioButton>


            </div>


            {/* Last Section*/}
            <div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-2"><h6>Dietary Antagonists</h6></div>
                </div>
                {/* Iron */}
                <RadioButton title = "Iron"></RadioButton>


                {/* Molydenum */}
                <RadioButton title = "Molydenum"></RadioButton>



                <div class="row">
                    <div className="col-4"></div>
                    <div class="col-1">
                        <a type="button" class="btn btn-danger">Cancel</a>
                    </div>
                    
                    <div class="col-1">
                        <a type="button" class="btn btn-warning">Zero Concerns</a>

                    </div>

                    <div class="col-1">
                        <a type="button" class="btn btn-secondary" href="/DataCollect2">Back</a>

                    </div>
                    <div class="col-1">
                        <a type="button" class="btn btn-primary" href="/DataCollect4">Continue</a>

                    </div>
                </div>

            </div>

            
        </>
    )
}
