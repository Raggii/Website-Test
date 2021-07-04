import React from 'react'
import RadioButton from "../BaseComps/RadioButton"


export default function ThirdPage() {
    return (
        <>  

            <div className="d-flex justify-content-center mt-5">
                
                <div className="loginContainerRadio">
                    
                    <h2 className="m-5 text-center">
                        Animal Health Concerns
                    </h2>
                    <span className="inline-flex text-left">

                        <div className="row mb-2"> 
                            <div className= "col-4 "></div>
                            <div className= "col-2">None</div>
                            <div className= "col-2">Slight</div>
                            <div className= "col-2">Moderate</div>
                            <div className= "col-2">Very</div>
                        </div>
                        <div className="row">
                            <RadioButton title = "Lameness"></RadioButton>
                            <RadioButton title = "Somatic Cell Count"></RadioButton>
                            <RadioButton title = "Body Condition"></RadioButton>
                        </div>
                        <div className ="mt-2 mb-1">
                            <h6>Reproductive Preformance</h6>
                        </div>
                        <div className="row">
                            <RadioButton title = "NonCyler Cows"></RadioButton>
                            <RadioButton title = "6wk inCalf %"></RadioButton>
                            <RadioButton title = "Final Empty"></RadioButton>
                        </div>
                        <div className ="mt-2 mb-1">
                            <h6 >Transition Disease Incidence</h6>
                        </div>
                        <div className="row">
                            <RadioButton title = "Uterine Disease"></RadioButton>
                            <RadioButton title = "Mastitis"></RadioButton>
                            <RadioButton title = "Ketosis Metabolic"></RadioButton>
                        </div>
                        <div className ="mt-2 mb-1">
                            <h6 >Trace Mineral Monitoring</h6>
                        </div>
                        <div className="row">
                            <RadioButton title = "Selenium Status"></RadioButton>
                            <RadioButton title = "Copper Deficiency"></RadioButton>
                            <RadioButton title = "Copper Toxicity"></RadioButton>
                        </div>
                        <div className ="mt-2 mb-1">
                            <h6 >Dietary Antagonists</h6>
                        </div>
                        <div className="row">
                            <RadioButton title = "Iron"></RadioButton>
                            <RadioButton title = "Molydenum"></RadioButton>
                        </div>

                        <div className="buttons mt-4">
                            <div className="row">
                                <div className="col-6">
                                    <a type="button" class="btn btn-danger">Cancel</a>
                                </div>
                                <div className="col-6">
                                    <a type="button" class="btn btn-primary" href="/DataCollect4">Continue</a>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                
            </div>

            
        </>
    )
}
