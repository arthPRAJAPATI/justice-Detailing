import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingPage.css';
import CalendlyEmbed from './CalendlyEmbed'

const BookingPage = () => {
    const location = useLocation();
    const { selectedCar } = location.state || {};

    return (
        <section className="booking-section">
            <h2>Book an Appointment</h2>
            {selectedCar ? (
                <div>
                    <p>Booking for {selectedCar.year} {selectedCar.make} {selectedCar.model}</p>
                    {/* Include your booking form or Calendly embed code here */}
                    <CalendlyEmbed url="https://calendly.com/justicedetailers" />
                </div>
            ) : (
                <p>Please select a car model to proceed with booking.</p>
            )}
        </section>
    );
};

export default BookingPage;
