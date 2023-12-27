import React, { useState } from 'react';
import "./style.scss";
import freePlan, { proPlan } from '../../Data';




function PricingPage() {
  const [state, setState] = useState(true);
  const [price, setPrice] = useState(10);

  const changePrice = () => {
    if (state === true) {
      setState(false);
    } else if (state === false) {
      setState(true)
    }

    if (state === true) {
      setPrice(100);
    } else if (state === false) {
      setPrice(10);
    }
  }
  return (
    <div className='pricing-page'>
      <div className='free-plan-div'>
        <div className='freeplan-top-div'>
          <p className='free-plan-name1'>Free Plan</p>
          <p className='free-plan-name2'>Free</p>
          <p className='free-plan-name3'>Lifetime</p>
        </div>
        {freePlan.map((info) => {
          return <div className='plans'><div className='plan-image'></div><h1 className='plan-details'>{info}</h1></div>
        })}
      </div>
      <div className='pro-plan-div'>
        <div className='proplan-top-div'>
          <div className='button-div'><p>Monthly</p><input type='checkbox' id='toggle-button'></input><label onClick={changePrice} for='toggle-button'></label><p>Yearly</p></div>
          <p className='pro-plan-name2'>Pro Plan</p>
          <p className='pro-plan-name3'>${price}</p>
        </div>
        {proPlan.map((info2) => {
          return <div className='plans2'><div className='plan-pro-image'></div><h1 className='plan-pro-details'>{info2}</h1></div>
        })}
        <button className='getStarted-button'>Get Started</button>
      </div>
    </div>
  )
}

export default PricingPage
