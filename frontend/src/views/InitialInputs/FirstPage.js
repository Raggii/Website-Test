import React from 'react'
import Input from '../BaseComps/Input'
import DropBox from '../BaseComps/DropBox'
import "./Inputs.css"
import largeLogo from "../../assets/largeLogo.PNG";


export default function FirstPage() {
    return (
        <>
        <div className="row ml-10">
            <div className="col d-flex justify-content-left">
                <img className="imageResize" src={largeLogo} alt="large logo"></img>
            </div>
        </div>  
            <div className="d-flex justify-content-center">
                
                <div className="loginContainer">
                    
                    <h2 className="m-5 text-center">
                        Please Enter Your Farm Details
                    </h2>
                    <span className="inline-flex ">

                        <div>
                            <Input name="Consultant:" ></Input>
                        </div>
                        <div>
                            <Input name="Contact Details:" ></Input>
                        </div>
                        <div>
                            <Input name="Farm Name:" ></Input>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Input name="Heard Size:" ></Input>
                            </div>
                            <div className="col-6">
                                <Input name="Milk Yield (Kg MS/c/yr):" ></Input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <Input name="Fat Percentage:" ></Input>
                            </div>
                            <div className="col-6">
                                <Input name="Prot Percentage:" ></Input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <DropBox title ="Production Phase:" opt1="male" opt2="Felame" opt3="Dan"></DropBox>
                            </div>
                            <div className="col-6">
                                <DropBox title ="Predominat Breed:" opt1="male" opt2="Felame" opt3="Dan"></DropBox>
                            </div>
                        </div>
                            
                        <div>
                            <Input name="Production Breed:" ></Input>
                        </div>
                        <div className="buttons">
                            <div className="row">
                                <div className="col-6">
                                    <a type="button" class="btn btn-danger">Cancel</a>
                                </div>
                                <div className="col-6">
                                    <a type="button" class="btn btn-primary" href="/DataCollect2">Continue</a>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                
            </div>
        </>
    )
}
