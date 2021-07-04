import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

// <PieChart
    // data={[
    //     { title: 'One', value: 10, color: '#E38627', animate:true},
    //     { title: 'Two', value: 15, color: '#C13C37' },
    //     { title: 'Three', value: 20, color: '#6A2135' },
    // ]}
// />
export default function TimeBudgetTool() {
    return (
        <>
            <div className="row text-center">
                <div className="col-8">Pie Chart</div>
                <div className="col-4">Side bar</div>

            </div>
            
        </>
    )
}
