import React from 'react'

function Controller({Title, Amount, extra}) {
    return (
        <div className= {"row ml-3 mr-3 tableRow"}>
            <div className="col-6">
                {Title}
            </div>
            <div className="col">
                {Amount}
            </div>
            <div className="col">
                {extra}
            </div>
        </div>
    )
}


export default function SmallTable() {
    return (
        <div>
            <div className="boxContainer m-1">
                <div className="mb-3">
                    <h4 className="text-center m-3">Supplemental Intake (mg/day)</h4>
                    <Controller Title ="Total Zinc" Amount="1395.00" extra="1395.00"></Controller>
                    <Controller Title ="Organic Zinc" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Total Manganese" Amount="1209.00" extra="1209.00"></Controller>
                    <Controller Title ="Organic Manganese" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Total Copper" Amount="186.00" extra="186.00"></Controller>
                    <Controller Title ="Organic Copper" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Total Cobalt" Amount="19.00" extra="19.00"></Controller>
                    <Controller Title ="Organic Cobalt" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Iodine" Amount="22.00" extra="22.00"></Controller>
                    <Controller Title ="Selenium" Amount="5.60" extra="5.60"></Controller>
                    <Controller Title ="Chromium" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Vitamin A KIU/day" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Vitamin D KIU/day" Amount="0.00" extra="0.00"></Controller>
                    <Controller  Title ="Vitamin E IU/day" Amount="0.00" extra="0.00"></Controller>
                </div>

            </div>

            <div className="boxContainer m-2">
                <div className="mb-3">
                    <h4 className="text-center m-3">Supplemental Total Dietary Concentraion</h4>                              
                    <Controller Title ="Total Zinc" Amount="75.00" extra="75.00"></Controller>
                    <Controller Title ="Organic Zinc" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Total Manganese" Amount="65.00" extra="65.00"></Controller>
                    <Controller Title ="Organic Manganese" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Total Copper" Amount="10.00" extra="10.0"></Controller>
                    <Controller Title ="Organic Copper" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Total Cobalt" Amount="1.00" extra="1.00"></Controller>
                    <Controller Title ="Organic Cobalt" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Iodine" Amount="1.20" extra="1.20"></Controller>
                    <Controller Title ="Selenium" Amount="0.30" extra="0.30"></Controller>
                    <Controller Title ="Chromium" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Vitamin A KIU/day" Amount="0.00" extra="0.00"></Controller>
                    <Controller Title ="Vitamin D KIU/day" Amount="0.00" extra="0.00"></Controller>
                    <Controller  Title ="Vitamin E IU/day" Amount="0.00" extra="0.00"></Controller>
                </div>

            </div>
            <div className="boxContainer m-2">

                
                <div className="mb-3">
                    <h4 className="text-center m-3">Dietary Concentrations</h4>                       
                    <Controller Title ="Calcium % of DMI" Amount="0.44%"></Controller>
                    <Controller Title ="Phosphorus % of DMI" Amount="0.39%"></Controller>
                    <Controller Title ="Ca:P" Amount="1.1"></Controller>
                    <Controller Title ="Magnesium % of DMI" Amount="0.23%"></Controller>
                    <Controller Title ="Potassium % of DMI" Amount="3.16%"></Controller>
                    <Controller Title ="Sulfur % of DMI" Amount="0.36%"></Controller>
                    <Controller Title ="Chloride % of DMI" Amount="1.13%"></Controller>
                    <Controller Title ="Sodium % of DMI" Amount="0.30%"></Controller>
                    <Controller Title ="Monensin mg/day" Amount="0"></Controller>
                    <Controller Title ="Boitin mg/day" Amount="0"></Controller>
                </div>
            </div>
        </div>
    )
}
