import React from 'react'

export default function MainTable() {

function TableRow({Name, Percent, PreMix, Grams}) {
    return (
        <div className="row tableRow mr-1 ml-1">
            <div className="col-5">{Name}</div>
            <div className="col-2 text-center">{Percent}</div>
            <div className="col-3 text-center">{PreMix}</div>
            <div className="col-2 text-center">{Grams}</div>
        </div>
    )
}


    return (
        <div>
            <div className="row">
                <div className="col-5"></div>
                <div className="col-5 text-center"><h4>Micro Mineral Mix</h4></div>
                <div className="col-2 text-center"><h6>Water Soluble</h6></div>
            </div>
            <div className="row">
                <div className="col-5 pl-4"><h3>Ingredient</h3></div>
                <div className="col-2 text-center"><h6>% of Mix</h6></div>
                <div className="col-3 text-center"><h6>PreMix kg/1000kg</h6></div>
                <div className="col-2 text-center"><h6>Grams/Dose</h6></div>
            </div>
            <TableRow Name="Zinc Sulphate (35% Zn)" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Manganese Sulphate" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Copper Sulphate" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Cobalt Sulphate" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="EDDI (79.5% I)" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Sodium Selenite" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="ProPath LQ Zn 180" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="ProPath LQ Cu 180" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="ProPath LQ 4" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Availa 4 + Cr" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Copro 25" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Avalia-Cr 1000" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Rumenos 400" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Biotin 2%" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Celmanax SCP" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="A-Max" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Vitamin A 1000" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Vitamin D 500" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Vitamin E 50" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Zinc Oxide" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="BioChlor" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Magnesium Sulphate TriHyd" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Magnesium Chloride" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Magnesium Oxide" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Salt" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Sodium Bicarb" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Calcium Chloride" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="MCP" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="LimeStone" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <TableRow Name="Total" Percent="44.2889" PreMix="442.8889" Grams="3.986"></TableRow>
            <div className="row">
                <div className="col-10">Desired Feeding rate of TM premix</div>
                <div className="col-2 text-center"><h6>9.000</h6></div>
            </div>
        </div>
    )
}
