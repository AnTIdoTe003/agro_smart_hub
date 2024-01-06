 import React from 'react';
import './style.scss';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="background-image"></div>
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Adipisci non aspernatur amet ducimus enim eaque?</p>
         
        <button>Learn More</button>
      </div>
    </section>
  );
};

export default WelcomeSection;
