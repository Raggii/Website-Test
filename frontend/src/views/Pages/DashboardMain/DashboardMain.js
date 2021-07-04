import React from "react";
import { DashboardCalender } from "../../../comps/DashboardCalender/DashboardCalender";

const DashboardMain = () => {
  return (
    <div className="row">
      <div className="col">Column</div>
      <div className="col">Column</div>
      <div className="col">
        <DashboardCalender />
      </div>
    </div>
  );
};

export default DashboardMain;
