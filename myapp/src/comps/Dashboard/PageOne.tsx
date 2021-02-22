import React, { useState } from "react";
import Calendar, { CalendarTileProperties } from "react-calendar";
import "./../../styles/dashboardStyles/calender.css";

enum classNamesUrgency {
  super = "super-urgent-class-tile",
  high = "high-urgent-class-tile",
  medium = "medium-urgent-class-tile",
  low = "low-urgent-class-tile",
}

function isSameDay(first: Date, second: Date): boolean {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

class ReminderClass {
  name: string;
  date: Date;
  className: classNamesUrgency;

  constructor(name: string, date: Date, className: classNamesUrgency) {
    this.name = name;
    this.date = date;
    this.className = className;
  }
}

const dates = [
  new ReminderClass("First reminder", new Date(2021, 1, 24), classNamesUrgency.high),
  new ReminderClass("Second reminder", new Date(2021, 1, 25), classNamesUrgency.medium),
  new ReminderClass("Third reminder", new Date(2021, 1, 27), classNamesUrgency.super),
];

function reminderClassName(props: CalendarTileProperties): string | string[] | null {
  if (props.view === "month") {
    if (dates.find((reminder) => isSameDay(props.date, reminder.date))) {
      return classNamesUrgency.high;
    }
  }
  return null;
}

function DashboardCalender() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue: any): void {
    setValue(nextValue);
  }

  return <Calendar onChange={onChange} value={value} tileClassName={reminderClassName} />;
}

export default DashboardCalender;
