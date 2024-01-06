import React from "react";
import "./style.scss";
import Picture from "../../../images/third-section.jpg";

const ThirdSection = () => {
  return (
    <section className="info-section">
      <div className="left-content">
        <div className="text-content">
          <h1>Main Title</h1>
          <h2>We’re Leader in Smart irrigation</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Suscipit odio vel nesciunt eos iste! Consequatur mollitia culpa harum  <br/>expedita praesentium tenetur quas saepe illum nam?
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
