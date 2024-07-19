import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pricing.css';

const Pricing = ({ selectedCar, onBooking }) => {
    const { year, make, model } = selectedCar;
    const navigate = useNavigate();

    const getPrice = (basePrice) => {
        let adjustedPrice = basePrice;
        if (year === '2024') adjustedPrice += 10;
        if (make === 'Honda') adjustedPrice += 5;
        if (model === 'Civic') adjustedPrice += 8;
        return adjustedPrice.toFixed(2);
    };

    const handleBooking = (pkg, services) => {
        onBooking(pkg, services);
        navigate('/book');
    };

    return (
        <section id="pricing" className="pricing-section">
            <h2>Convenient And Accessible</h2>
            <p>Auto detailing services you can count on.</p>
            {year && make && model ? (
                <p>Selected Car: {year} {make} {model}</p>
            ) : (
                <p>Select a car model to view prices</p>
            )}
            <div className="pricing-container">
                <div className="pricing-card">
                    <h3>Panda X</h3>
                    <p className="service-type">Express Service</p>
                    <img src="path/to/car-image.png" alt="Panda X" />
                    <h2>${getPrice(65.82)}*</h2>
                    <p className="price-info">
                        Above price is for {year} {make} {model}.*
                        <br />
                        Prices are specific to your vehicle.*
                    </p>
                    <button onClick={() => handleBooking('Panda X', ['Thorough interior vacuum', 'Dashboard, console and door wipe-down', 'Mirror and window cleaning', 'Door jamb cleaning'])}>
                        Book an Appointment
                    </button>
                </div>
                <div className="pricing-card">
                    <h3>Revive</h3>
                    <p className="service-type">Full Detail</p>
                    <img src="path/to/car-image.png" alt="Revive" />
                    <h2>${getPrice(175.46)}*</h2>
                    <p className="price-info">
                        Above price is for {year} {make} {model}.*
                        <br />
                        Prices are specific to your vehicle.*
                    </p>
                    <button onClick={() => handleBooking('Revive', ['Meticulous detailing of the dashboard, console, cup holders, & doors', 'Full-scale steam cleaning of the interior', 'Treatment and conditioning for leather seats'])}>
                        Book an Appointment
                    </button>
                </div>
                <div className="pricing-card">
                    <h3>Black</h3>
                    <p className="service-type">Full Detail + Protection</p>
                    <img src="path/to/car-image.png" alt="Black" />
                    <h2>${getPrice(271.96)}*</h2>
                    <p className="price-info">
                        Above price is for {year} {make} {model}.*
                        <br />
                        Prices are specific to your vehicle.*
                    </p>
                    <button onClick={() => handleBooking('Black', ['Interior ceramic coating', 'Car paint iron decontamination', 'Wheel iron decontamination'])}>
                        Book an Appointment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
