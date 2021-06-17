import React from 'react'
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';
const DashboardMain = () => {


    
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    Column
        
                </div>
                <div className="col-4">
                    Column

                </div>
                <div className="col-4">
                    <CalendarComponent></CalendarComponent> 

                    <p>anything foes below</p>

                </div>
            </div>
        </div>
    )
}

export default DashboardMain
