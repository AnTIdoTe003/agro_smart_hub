import React, { useState } from "react";
import ReviewsCard from "../components/reviews-card";
import "./style.scss";
import Reviewpic from "../../../images/review-pic.webp";

const Reviews = () => {
  const totalCards = [
    {class: "user-profile-pic",name: "Sujit"},
    {class: "user-profile-pic",name: "Rafikul"},
    {class: "user-profile-pic",name: "Dharam"},
    {class: "user-profile-pic",name: "sujit"},
    {class: "user-profile-pic",name: "sujit"},
    {class: "user-profile-pic",name: "sujit"},
    {class: "user-profile-pic",name: "sujit"}
  ];
  const cardsToShow = 3;
  const [currentCard, setCurrentCard] = useState(0);

  const handlePrevCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 0 ? 7 - cardsToShow : prevCard - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCard((prevCard) =>
      prevCard === 7 - cardsToShow ? 0 : prevCard + 1
    );
  };


  return (
    <div className="main1">
      <div className="reviews-main">
        <div className="reviews-text">
          <h1>Excellent</h1>
          <p className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
          <p className="star-para">Based on 1500 Reviews</p>
          <div className="google-image"></div>
        </div>
        <div className="card-slider">
          <div
            className="cards-container"
            style={{
              transform: `translateX(${-currentCard * (100 / cardsToShow)}%)`,
            }}
          >
            {totalCards.map((item, index) => (
              <ReviewsCard picName={item.class} name={item.name} date="12/08/2020"/>
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
