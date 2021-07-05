import React, { useState } from "react";
import Input from "../BaseComps/Input";
import { FormWrapper } from "../../comps/FromWrapper/FormWrapper";

function RowInTable({ Title }) {
  return (
    <>
      <div className="row">
        <div className="col-4">{Title}</div>
        <div className="col-4">
          <Input></Input>
        </div>
        <div className="col-4">
          <Input></Input>
        </div>
      </div>
    </>
  );
}

export default function ForthPage() {
  return (
    <FormWrapper>
      <div className="d-flex justify-content-center mt-5">
        <div className="loginContainerRadio">
          <h1 className="m-5 text-center">Chemistry of your Farm</h1>
          <span className="inline-flex ">
            <div className="row mb-2">
              <div className="col-4"></div>
              <div className="col-4">PPM</div>
              <div className="col-4">MG/C/D</div>
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
                  <a type="button" className="btn btn-danger" href="/DataCollect3">
                    Cancel
                  </a>
                </div>
                <div className="col-6">
                  <a type="button" className="btn btn-primary" href="/Dashboard">
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
