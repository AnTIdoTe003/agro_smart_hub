import React from "react";
import "./style.scss";
import { CiTempHigh } from "react-icons/ci";
import { BsMoisture } from "react-icons/bs";
import { CiCloudDrizzle } from "react-icons/ci";
import Tempcomponent from "./components/Tempcomponent";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="Weather-report">
        <Tempcomponent
          classname="Weather-div for-color"
          iconname={<CiTempHigh className="Temp-icon" />}
          tempValue="+24℃"
          tempName="Air Temp"
          tempPerformance="good"
          performanceDivClassName="performance-show show1"
        />
        <Tempcomponent
          classname="Weather-div for-color"
          iconname={<BsMoisture className="Temp-icon" />}
          tempValue="72%"
          tempName="Soil Moisture"
          tempPerformance="High"
          performanceDivClassName="performance-show show1"
        />
        <Tempcomponent
          classname="Weather-div normal"
          iconname={<CiCloudDrizzle className="Temp-icon" />}
          tempValue="-2mm"
          tempName="Precipitation"
          tempPerformance="low"
          performanceDivClassName="performance-show show2"
        />
      </div>
      <div className="dashboard-bottom">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5228495961433!2d88.34314047469783!3d22.484558179554522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ecc09b4691%3A0x7f99d48523fd066a!2sCalcutta%20Institute%20of%20Engineering%20And%20Management%20(CIEM)!5e0!3m2!1sen!2sin!4v1703276159719!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{border:"0"}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="rightBottom">DON'T KNOW</div>
      </div>
    </div>
  );
}

export default Dashboard;
