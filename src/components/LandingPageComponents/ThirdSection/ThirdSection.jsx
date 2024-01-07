import React from "react";
import "./style.scss";
import Picture from "../../../images/third-section.jpg";

const ThirdSection = () => {
  return (
    <section className="info-section">
      <div className="left-content">
        <div className="text-content">
          <h1>Agriculture automation</h1>
          <h2>We are leader in agriculture automation</h2>
          <p>
          Agro Smart Hub Pvt Ltd, a forefront player in agriculture automation,<br></br>specializes in delivering complete irrigation and fertigation automation <br></br>systems. As an industry expert, our Agro Smart Hub ensures cutting-edge <br></br>solutions for efficient and automated farming practices.
          </p>
          <button>WHO WE ARE</button>
        </div>
      </div>
      <div className="right-content">
        <img src={Picture} alt="Picture" />
      </div>
    </section>
  );
};

export default ThirdSection;
