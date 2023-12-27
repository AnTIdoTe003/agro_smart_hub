import React from 'react';
import "./style.scss";


function TimerPageButtons(props) {
     return (
          <div onClick={props.data} className='timerPage-button'>
               {props.timerPageicon}
          </div>
     )
}

export default TimerPageButtons;
