import React from 'react';
import './Services.css';

const Services = ({ selectedCar }) => {
    return (
        <section className="services-section" id="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service-card">
                    <h3>Interior Detailing</h3>
                    <p>Thorough cleaning of seats, carpets, and dashboard.</p>
                    {selectedCar.year && <p>Price: $195</p>}
                </div>
                <div className="service-card">
                    <h3>Exterior Detailing</h3>
                    <p>Complete exterior wash, polish, and wax.</p>
                    {selectedCar.year && <p>Price: $85</p>}
                </div>
                <div className="service-card">
                    <h3>Valet Pick-up</h3>
                    <p>Convenient pick-up and drop-off service.</p>
                    {selectedCar.year && <p>Price: $50</p>}
                </div>
                <div className="service-card">
                    <h3>Wax Finish</h3>
                    <p>High-quality wax for a glossy finish.</p>
                    {selectedCar.year && <p>Price: $60</p>}
                </div>
                <div className="service-card">
                    <h3>Ceramic Coating</h3>
                    <p>Long-lasting protection against environmental damage.</p>
                    {selectedCar.year && <p>Price: $1200</p>}
                </div>
                <div className="service-card">
                    <h3>Odor Removal</h3>
                    <p>Professional odor removal service.</p>
                    {selectedCar.year && <p>Price: $100</p>}
                </div>
            </div>
        </section>
    );
};

export default Services;
