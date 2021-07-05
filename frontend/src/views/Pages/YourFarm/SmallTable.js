import React from 'react'

function Controller({Title, Amount}) {
    return (
        <div>
            <tr>
                <th colspan="2">3</th>
                <td colspan="2" class="table-active">Larry the Bird</td>
            </tr>
        </div>

    )
}


export default function SmallTable() {
    return (
        <div>
            <div className="boxContainer m-2">

                <h5 className=" d-flex justify-content-center">Supplemental Intake</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    <Controller Title = "total Zinc mg/day" Amount="123"></Controller>
                    </tbody>
                </table>

            </div>
            <div className="boxContainer m-2">

                <h5 className=" d-flex justify-content-center">Supplemental Total Dietary Concentraion</h5>
            </div>
            <div className="boxContainer m-2">

                <h5 className=" d-flex justify-content-center">Dietary Concentrations</h5>
            </div>
        </div>
    )
}
