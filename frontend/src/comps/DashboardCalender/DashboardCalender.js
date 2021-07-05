import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import { useEffect, useState } from "react";
import ReminderIcon from "../../views/Pages/Svgs/ReminderHolder";
import ClockIcon from "../../views/Pages/Svgs/Clock";
import styles from "./DashboardCalender.module.css";
import { format } from "date-fns";

const Reminder = ({ date, text, prioity }) => {
  const [fill, setFill] = useState("");
  const [color, setColor] = useState("none");
  const reminderCharLimit = 9;

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function getPriorityColour(priority) {
    switch (prioity) {
      case 0:
        return "red";
      case 1:
        return "orange";
      case 2:
        return "lightgreen";
      default:
        return "grey";
    }
  }

  useEffect(async () => {
    setFill(getPriorityColour(prioity));
  }, [prioity, date]);

  return (
    <li>
      <ReminderIcon fill={fill} color={color} className={styles.reminderIcon} />
      <div className={styles.reminderCenterWrap}>
        <div className={styles.reminderTitle}>
          {text.length > reminderCharLimit
            ? text.slice(0, reminderCharLimit) + "..."
            : text.slice(0, reminderCharLimit + 3)}
        </div>
        <div className={styles.date}>{format(date, "do MMMM u")}</div>
      </div>
      <div className={styles.hours}>
        <ClockIcon />
        <div style={{ paddingLeft: "0.5rem" }}>
          {addZero(date.getHours())}:{addZero(date.getMinutes())}
        </div>
      </div>
    </li>
  );
};

export const DashboardCalender = () => {
  return (
    <div className={styles.calenderWrap}>
      <CalendarComponent
        color={"#00f"}
        className={styles.calender}
        style={{ borderRadius: "0.5rem" }}
      />

      <div className={styles.reminderWrap}>
        <h5 className="fw-bold">REMINDERS</h5>
        <ul className={styles.reminderList}>
          <Reminder text="Payment One" date={new Date()} prioity={0} />
          <Reminder text="Soil Free" date={new Date()} prioity={1} />
          <Reminder text="Upgrade plan page" date={new Date()} prioity={1} />
          <Reminder text="Payment Two" date={new Date()} prioity={2} />
        </ul>
      </div>
    </div>
  );
};
