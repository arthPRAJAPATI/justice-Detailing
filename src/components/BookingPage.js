import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CalendlyEmbed from './CalendlyEmbed';
import './BookingPage.css';

const BookingPage = ({ selectedPackage, selectedServices }) => {
    const [address, setAddress] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the booking logic here, e.g., sending the data to a server

        // Navigate to confirmation or home page after booking
        navigate('/confirmation');
    };

    return (
        <div className="booking-page">
            <h2>Book an Appointment</h2>
            <p><strong>Package:</strong> {selectedPackage}</p>
            <p><strong>Services:</strong></p>
            <ul>
                {selectedServices.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Select Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Select Time:</label>
                    <select
                        id="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        required
                    >
                        <option value="">Select a time</option>
                        <option value="7:00 AM">7:00 AM</option>
                        <option value="8:00 AM">8:00 AM</option>
                        <option value="9:00 AM">9:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="1:00 PM">1:00 PM</option>
                        <option value="2:00 PM">2:00 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:00 PM">4:00 PM</option>
                        <option value="5:00 PM">5:00 PM</option>
                    </select>
                </div>
                <button type="submit">Confirm Booking</button>
            </form>
            <CalendlyEmbed url="https://calendly.com/your-calendly-url" />
        </div>
    );
};

export default BookingPage;
