import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Testimonial = () => {
    const text = "We're not just moving cargo – we're moving ideas, opportunities, and dreams across borders. Our mission is to empower every entrepreneur with the tools to compete globally, backed by seamless logistics.";
    const words = text.split(' ');

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8,
            filter: "blur(10px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <section className="section-padding testimonial-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="quote-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        "
                    </motion.div>

                    <motion.p
                        className="testimonial-text"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {words.map((word, index) => (
                            <motion.span
                                variants={child}
                                className="word-animate"
                                key={index}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.p>

                    <motion.div
                        className="director-info"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                    >
                        <h4>SARAVANA OVERSEAS</h4>
                        <span>Building the Future of Global Trade</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;
