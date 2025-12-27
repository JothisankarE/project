import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Testimonial = () => {
    const quotes = [
        "We're not just moving cargo – we're moving ideas, opportunities, and dreams across borders.",
        "Empowering every entrepreneur with the tools to compete globally and efficiently.",
        "Building the future of cross-border commerce through innovation and strategic logistics.",
        "Connecting manufacturers and buyers across continents with absolute transparency and care."
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % quotes.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [quotes.length]);

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 },
        },
        exit: {
            opacity: 0,
            transition: { staggerChildren: 0.02, staggerDirection: -1 }
        }
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
            scale: 0.9,
            filter: "blur(5px)",
        },
        exit: {
            opacity: 0,
            y: -20,
            scale: 0.9,
            filter: "blur(5px)",
            transition: {
                duration: 0.3
            }
        },
    };

    return (
        <section className="section-padding testimonial-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="quote-icon"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        "
                    </motion.div>

                    <div style={{ minHeight: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                className="testimonial-text"
                                variants={container}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                style={{ margin: 0 }}
                            >
                                {quotes[index].split(' ').map((word, i) => (
                                    <motion.span
                                        variants={child}
                                        className="word-animate"
                                        key={i}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        className="director-info"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
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

