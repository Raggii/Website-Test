import React from 'react'

function SideButton({className, buttonName}) {
    return (
        <div className="row">
            <div className="col">
                <a type="button" class={className} href="#">{buttonName}</a>
            </div>
        </div>
    )
}

export default function SideBar() {
    return (
        <div className="sidePannelButtons">
            <h5 className="text-center">Control Buttons</h5>
            <SideButton className="btn buttonGreen m-2 ml-3" buttonName="Rummenox Granules"></SideButton>
            <SideButton className="btn buttonLime m-2 ml-3" buttonName="Rummenox"></SideButton>
            <SideButton className="btn buttonBlue m-2 ml-3" buttonName="ProPath LQ Zn 180"></SideButton>
            <SideButton className="btn buttonCyan m-2 ml-3" buttonName="ProPath"></SideButton>
            <SideButton className="btn butonRed m-2 ml-3" buttonName="KemTrace Chromium"></SideButton>
            <SideButton className="btn buttonOrange m-2 ml-3" buttonName="Availa-Cr 1000"></SideButton>
            <SideButton className="btn buttonReset m-2 ml-3" buttonName="Reset"></SideButton>

        </div>
    )
}
