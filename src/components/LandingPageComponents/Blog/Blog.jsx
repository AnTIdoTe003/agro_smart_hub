import React, { useState } from "react";
import "./style.scss";

import BlogPic from './BlogPic.jpg'
const Instagram = () => {
  const totalCards = 8;
  const cardsToShow = 4;
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
    <div className="main4">
      <div className="blog-main">
        <div className="text">
          <h1 className="text-h1">Blog</h1>
        </div>
        <div className="card-slider">
          <div
            className="cards-container"
            style={{
              transform: `translateX(${-currentCard * (100 / cardsToShow)}%)`,
            }}
          >
            {[...Array(totalCards)].map((_, index) => (
              <div className="blog-card card-style" key={index}>
                <img src={BlogPic} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="navigate-button-instagram">
          <button onClick={handlePrevCard}>Previous</button>
          <button onClick={handleNextCard}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
