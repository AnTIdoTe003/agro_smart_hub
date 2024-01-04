import React from 'react';
import "./style.scss";
import { CiTempHigh } from "react-icons/ci";

function Tempcomponent(props) {
     return (
          <div className={props.classname}>
               {props.iconname}
               <p className='show-airTemp-value airTemp-margin'>{props.tempValue}</p>
               <p className='airTemp-name airTemp-margin'>{props.tempName}</p>
               <div className={props.performanceDivClassName}><p>{props.tempPerformance}</p></div>
          </div>
     )
}

export default Tempcomponent;
