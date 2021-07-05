import React from 'react'

function TableRow({Title, Before,After}) {
    return (
        <div className="row tableRow mr-3 ml-3">
            <div className="col-2">{Title}</div>
            <div className="col-1"></div>
            <div className="col-1"></div>
            <div className="col-2"></div>
            <div className="col-1">{Before}</div>
            <div className="col-1">{After}</div>
            <div className="col-1 text-center"></div>
            <div className="col-1 text-center"></div>
            <div className="col-2"></div>
        </div>
    )
}

export default function FeedCostCalc() {
    return (
        <div className="mb-5">
            <div className="row center-text">
                <div className="col-12 center-text">
                    <h2 className="center-text mr-3 ml-3"> Feed Cost Calculator</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2 "><h5>DMI Amount</h5></div>
                <div className="col-2"></div>
                <div className="col-1"><h5>Before</h5></div>
                <div className="col-1"><h5>After</h5></div>
                <div className="col-1"><h5>Before</h5></div>
                <div className="col-1"><h5>After</h5></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-1">Before</div>
                <div className="col-1">After</div>
                <div className="col-2">Cost/Kg DM</div>
                <div className="col-1">Dm KG</div>
                <div className="col-1">Dm KG</div>
                <div className="col-1 text-center">$</div>
                <div className="col-1 text-center">$</div>
                <div className="col-2"></div>
            </div>
            <TableRow Title="Spring - Irrgated" Before="0.00" After=""></TableRow>
            <TableRow Title="Cereal Straw" Before="0.00" After=""></TableRow>
            <TableRow Title="Wheat" Before="0.00" After=""></TableRow>
            <TableRow Title="" Before="0.00" After=""></TableRow>
            <TableRow Title="" Before="0.00" After=""></TableRow>
            <TableRow Title="" Before="0.00" After=""></TableRow>
            <TableRow Title="" Before="0.00" After=""></TableRow>
            <TableRow Title="" Before="0.00" After=""></TableRow>
            
             <div className="row tableRow mr-3 ml-3">
                <div className="col-5 "><h5>Additional Ingredients for ROI analysis</h5></div>
            </div>


            <TableRow Title="Purchased Feed A" Before="0.00" After=""></TableRow>
            <TableRow Title="Purchased Feed B" Before="0.00" After=""></TableRow>
            <TableRow Title="Purchased Feed C" Before="0.00" After=""></TableRow>
            <TableRow Title="Additive 1 (Grams)" Before="0.00" After=""></TableRow>
            <TableRow Title="Additive 2 (Grams)" Before="0.00" After=""></TableRow>
            <TableRow Title="Additive 3 (Grams)" Before="0.00" After=""></TableRow>
            <TableRow Title="End Result Numbers" Before="0.00" After=""></TableRow>
        </div>
    )
}
