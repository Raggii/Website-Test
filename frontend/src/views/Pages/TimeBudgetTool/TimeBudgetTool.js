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
        <div className="row text-center">
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
                    <h3>Time Spent</h3>
                    <div className="row sideBar">
                        <div className="col-4">Milking</div>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <div className="col-4">Mob Size</div>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <div className="col-4">Miling Platform</div>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">Walking</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">On Feed Pad</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">Drinking</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">Grazing</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">Other</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">Lying</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">Lying</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                    <div className="row sideBar">
                        <h5 className="col-4">Lying</h5>
                        <input type="text" class="form-control col-4"/>
                        <div className="col-4">Hours</div>
                    </div>
                </div>
                
            </div>

        </div>
        </>
    )
}
