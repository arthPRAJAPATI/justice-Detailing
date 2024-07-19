import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <img src={review.image} alt={review.name} className="review-image" />
            <h3>{review.name}</h3>
            <p>{review.company}</p>
            <p className="review-text">"{review.text}"</p>
            <div className="review-rating">
                {'⭐'.repeat(review.rating)}
            </div>
        </div>
    );
};

export default ReviewCard;
