import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const InfoSection = () => {
    return (
        <section className="section-padding info-section">
            <div className="container">
                <div className="info-grid">
                    <motion.div
                        className="info-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="heading-serif">Redefining <span style={{ color: '#1976D2' }}>International Commerce</span></h2>
                        <p>
                            <strong>SARAVANA OVERSEAS</strong> is not just another trading company – we're a tech-enabled
                            logistics startup disrupting traditional supply chains. Born from a vision to make global trade
                            accessible, transparent, and efficient for businesses of all sizes.
                        </p>
                        <p>
                            We leverage cutting-edge technology and strategic partnerships to connect manufacturers,
                            suppliers, and buyers across continents. Our agile approach eliminates bottlenecks, reduces
                            costs, and accelerates delivery timelines – transforming how the world trades.
                        </p>
                        <p>
                            From our innovation hub in Coimbatore, we're building the future of cross-border commerce,
                            one shipment at a time. Join us in our mission to democratize global trade.
                        </p>
                    </motion.div>

                    <motion.div
                        className="info-visual"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                            alt="Global Innovation"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
