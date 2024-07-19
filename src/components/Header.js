import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

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
                                <RouterLink to="/#services">Services</RouterLink>
                            )}
                        </li>
                        <li>
                            {isHomePage ? (
                                <ScrollLink to="pricing" smooth={true} duration={500}>Pricing</ScrollLink>
                            ) : (
                                <RouterLink to="/#pricing">Pricing</RouterLink>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
