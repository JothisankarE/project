import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'Smart Agriculture Solutions',
            description: 'Connecting farmers to global markets with premium organic produce, grains, and specialty crops.',
            image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 2,
            name: 'Industrial Equipment Hub',
            description: 'Sourcing cutting-edge machinery and tools for manufacturing, construction, and automation.',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 3,
            name: 'Textile Innovation',
            description: 'Premium fabrics, sustainable materials, and fashion-forward textiles for global brands.',
            image: 'https://images.unsplash.com/photo-1558769132-cb1aea3c8565?q=80&w=2074&auto=format&fit=crop'
        },
        {
            id: 4,
            name: 'Tech & Electronics',
            description: 'Latest gadgets, components, and smart devices delivered to your doorstep.',
            image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop'
        },
        {
            id: 5,
            name: 'Gourmet & Specialty Foods',
            description: 'Authentic flavors from around the world – spices, beverages, and artisanal products.',
            image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=2070&auto=format&fit=crop'
        },
        {
            id: 6,
            name: 'Raw Materials Marketplace',
            description: 'Industrial chemicals, polymers, and specialty materials for manufacturers.',
            image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    return (
        <section className="section-padding products-section" id="products">
            <div className="container">
                <motion.h2
                    className="section-title heading-serif"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    What We Trade
                </motion.h2>

                <div className="product-grid">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="product-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <img src={product.image} alt={product.name} className="product-img" />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
