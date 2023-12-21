import React from 'react';
import "./style.scss";
import { CiTempHigh } from "react-icons/ci";
import { BsMoisture } from "react-icons/bs";
import { CiCloudDrizzle } from "react-icons/ci";
import Tempcomponent from './components/Tempcomponent';


function Dashboard() {
     return (
          <div className='dashboard'>
               <div className='Weather-report'>
                    <Tempcomponent classname='Weather-div for-color' iconname={<CiTempHigh className="Temp-icon" />} tempValue="+24℃" tempName="Air Temp" tempPerformance="good"
                         performanceDivClassName="performance-show show1"
                    />
                    <Tempcomponent classname='Weather-div for-color' iconname={<BsMoisture className="Temp-icon" />} tempValue="72%" tempName="Soil Moisture" tempPerformance="High"
                         performanceDivClassName="performance-show show1"
                    />
                    <Tempcomponent classname='Weather-div normal' iconname={<CiCloudDrizzle className="Temp-icon" />} tempValue="-2mm" tempName="Precipitation" tempPerformance="low"
                         performanceDivClassName="performance-show show2"
                    />
               </div>
               <div className='dashboard-bottom'>
                    <div className='map'>MAP</div>
                    <div className='rightBottom'>DON'T KNOW</div>
               </div>
          </div>
     )
}

export default Dashboard
