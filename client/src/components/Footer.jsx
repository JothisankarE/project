import React from 'react';
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';
import '../index.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-brand-col">
                        <h3 className="footer-logo-text">SARAVANA <span>OVERSEAS</span></h3>
                        <p className="footer-desc">
                            Revolutionizing global trade with tech-enabled logistics. We bridge borders to make international commerce accessible, transparent, and seamless for everyone.
                        </p>
                        <div className="social-icons footer-socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                                <FaYoutube />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Contact Column (Moved to Center for better balance) */}
                    <div className="footer-contact-col">
                        <h3>Get In Touch</h3>
                        <ul className="footer-contact-list">
                            <li>
                                <span>Support</span>
                                <a href="mailto:saravanaoverseas1@gmail.com">saravanaoverseas1@gmail.com</a>
                            </li>
                            <li>
                                <span>Sales</span>
                                <a href="mailto:rraja_77@yahoo.co.in">rraja_77@yahoo.co.in</a>
                            </li>
                            <li>
                                <span>Call Us</span>
                                <a href="tel:+919047385702">+91 90473 85702</a>
                            </li>
                            <li>
                                <span>Visit Us</span>
                                <p className="footer-address">
                                    Kondayanpalayam, Annur,<br />
                                    Coimbatore, Tamil Nadu - 641110
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div className="footer-links-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#products">Our Products</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#blogs">Insights & Blogs</a></li>
                            <li><a href="#contact">Contact Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Saravana Overseas. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
