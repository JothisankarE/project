import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../index.css';

const LocationMap = () => {
    return (
        <section className="section-padding location-section" id="location">
            <div className="container">
                <motion.h2
                    className="section-title heading-serif"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Visit Our Innovation Hub
                </motion.h2>

                <div className="location-grid">
                    <motion.div
                        className="location-info glass-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="heading-serif" style={{ marginBottom: '30px', color: 'var(--accent-blue)' }}>Let's Connect</h3>

                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <div>
                                <h4>Headquarters</h4>
                                <p>
                                    D. No. 3/98, Sri Sendhur Garden Phase-2<br />
                                    Varathaiyangarpalayam<br />
                                    Kondayanpalayam (Post), Annur (Taluk)<br />
                                    Coimbatore (District)<br />
                                    Tamil Nadu, India - 641110
                                </p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <div>
                                <h4>Call Us</h4>
                                <p>+91 9047385702</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mon-Sat, 9 AM - 6 PM IST</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <div>
                                <h4>Email</h4>
                                <p>saravanaoverseas1@gmail.com</p>
                                <p>rraja_77@yahoo.co.in</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="map-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4!2d77.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '16px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Saravana Overseas - Coimbatore, Tamil Nadu"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
