import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane, FaGlobe, FaPhone } from 'react-icons/fa';
import '../index.css';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        contact: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value.toUpperCase() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');

        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString();

        // Construct the Gmail URL with pre-filled data
        const subject = formData.subject;

        // Build introduction: "I am [Name]" or "I am [Name] from [Country]."
        let introLine = `I am ${formData.name}`;
        if (formData.country && formData.country.trim() !== '') {
            introLine += ` from ${formData.country}`;
        }
        introLine += '.';

        // Build contact line: only if contact exists
        let contactLine = '';
        if (formData.contact && formData.contact.trim() !== '') {
            contactLine = `You can reach me at: ${formData.contact}`;
        }

        const body = `Dear Saravana Overseas Team,

I am writing to inquire about your services.

${introLine}
${contactLine}

${formData.message}

Thank you for your time and consideration.

Yours faithfully,
${formData.name}`;

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=saravanaoverseas1@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open Gmail in a new tab
        window.open(gmailUrl, '_blank');

        // Show success state
        setStatus('success');
        setFormData({ name: '', country: '', contact: '', subject: '', message: '' });

        // Reset status
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section className="section-padding contact-section" id="contact">
            <div className="container">
                <center><span className="section-tag">Get In Touch</span></center>

                {/* Success Notification Popup */}
                <div className={`notification-popup ${status === 'success' ? 'show-success' : ''}`}>
                    <div className="notification-content">
                        <div className="check-icon">
                            ✓
                        </div>
                        <div className="notification-text">
                            <h4>Message Sent!</h4>
                            <p>We'll get back to you shortly.</p>
                        </div>
                    </div>
                </div>

                {/* Error Notification Popup */}
                {status === 'error' && (
                    <div className="error-popup">
                        <p>Something went wrong. Please try again.</p>
                    </div>
                )}

                <div className="contact-grid-wrapper">
                    <motion.div
                        className="contact-card glass-card"
                        initial={{ opacity: 0, x: -30 }} // Slide in from left
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="contact-header">
                            <h2 className="heading-serif">Start a Conversation</h2>
                            <p>Our experts are ready to streamline your global logistics today.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="modern-form">
                            <div className="input-row">
                                <div className="modern-input-group">
                                    <label><FaUser /> Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        className="modern-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="modern-input-group">
                                    <label><FaGlobe /> Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="Country"
                                        className="modern-input"
                                        value={formData.country}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="input-row" style={{ marginTop: '-10px' }}>
                                <div className="modern-input-group">
                                    <label><FaPhone /> Contact No</label>
                                    <input
                                        type="tel"
                                        name="contact"
                                        placeholder="+91 99999 99999"
                                        className="modern-input"
                                        value={formData.contact}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="modern-input-group">
                                    <label><FaEnvelope /> Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Inquiry Subject"
                                        className="modern-input"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="modern-input-group">
                                <label><FaCommentAlt /> Your Message</label>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your requirements..."
                                    className="modern-input"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn-send-message"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'loading'}
                                style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                            >
                                <span>{status === 'loading' ? 'SENDING...' : 'SEND MESSAGE'}</span>
                                {status !== 'loading' && <FaPaperPlane className="send-icon" />}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right Column: Map */}
                    <motion.div
                        className="map-column glass-card"
                        initial={{ opacity: 0, x: 30 }} // Slide in from right
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ padding: 0, overflow: 'hidden', minHeight: '400px', height: '100%' }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.4!2d77.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="100%"
                            style={{ border: 0, display: 'block', minHeight: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Saravana Overseas Location"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
