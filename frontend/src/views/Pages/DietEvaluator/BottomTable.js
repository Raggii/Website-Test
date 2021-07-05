import React from 'react'

function TableRow({Title, ME, CP, NDF, CA, P, MG, K, NA, CL, S}) {
    return (
       <div className="row mt-2 p-2 tableRow">
            <div className="col-2"><h5>{Title}</h5></div>
            <div className="col-1">{ME}</div>
            <div className="col-1">{CP}</div>
            <div className="col-1">{NDF}</div>
            <div className="col-1">{CA}</div>
            <div className="col-1">{P}</div>
            <div className="col-1">{MG}</div>
            <div className="col-1">{K}</div>
            <div className="col-1">{NA}</div>
            <div className="col-1">{CL}</div>
            <div className="col-1">{S}</div>
        </div>
    )
}



export default function BottomTable() {
    return (
        <div>
            <TableRow Title="Diet Concentration" ME="12" CP="21.9%" NDF="39.9%" CA="0.44%" P="0.39%" MG="0.23%" K="3.16%" NA="0.30%" CL="1.13%" S="0.36%"></TableRow>
            <TableRow Title="Diet Concentration" ME="12" CP="21.9%" NDF="39.9%" CA="0.44%" P="0.39%" MG="0.23%" K="3.16%" NA="0.30%" CL="1.13%" S="0.36%"></TableRow>
            <TableRow Title="Diet Concentration" ME="12" CP="21.9%" NDF="39.9%" CA="0.44%" P="0.39%" MG="0.23%" K="3.16%" NA="0.30%" CL="1.13%" S="0.36%"></TableRow>
            <TableRow Title="Diet Concentration" ME="12" CP="21.9%" NDF="39.9%" CA="0.44%" P="0.39%" MG="0.23%" K="3.16%" NA="0.30%" CL="1.13%" S="0.36%"></TableRow>
            <TableRow Title="Diet Concentration" ME="12" CP="21.9%" NDF="39.9%" CA="0.44%" P="0.39%" MG="0.23%" K="3.16%" NA="0.30%" CL="1.13%" S="0.36%"></TableRow>
            <TableRow Title="Diet Concentration" ME="12" CP="21.9%" NDF="39.9%" CA="0.44%" P="0.39%" MG="0.23%" K="3.16%" NA="0.30%" CL="1.13%" S="0.36%"></TableRow>
        </div>
    )
}
