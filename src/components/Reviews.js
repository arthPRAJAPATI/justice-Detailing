import React from 'react';
import ReviewCard from './ReviewCard';
import './Reviews.css';

const reviews = [
    {
        image: 'path/to/image1.jpg',
        name: 'John Doe',
        company: 'New Balance',
        text: 'WebDAM meets our needs perfectly. For file sharing, we have found that organization and security are simple to manage.',
        rating: 5,
    },
    {
        image: 'path/to/image2.jpg',
        name: 'Jane Smith',
        company: 'Symantec',
        text: 'Our visual team creates a lot of graphics. With WebDAM, we now have a central repository for managing, accessing, and controlling our assets.',
        rating: 5,
    },
    {
        image: 'path/to/image3.jpg',
        name: 'Mark Johnson',
        company: 'Cal State LA',
        text: 'Ease-of-use and flexibility is a reason to buy WebDAM. If you need a DAM, get this one.',
        rating: 5,
    },
];

const Reviews = () => {
    return (
        <section className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </section>
    );
};

export default Reviews;
