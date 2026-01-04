import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo_transparent.png';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img src={logoImage} alt="Saravana Overseas Logo" className="logo-img" />
                        <h2>SARAVANA <span>OVERSEAS</span></h2>
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Desktop Navigation */}
                <ul className="nav-links desktop-nav">
                    <li><a href="#home" className="active">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#blogs">Blogs</a></li>

                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Mobile Navigation */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-nav-links">
                        <li><a href="#home" onClick={closeMobileMenu}>Home</a></li>
                        <li><a href="#products" onClick={closeMobileMenu}>Products</a></li>
                        <li><a href="#blogs" onClick={closeMobileMenu}>Blogs</a></li>
                        <li><a href="#careers" onClick={closeMobileMenu}>Careers</a></li>
                        <li><a href="#about" onClick={closeMobileMenu}>About Us</a></li>
                        <li><a href="#contact" onClick={closeMobileMenu}>Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
            )}
        </nav>
    );
};

export default Navbar;
