import React from 'react'
import "./PagesCss/MilkRevenue.css";

export default function MilkRevenue() {
    return (
        <>
            <h1> Some kinda title</h1>
            <div>
                <div className="row">
                    {/* for the Milk Revenue Calc */}
                    <div className="col-4">
                        {/* Cant seem to change the way tables are styled Annoying */}
                        <table id = "MilkRevTable" className="table" style={{height:"10px"}}>
                            <thead>
                                <tr>
                                    <th scope="row" colspan="6">Milk Production and Pricing</th>
                                </tr>
                                <tr>
                                    <th scope="col" colspan="2"> </th>
                                    <th scope="col">Before</th>
                                    <th scope="col">After</th>
                                    <th scope="col" colspan="2">Difference</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <th scope="row" colspan="2">Litres if Milk/cow/day</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Milk Fat %</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Milk Protein %</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Kilos of Milk Fat</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Kilos of Milk Protein</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Kilos milk Fat + Protien</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Milk Fat ($/kg)</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Milk Protein</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Volume Premium</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Quantity Premium</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">Other Deducts</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                
                            </tbody>
                        </table>


            
                    </div>
                    {/* For the income Analysis */}
                    <div className="col-7">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col" colspan="2"> </th>
                                    <th scope="col">Before</th>
                                    <th scope="col">After</th>
                                    <th scope="col" colspan="2">Difference</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" colspan="6">Milk Production and Pricing</th>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                <tr>
                                    <th scope="row" colspan="2">2</th>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td>$    PH</td>
                                    <td colspan="2">Pricing and percent</td>
                                </tr>
                                
                            </tbody>
                        </table>

                    </div>
                    {/* For the control pannel */}
                    <div className="col-1">

                        <a type="button" class="btn btn-secondary">Defaults</a>


                    </div>
                </div>
            </div>
        </>
    )
}

