import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleSmoothScroll = (e, target) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <header>
            <div className="header-container">
                <RouterLink to="/" className="logo-link">
                    <div className="logo">Panda Hub</div>
                </RouterLink>
                <nav>
                    <ul>
                        <li>
                            {isHomePage ? (
                                <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
                            ) : (
                                <RouterLink to="/#services" onClick={(e) => handleSmoothScroll(e, 'services')}>Services</RouterLink>
                            )}
                        </li>
                        <li>
                            {isHomePage ? (
                                <ScrollLink to="pricing" smooth={true} duration={500}>Pricing</ScrollLink>
                            ) : (
                                <RouterLink to="/#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>Pricing</RouterLink>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
