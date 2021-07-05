import React from 'react'
import MilkRevenueCalc from './MilkRevenueCalc';
import SideBar from './SideBar';
import FeedCostCalc from './FeedCostCalc';
import "../PagesCss/MilkRevenue.css";

export default function MilkRevenue() {
    return (
        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 boxContainer mt-4 mb-4">
                    <FeedCostCalc></FeedCostCalc>
                </div>
            </div>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 boxContainer">
                    <MilkRevenueCalc></MilkRevenueCalc>
                </div>
                <div className="col ">
                    <SideBar></SideBar>
                </div>
                
            </div>
            
        </>
    )
}

