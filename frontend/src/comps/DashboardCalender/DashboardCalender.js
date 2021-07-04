import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import styles from "./DashboardCalender.module.css";

export const DashboardCalender = () => {
  return (
    <div className={styles.calenderWrap}>
      <CalendarComponent color={"#00f"}></CalendarComponent>
      {/* 
        const dateValue: Date = new Date(New Date().getFullYear(), new Date().getMonth, 20)
        assign to value 
        isMultiSelection ={true}
                    */}
      <h6>Reminders</h6>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Forth</li>
      </ul>
    </div>
  );
};
