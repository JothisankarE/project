import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            title: 'Innovation Hub',
            description: 'Our Coimbatore headquarters',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
        },
        {
            id: 2,
            title: 'Team Collaboration',
            description: 'Building the future together',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 3,
            title: 'Global Operations',
            description: 'Connecting continents',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 4,
            title: 'Smart Warehousing',
            description: 'Tech-enabled storage solutions',
            image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 5,
            title: 'Client Success',
            description: 'Growing together',
            image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 6,
            title: 'Vision 2030',
            description: 'Scaling new heights',
            image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
        }
    ];

    return (
        <section className="section-padding gallery-section" id="media">
            <div className="container">
                <center>
                    <span className="section-tag">Visual Timeline</span>
                </center>
                <motion.h2
                    className="section-title heading-serif"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Our Gallery
                </motion.h2>

                <div className="gallery-marquee-container">
                    <div className="gallery-track">
                        {/* Render items twice for seamless scrolling */}
                        {[...galleryItems, ...galleryItems].map((item, index) => (
                            <div key={`${item.id}-${index}`} className="gallery-card">
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div className="gallery-overlay-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
