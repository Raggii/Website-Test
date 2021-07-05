import React from 'react'
import InputRow from './InputRow'
import Ingredients from './Ingredients'
import MiddleTable from './MiddleTable'
import FinalTable from './FinalTable'

export default function DietEvaluator() {
    return (
        <>  
        <div className="row boxContainer ">
            <div className="col-4">
                <Ingredients></Ingredients>
            </div>
            <div className="col-2">
                <InputRow></InputRow>
            </div>
            <div className="col-2">
                <FinalTable></FinalTable>
            </div>
            <div className="col-2">
                <InputRow></InputRow>
            </div>
            <div className="col-2">
                <InputRow></InputRow>
            </div>
        </div>
        </>
    )
}

