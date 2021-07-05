import React, { useState } from "react";
import Input from "../BaseComps/Input";
import DropBox from "../BaseComps/DropBox";
import { FormWrapper } from "../../comps/FromWrapper/FormWrapper";
import "./Inputs.css";

export default function FirstPage() {
  const [generalValues, setGeneralValues] = useState({
    consultant: "",
    contactDetails: "",
    farmName: "",
    heardSize: "",
    mulkYield: "",
    fatPercent: "",
    protPercent: "",
    prodPhase: "",
    predomBreed: "",
    consultant: "",
  });

  return (
    <FormWrapper>
      <div className="d-flex justify-content-center mt-5">
        <div className="loginContainer">
          <h2 className="m-5 text-center">Please Enter Your Farm Details</h2>
          <span className="inline-flex ">
            <div>
              <Input name="Consultant:"></Input>
            </div>
            <div>
              <Input name="Contact Details:"></Input>
            </div>
            <div>
              <Input name="Farm Name:"></Input>
            </div>
            <div className="row">
              <div className="col-6">
                <Input name="Heard Size:"></Input>
              </div>
              <div className="col-6">
                <Input name="Milk Yield (Kg MS/c/yr):"></Input>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Input name="Fat Percentage:"></Input>
              </div>
              <div className="col-6">
                <Input name="Prot Percentage:"></Input>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <DropBox title="Production Phase:" opt1="male" opt2="Felame" opt3="Dan"></DropBox>
              </div>
              <div className="col-6">
                <DropBox title="Predominat Breed:" opt1="male" opt2="Felame" opt3="Dan"></DropBox>
              </div>
            </div>

            <div className="mt-3 mb-4">
              <Input name="Production Breed:"></Input>
            </div>
            <div className="buttons">
              <div className="row">
                <div className="col-6">
                  <a type="button" className="btn btn-danger" href="/Dashboard">
                    Cancel
                  </a>
                </div>
                <div className="col-6">
                  <a type="button" className="btn btn-primary" href="/DataCollect2">
                    Continue
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
    </FormWrapper>
  );
}
