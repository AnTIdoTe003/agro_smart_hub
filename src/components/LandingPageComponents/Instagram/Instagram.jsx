import React, { useState } from "react";
import "./style.scss";
import InstaCard from "../components/insta-card";
import { FaInstagram } from "react-icons/fa6";

const Instagram = () => {
  const totalCards = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  const cardsToShow = 4;
  const [currentCard, setCurrentCard] = useState(0);

  const handlePrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? 8 - cardsToShow : prevCard - 1
    );
  };


  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 8 - cardsToShow ? 0 : prevCard + 1
    );
  };

  return (
    <div className="main2">
      <div className="insta-main">
      <div className="text">
        <h1 className="text-h1">We are On Instagram</h1>
      </div>
      <div className="card-slider">
        <div
          className="cards-container"
          style={{
            transform: `translateX(${-currentCard * (100 / cardsToShow)}%)`,
          }}
        >
          {totalCards.map((item, index) => (
            <InstaCard/>
          ))}
        </div>
      </div>
      <div className="navigate-button-instagram">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
      <div className="follow-button">
        <FaInstagram/>
        <p>follow on instagram</p>
      </div>
      </div>
    </div>
  );
};

export default Instagram;
