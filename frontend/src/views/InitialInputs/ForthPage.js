import React from 'react'
import Input from '../BaseComps/Input'
import { FormWrapper } from '../../comps/FromWrapper/FormWrapper'

function RowInTable({Title}) {
    return (

        <>
            <div class="row">
                <div class="col-3">
                    {Title}
                </div>
                <div class="col-4">
                    <Input></Input>
                </div>
                <div class="col-4">
                    <Input></Input> 
                </div>
            </div>

        </>


    )
    
}


export default function ForthPage() {
    return (
        <> 
            <div className="d-flex justify-content-center mt-5">
                
                <div className="loginContainerRadio">
                    
                    <h2 className="m-5 text-center">
                        CHASE BOVINE SERVICES PAGE 4
                    </h2>
                    <span className="inline-flex ">
                        <div class="row mb-2">
                            <div class="col-3"></div>
                            <div class="col-4">
                                PPM                
                            </div>
                            <div class="col-4">
                                MG/C/D
                            </div>
                        </div>
                        <RowInTable Title="Total Zinc"></RowInTable>

                        <RowInTable Title="Organic Zinc"></RowInTable>

                        <RowInTable Title="Total Manganese"></RowInTable>

                        <RowInTable Title="Total Copper"></RowInTable>

                        <RowInTable Title="Organic Copper"></RowInTable>

                        <RowInTable Title="Total Cobalt"></RowInTable>
 
                        <RowInTable Title="Total Iodine"></RowInTable>

                        <RowInTable Title="Total Selenium"></RowInTable>

                        <RowInTable Title="Organic Chromium"></RowInTable>
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
