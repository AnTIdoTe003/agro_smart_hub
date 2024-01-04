import React from 'react';
import "./style.scss";

function FreePlanButton(props) {
     return (
          <div className={props.classname}>
               <button className='freePlan-button'>Free Plan</button>
          </div>
     )
}

export default FreePlanButton;
