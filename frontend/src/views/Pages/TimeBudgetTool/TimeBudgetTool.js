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

function TableTitle({Title, prefex}) {
    return (
    <div className="row mt-3 mb-1"> 
        <div className="col-1"></div>                          
        <h5 className="col-4">
            {Title}
        </h5>
        <div className="col">
            <input className="inputButton"/>{prefex}
        </div>
    </div>
    )
}

function TableContent({Title, prefex}) {
    return (
    <div className="row mt-3 mb-1"> 
        <div className="col-1"></div>                          
        <h5 className="col-4">
            {Title}
        </h5>
        <div className="col">
            <input className="inputButton"/>{prefex}
        </div>
    </div>
    )
}


export default function TimeBudgetTool() {
    return (
        <>
        <div className="row">
            <div className="col-8 boxContainer ml-3">
                <div className="pieChart">
                    <PieChart
                        data={[
                            { title: 'Milking', value: 2, color: '#97F03D', animate:true},
                            { title: 'Walking', value: 6, color: '#A63541' },
                            { title: 'One Feed Bad', value: 5, color: '#57358F' },
                            { title: 'Drinking', value: 2, color: '#4E8BA6' },
                            { title: 'Grazing', value: 5, color: '#519E5F' },
                            { title: 'Other', value: 1, color: '#A88805' },
                            { title: 'Lying', value: 10, color: '#A8402D' }
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
                        
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>
                        <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
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
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>
                        <div className="row mb-1 mt-1">
                            <div className="col-1"></div>                           
                            <h5 className="col-4">
                                Walking
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
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
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>
                        <div className="row mb-1 mt-1">
                            <div className="col-1"></div>                           
                            <h5 className="col-4">
                                On Feed Pad
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
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
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>
                        <div className="row mb-1 mt-1">
                            <div className="col-1"></div>                           
                            <h5 className="col-4">
                                On Feed Pad
                            </h5>
                            <div className="col">
                                <input className="inputButton"/>Hours
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
                        <div className="row">
                            <div className="col-2"></div>
                            <p className="col-4">
                                Mob Size
                            </p>
                            <div className="col">
                                <input className="inputButton"/>Cows
                            </div>
                        </div>
                         <TableContent Title="Milking" prefex="Hours"></TableContent>
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
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>
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
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>
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
