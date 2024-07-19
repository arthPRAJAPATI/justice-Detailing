import React, { useState } from 'react';
import './HeroSection.css';

const HeroSection = ({ onPriceCheck }) => {
    const [year, setYear] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onPriceCheck({ year, make, model });
    };

    return (
        <section className="hero-section">
            <div className="hero-container">
                <h1>Select from the best car detailers near you</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required />
                    <input type="text" placeholder="Make" value={make} onChange={(e) => setMake(e.target.value)} required />
                    <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} required />
                    <button type="submit">See my price</button>
                </form>
            </div>
        </section>
    );
};

export default HeroSection;
