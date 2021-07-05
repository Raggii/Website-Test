import React from 'react'
import "./TimeBudgetTool.css"
import { PieChart } from 'react-minimal-pie-chart';
import Input from '../../BaseComps/Input';

{/* <PieChart
    data={[
        { title: 'One', value: 10, color: '#E38627', animate:true},
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ]}
/> */}




export default function TimeBudgetTool() {
    return (
        <>
        <div className="row">
            <div className="col-8 boxContainer ml-3">
                <div className="pieChart">
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627', animate:true},
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                            { title: 'Three', value: 20, color: '#123456' }
                        ]}
                    />
                </div>

            </div>
            <div className="col">
                <div className="boxContainer">
                    <div className="boxTitle">
                        <h3>Time Spent</h3>
                    </div>
                    <div className="inputRows">
                        
                        <div className="row mt-3 mb-1"> 
                            <div className="col-1"></div>                          
                            <h5 className="col-4">
                                Milking
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        {/* Title */}
                        <div className="row mb-1 mt-1">
                            <div className="col-1"></div>                           
                            <h5 className="col-4">
                                Walking
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        {/*  */}
                        <div className="row mb-1 mt-1">
                            <div className="col-1"></div>                           
                            <h5 className="col-4">
                                On Feed Pad
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        {/*  */}
                        <div className="row mb-1 mt-1">
                            <div className="col-1"></div>                           
                            <h5 className="col-4">
                                On Feed Pad
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                        {/*  */}
                        <div className="row mb-1 mt-1">
                            <div className="col-1"></div>                           
                            <h5 className="col-4">
                                Other
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                        {/*  */}
                        <div className="row mb-1 mt-1">                         
                            <h4 className="col-4">
                                Lying
                            </h4>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>

        </div>
        </>
    )
}
