import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // API logic would go here
        alert('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="section-padding contact-section" id="contact">
            <div className="contact-overlay"></div>
            <div className="container contact-container">
                <motion.div
                    className="glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="heading-serif" style={{ marginBottom: '10px' }}>Start a Conversation</h2>
                    <p style={{ color: '#94A3B8', marginBottom: '30px' }}>We are ready to assist with your global requirements.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="form-control"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="How can we help?"
                                className="form-control"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="btn-primary"
                            style={{ width: '100%', border: 'none', cursor: 'pointer' }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            SEND MESSAGE
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;
