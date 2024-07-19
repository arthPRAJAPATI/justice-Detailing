import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';

const Pricing = ({ selectedCar }) => {
    const navigate = useNavigate();
    const isCarSelected = selectedCar.year && selectedCar.make && selectedCar.model;

    const handleBooking = () => {
        if (isCarSelected) {
            navigate('/book', { state: { selectedCar } });
        }
    };

    return (
        <section className="pricing-section" id="pricing">
            <h2>Convenient And Accessible</h2>
            <p>Auto detailing services you can count on.</p>
            {isCarSelected ? (
                <p className="selected-car">
                    Selected Car: {selectedCar.year} {selectedCar.make} {selectedCar.model}
                </p>
            ) : (
                <p className="select-car-message">Select a car model to view prices</p>
            )}
            <div className="pricing-container">
                <div className="pricing-card">
                    <h3>Panda X</h3>
                    <p>Express Service</p>
                    {isCarSelected && <p className="price">$65.82*</p>}
                    <p>*Above price is for {selectedCar.year || 'your selected year'} {selectedCar.make || 'your selected make'} {selectedCar.model || 'your selected model'}.</p>
                    <button onClick={handleBooking} disabled={!isCarSelected}>Book an Appointment</button>
                </div>
                <div className="pricing-card">
                    <h3>Revive</h3>
                    <p>Full Detail</p>
                    {isCarSelected && <p className="price">$175.46*</p>}
                    <p>*Above price is for {selectedCar.year || 'your selected year'} {selectedCar.make || 'your selected make'} {selectedCar.model || 'your selected model'}.</p>
                    <button onClick={handleBooking} disabled={!isCarSelected}>Book an Appointment</button>
                </div>
                <div className="pricing-card">
                    <h3>Black</h3>
                    <p>Full Detail + Protection</p>
                    {isCarSelected && <p className="price">$271.96*</p>}
                    <p>*Above price is for {selectedCar.year || 'your selected year'} {selectedCar.make || 'your selected make'} {selectedCar.model || 'your selected model'}.</p>
                    <button onClick={handleBooking} disabled={!isCarSelected}>Book an Appointment</button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
