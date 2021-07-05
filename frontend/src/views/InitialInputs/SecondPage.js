import React, { useState } from "react";
import Input from "../BaseComps/Input";
import DropBox from "../BaseComps/DropBox";
import { FormWrapper } from "../../comps/FromWrapper/FormWrapper";

export default function SecondPage() {
  const [animalSummary, setAnimalSummary] = useState({
    bodyWeight: "",
    weekOfLact: "",
    bodyWeight: "",
    msCowD: "",
    DMI: "",
    daysCarriedCalf: "",
    adg: "",
    terrain: "",
    distanceShed: "",
    numMilkings: "",
  });
  return (
    <FormWrapper>
      <div className="d-flex justify-content-center mt-5">
        <div className="loginContainer">
          <h2 className="m-5 text-center">Animal Summary</h2>
          <span className="inline-flex ">
            <div>
              <DropBox title="Body Weight (Kgs):" opt1="male" opt2="Felame" opt3="Dan"></DropBox>
            </div>
            <div className="row">
              <div className="col-6">
                <Input name="Week of Lactation:"></Input>
              </div>
              <div className="col-6">
                <Input name="Kgs Ms/Cow/D:"></Input>
              </div>
            </div>
            <div>
              <Input name="DMI Kgs/Cow/D:"></Input>
            </div>
            <div>
              <Input name="Days Carried Calf:"></Input>
            </div>
            <div className="row">
              <div className="col-6">
                <Input name="Adg Kgs/Cow/D:"></Input>
              </div>
              <div className="col-6">
                <DropBox title="Terrain:" opt1="male" opt2="Felame" opt3="Dan"></DropBox>
              </div>
            </div>

            <div>
              <Input name="Distance to Shed (Km):"></Input>
            </div>
            <div>
              <DropBox title="Number of Milkings:" opt1="male" opt2="Felame" opt3="Dan"></DropBox>
            </div>
            <div className="buttons">
              <div className="row">
                <div className="col-6">
                  <a type="button" class="btn btn-danger" href="/DataCollect3">
                    Cancel
                  </a>
                </div>
                <div className="col-6">
                  <a type="button" class="btn btn-primary" href="/DataCollect3">
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
