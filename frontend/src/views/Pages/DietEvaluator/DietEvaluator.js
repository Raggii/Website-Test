import React from "react";
import BottomTable from "./BottomTable";
import Ingredients from "./Ingredients";

export default function DietEvaluator() {
  return (
    <div>
      <div className="boxContainer">
        <Ingredients></Ingredients>
      </div>
      <div className="boxContainer" style={{ marginTop: "3rem" }}>
        <div className="row">
          <div className="col-2">Space for buttons</div>
          <div className="col-10">
            <BottomTable></BottomTable>
          </div>
        </div>
      </div>
    </div>
  );
}
