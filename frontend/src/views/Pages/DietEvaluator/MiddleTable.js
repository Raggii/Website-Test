import React from 'react'
import InputRow from './InputRow'
export default function MiddleTable() {



    return (
        <>
            <div className="row">
                <div className="col-2 mb-2 mt-1 text-center"><h6>KGS</h6></div>
                <div className="col-2 mb-2 mt-1 text-center"><h6>Wet/Dry</h6></div>
                <div className="col-2 mb-2 mt-1 text-center"><h6>Util%</h6></div>
                <div className="col-2 mb-2 mt-1 text-center"><h6>DMI</h6></div>
                <div className="col-2 mb-2 mt-1 text-center"><h6>DM%</h6></div>
                <div className="col-2 mb-2 mt-1 text-center"><h6>Site</h6></div>
            </div>
            <div className="row">
                <div className="col-4"><InputRow></InputRow></div>
                <div className="col-4"><InputRow></InputRow></div>
                <div className="col-4"><InputRow></InputRow></div>
                <div className="col-4"><InputRow></InputRow></div>
            </div>
            <InputRow></InputRow>
            <InputRow></InputRow>
            <InputRow></InputRow>
            <InputRow></InputRow>
            <InputRow></InputRow>
            <InputRow></InputRow>

        </>
    )
}
