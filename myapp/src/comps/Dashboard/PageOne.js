import React, { useState } from "react";
import Calendar from "react-calendar";
import "./../../styles/dashboardStyles/calender.css";

function DashboardCalender() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return <Calendar onChange={onChange} value={value} />;
}

export default DashboardCalender;
