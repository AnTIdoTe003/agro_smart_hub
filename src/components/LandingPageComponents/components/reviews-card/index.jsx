import React from 'react';
import "./style.scss";

function ReviewsCard(props) {
     return (
          <div className='reviews-card card-style'>
               <div className='google-profile'>
                    <div className={props.picName}></div>
                    <div className='user-name'><p className='name1'>{props.name}</p><p className='name2'>{props.date}</p></div>
                    <div className='logo-google'></div>
               </div>
               <p className="star">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
               <p>Nice customer service 💯 products are very good quality 💯 it helps for all farmers 🫂</p>
          </div>
     )
}

export default ReviewsCard;
