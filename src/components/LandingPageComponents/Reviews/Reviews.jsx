import React, { useState } from "react";

import "./style.scss";

const Reviews = () => {
  const totalCards = 7;
  const cardsToShow = 3;
  const [currentCard, setCurrentCard] = useState(0);

  const handlePrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? totalCards - cardsToShow : prevCard - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === totalCards - cardsToShow ? 0 : prevCard + 1
    );
  };


  return (
    <div className="main1">
    <div className="reviews-main">
      <div className="reviews-text">
        <h1>Excellent</h1>
        <p className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
        <p className="star-para">Based on 1500 Reviews</p>
      </div>
      <div className="card-slider">
        <div
          className="cards-container"
          style={{
            transform: `translateX(${-currentCard * (100 / cardsToShow)}%)`,
          }}
        >
          {[...Array(totalCards)].map((_, index) => (
            <div className="reviews-card card-style" key={index}>
              <h2>Card {index + 1}</h2>
              <p>This is the content of Card {index + 1}.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="navigate-button">
        <button onClick={handlePrevCard}>Previous</button>
        <button onClick={handleNextCard}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default Reviews;
