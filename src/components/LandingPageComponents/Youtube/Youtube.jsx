import React, { useState } from "react";
import "./style.scss";

const Youtube = () => {
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

    <div className="youtube-main">
      <div className="youtube-inner">
        <div className="text">
          <h1 className="text-youtube">Subscribe to receive new youtube video</h1>
        </div>
        <div className="card-slider">
          <div
            className="cards-container"
            style={{
              transform: `translateX(${-currentCard * (100 / cardsToShow)}%)`,
            }}
          >
            {[...Array(totalCards)].map((_, index) => (
              <div className="youtube-card card-style" key={index}>
                <h2>Card {index + 1}</h2>
                <p>This is the content of Card {index + 1}.</p>
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

export default Youtube;
