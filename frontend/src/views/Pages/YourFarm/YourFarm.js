import React from 'react'
import "./YourFarm.css"
import SmallTable from './SmallTable'
import Sidepannel from './SidePannel'
import MainTable from './MainTable'

export default function YourFarm() {
    return (
        <>
            <div className="row ml-3 mr-2">
                <div className="col-6 boxContainer m-1" >
                    <MainTable></MainTable>

                </div>
                <div className="col-4" >
                    <SmallTable></SmallTable>

                </div>
                <div className="col boxContainer m-1">
                    <Sidepannel></Sidepannel>

                </div>
            </div>

        </>
    )
}
