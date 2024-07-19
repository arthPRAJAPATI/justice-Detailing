import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import './App.css';

const App = () => {
  const [selectedCar, setSelectedCar] = useState({ year: '', make: '', model: '' });
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);

  const handlePriceCheck = (carDetails) => {
    setSelectedCar(carDetails);
  };

  const handleBooking = (pkg, services) => {
    setSelectedPackage(pkg);
    setSelectedServices(services);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection onPriceCheck={handlePriceCheck} />
                <Services />
                <Pricing selectedCar={selectedCar} onBooking={handleBooking} />
                <Reviews />
                <Footer />
              </>
            }
          />
          <Route
            path="/book"
            element={
              <BookingPage
                selectedPackage={selectedPackage}
                selectedServices={selectedServices}
              />
            }
          />
          <Route path="/confirmation" element={<div>Confirmation Page</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
