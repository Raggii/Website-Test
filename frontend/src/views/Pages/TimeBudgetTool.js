import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

export default function TimeBudgetTool() {
    return (
        <>
        <h1>Hello</h1>
             <div className="container">
                <div className="row">
                    <div className="col-6">
                        <PieChart
                            data={[
                                { title: 'One', value: 10, color: '#E38627', animate:true},
                                { title: 'Two', value: 15, color: '#C13C37' },
                                { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                            />

                    </div>
                    <div className="col-2">
                        <button></button>
                        hello
                    </div>
                </div>
            </div>
            
        </>
    )
}
