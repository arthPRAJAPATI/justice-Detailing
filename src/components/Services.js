import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service-card">
                    <h3>Interior Detailing</h3>
                    <p>$195</p>
                </div>
                <div className="service-card">
                    <h3>Exterior Detailing</h3>
                    <p>$85</p>
                </div>
                <div className="service-card">
                    <h3>Valet Pick-up</h3>
                    <p>$50</p>
                </div>
                <div className="service-card">
                    <h3>Wax Finish</h3>
                    <p>$60</p>
                </div>
                <div className="service-card">
                    <h3>Ceramic Coating</h3>
                    <p>$1,200</p>
                </div>
                <div className="service-card">
                    <h3>Odor Removal</h3>
                    <p>$100</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
