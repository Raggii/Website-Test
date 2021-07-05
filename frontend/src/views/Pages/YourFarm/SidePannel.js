import React from 'react'

function Controller({Title}) {
    return (
        <div className="row">
            <div className="col-7"> 
                <p >{Title}</p>
            </div>
            <div className="col">
                <a type="button" class="btn buttonStyle" href="#">No</a>
            </div>
        </div>
    )
}
// MAKE POSITION FIXED

export default function Sidepannel() {
    return (
        <> 
            <div className="boxContainerPannel">
                <h5 className="d-flex justify-content-center">Control Panel</h5>
                <Controller className="mt-1" Title="ProPath LQ 4"></Controller>
                <Controller className="mt-1" Title="Avalia-Cr 1000"></Controller>
                <Controller className="mt-1" Title="ProPath LQ Zn"></Controller>
                <Controller className="mt-1" Title="ProPath LQ Cu"></Controller>
                <Controller className="mt-1" Title="CoPro"></Controller>
                <Controller className="mt-1" Title="Monensin"></Controller>
                <Controller className="mt-1" Title="Biotin"></Controller>
                <Controller className="mt-1" Title="Pricing"></Controller>
                <Controller className="mt-1" Title="Ws Organic"></Controller>
                <Controller className="mt-1" Title="Water Soluble"></Controller>
                <Controller className="mt-1" Title="Show Macros"></Controller>
                <Controller className="mt-1" Title="Vitamin Premix"></Controller>
                <Controller className="mt-1" Title="Zinc Oxide (FE)"></Controller>
                <Controller className="mt-1" Title="BioChlor"></Controller>
                <Controller className="mt-1" Title="Celmanax"></Controller>
                <Controller className="mt-1" Title="A-Max"></Controller>
                <Controller className="mt-1" Title="Round Dosage"></Controller>
                <Controller className="mt-1" Title="Price Macros"></Controller>
            </div>
        </>
    )
}
