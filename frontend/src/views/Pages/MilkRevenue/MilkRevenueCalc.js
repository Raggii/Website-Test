import React from 'react'
import "./MilkRevenue.css"

function TableRow({Title, Before, After, BeforeDiff, AfterDiff}) {
    return (
        <div className="row tableRow ml-3 mr-3">
            <div className="col-4 pl-5"><h6>{Title}</h6></div>
            <div className="col-2 center-text">{Before}</div>
            <div className="col-2 center-text">{After}</div>
            <div className="col-2 center-text">{BeforeDiff}</div>
            <div className="col-2 center-text">{AfterDiff}</div>
        </div>
    )
}


export default function MilkRevenueCalc() {
    return (
        <div className="m-3">
            <div className="row">
                <div className="col-12">
                    <h2 className="">Milk Revenue Calculator</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-2 center-text"><h5>Before</h5></div>
                <div className="col-2 center-text"><h5>After</h5></div>
                <div className="col-4 "><h5 className="center-text">Difference After-Before</h5></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>Milk Production and Pricing:</h4>
                </div>
            </div>
            <TableRow Title="Litres of Milk/Cow/Day" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Fat %" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Protein %" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Kilos of Milk Fat" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Kilos of Milk Protein" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Kilos of Milk Fat+Protein" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Fat ($/kg)" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Protein ($/kg)" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Volume Premium" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Quality Premium ($/litre)" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Other Deducts ($/litre)" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <div className="row">
                <div className="col-12">
                    <h4>Dollars Received:</h4>
                </div>
            </div>
            <TableRow Title="Milk Fat" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Protein" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Premiums" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Deductions" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Value" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Value $$/cow/day" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <div className="row">
                <div className="col-12">
                    <h4 >Milk Revenue Over Feed Cost:</h4>
                </div>
            </div>
            <TableRow Title="Ration Dm Intake per Cow" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Ration Cost ($/kg DM)" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Feed Eff" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Component Eff" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Total Ration Cost" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Total Ration Cost ($$/kg Ms)" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Purchased Cost" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Revenue Over Feed Cost" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Return on Investmen on Purchased Ingredients" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Number of Cows" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Revenue - 1 Week" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Revenue - 1 Month" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
            <TableRow Title="Milk Revenue - 1 Year" Before="26.49" After="26.49" BeforeDiff="0" AfterDiff="0%"></TableRow>
        </div>
    )
}
