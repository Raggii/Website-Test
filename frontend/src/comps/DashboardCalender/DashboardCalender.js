import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

export const DashboardCalender = () => {
  return (
    <>
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
    </>
  );
};
