import React from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
const DashboardMain = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">Column</div>
        <div className="col-10">Column</div>
        <div className="col-1">
          <CalendarComponent color={"#00f"}></CalendarComponent>
          {/* 
                        const dateValue: Date = new Date(New Date().getFullYear(), new Date().getMonth, 20)
                        assign to value 
                        isMultiSelection ={true}

                        
                    */}
          <h7>Reminders</h7>
          <p>First</p>
          <p>Second</p>
          <p>Third</p>
          <p>Forth</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
