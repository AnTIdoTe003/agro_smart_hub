import React, { useState, useEffect } from 'react';
import "./style.scss";
import TimerPageButtons from './components/TimerPageButtons';
import { GrPowerReset } from "react-icons/gr";
import { VscDebugContinue } from "react-icons/vsc";
import { RiCornerDownRightFill } from "react-icons/ri";
import NumberSelector from './components/Numberselector';
// import TimerData from './data';



function TimerPage() {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [second, setSecond] = useState(0);
  const [stop, setStop] = useState(false);
  const [timeData, setTimeData] = useState([]);

  const startTime = () => {
    if (stop === false) {
      setStop(true);
    } else if (stop === true) {
      setStop(false)
    }
  }

  const Reset = () => {
    setHour(0);
    setMin(0);
    setSecond(0);
    setStop(false);
  }

  useEffect(() => {
    let interval = null;
    if (stop === true) {
      interval = setInterval(() => {
        setSecond(second + 1);
        if (second === 59) {
          setMin(min + 1);
          setSecond(0);
          if (min === 59) {
            setHour(hour + 1);
            setMin(0);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval)
  });


  return (
    <div className='timer-page'>
      <div className='onof-timer'>
        <p className='timer-page-heading set-margin'>Timer</p>
        <p className='timer-count set-margin'>{hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min}:{second < 10 ? "0" + second : second}</p>
        <p className='speed'>1500rpm</p>
        <div className='timer-page-buttons set-margin'>
          <TimerPageButtons data={Reset} timerPageicon={<GrPowerReset className='timerPage-icon' />} />
          <TimerPageButtons data={startTime} timerPageicon={<VscDebugContinue className='timerPage-icon' />} />
          <TimerPageButtons data={startTime} timerPageicon={<RiCornerDownRightFill className='timerPage-icon' />} />
          <TimerPageButtons data={startTime} timerPageicon={<GrPowerReset className='timerPage-icon' />} />
        </div>
        <NumberSelector timername="Timer1" />
        <NumberSelector timername="Timer2" />
        <NumberSelector timername="Timer3" />
      </div>
      <div className='stored-data'>
        <p className='stored-data-heading'>How Long Your Motor Running Before</p>
        <div className='show-time'>
          <p className='show-date'>22/12/2023--12:05</p>
          <p className='show-tim'>01:20:09</p>
        </div>
      </div>
    </div>
  )
}

export default TimerPage
