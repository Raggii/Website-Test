import React from 'react'
import ColFour from '../../BaseComps/ColFour'

export default function YourFarm() {
    return (
        <>
            <h4>Feeding Rate: "INPUT" grams/head/day</h4>
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5">
                    <table class="table">
                        <thead>
                            <ColFour firstRow="Ingredient" secondRow="Percentage of Mix" thirdRow="PreMix Kg.100kg" forthRow="Grams per Dose"></ColFour>
                        </thead>
                        <tbody>
                            <ColFour firstRow="Zinc Sulphate" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>
                            <ColFour firstRow="Manganese Sulphate" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>
                            <ColFour firstRow="Copper Sulphate" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>
                            <ColFour firstRow="EDDI" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Sodium Selenite" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="ProPath Zn" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="PropPath Cu" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="PropPath 4" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Availa 4 + Cr" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Copro 25" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="PropPath 4" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Avalia-Cr 1000" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Avalia-Cr 400" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Biotin 2%" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Celmanax Scp" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="A-Max" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Vitimin A 10000" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Vitimin D 500" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>

                            <ColFour firstRow="Vitimin E 50" secondRow="PH" thirdRow="PH" forthRow="PH"></ColFour>


                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
