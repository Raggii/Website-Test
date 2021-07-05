import React from 'react'
import "./PlaceOrder.css"
import Input from '../../BaseComps/Input'

export default function PlaceOrder() {
    return (
        <>
            <div className="d-flex justify-content-center mt-3 ml-3 mr-3">
                    
                    <div className="loginContainer ">
                        
                        <h2 className="m-5 text-center">
                            Place an Order
                        </h2>
                        <span className="inline-flex ">
                            <Input name="Amount Required:" ></Input>
                            <Input name="Type of Product:" ></Input>
                            <Input name="Full Name:" ></Input>
                            <Input name="Address:" ></Input>
                            <Input name="Email for Reciept:" ></Input>
                        </span>
                        <div className="buttons">
                            <div className="row">
                                <div className="col-12">
                                    <a type="button" class="btn buttonStyle" href="#">Send Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

