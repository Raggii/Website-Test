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
    <div className="row mt-1 mb-1"> 
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
    <div className="row">
        <div className="col-2"></div>
        <p className="col-4">
            {Title}
        </p>
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
                            { title: 'Milking', value: 2, color: '#F0A44E', animate:true},
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
                        <h3 className="m-2">Time Spent</h3>
                    </div>
                    <div className="inputRows">
                        
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>
                        <TableContent Title="Mob Size" prefex="Cows"></TableContent>

                         <TableContent Title="Milking Platform" prefex="bails"></TableContent>

                         <TableContent Title="Milking Speed" prefex="Min"></TableContent>

                         <TableContent Title="Cows Milked" prefex="Per Hour"></TableContent>
                         <TableContent Title="Milkings" prefex="Day"></TableContent>

                        {/* Title */}
                        <TableTitle Title="Walking" prefex="Hours"></TableTitle>

                        </div>
                         <TableContent Title="walking Speed" prefex="Km/Hour"></TableContent>

                         <TableContent Title="Distance/Day" prefex="Km"></TableContent>

                        {/*  */}
                        <TableTitle Title="Feed Pad" prefex="Hours"></TableTitle>

                         <TableContent Title="Feed pad DMI" prefex="Hours"></TableContent>

                        {/*  */}
                        <TableTitle Title="Drinking" prefex="Hours"></TableTitle>
                        {/*  */}
                        <TableTitle Title="Grazing" prefex="Hours"></TableTitle>

                         <TableContent Title="Grazing DMI" prefex="Kg"></TableContent>

                         <TableContent Title="DMI/min/Grazing" prefex="Q"></TableContent>

                         <TableContent Title="Bite Rate" prefex="Min"></TableContent>

                         <TableContent Title="Bite Mass" prefex="g D"></TableContent>

                        

                        {/*  */}
                        <TableTitle Title="Milking" prefex="Hours"></TableTitle>


                    
                </div>
                
            </div>

        </div>
        </>
    )
}
