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

    const years = ['2022', '2023', '2024'];
    const makes = ['Honda', 'Toyota', 'Ford'];
    const models = ['Civic', 'Camry', 'Mustang'];

    return (
        <section className="hero-section">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Select from the best car detailers near you</h1>
                    <p>All from the comfort of your home</p>
                    <form className="hero-form" onSubmit={handleSubmit}>
                        <select value={year} onChange={(e) => setYear(e.target.value)} required>
                            <option value="" disabled>Year</option>
                            {years.map((y) => (
                                <option key={y} value={y}>{y}</option>
                            ))}
                        </select>
                        <select value={make} onChange={(e) => setMake(e.target.value)} required>
                            <option value="" disabled>Make</option>
                            {makes.map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                        <select value={model} onChange={(e) => setModel(e.target.value)} required>
                            <option value="" disabled>Model</option>
                            {models.map((m) => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                        <button type="submit">See my price</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
