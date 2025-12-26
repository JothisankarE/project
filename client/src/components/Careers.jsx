import React from 'react';
import { motion } from 'framer-motion';
import '../index.css';
import '../sections.css';

const Careers = () => {
    const jobOpenings = [
        {
            id: 1,
            title: 'Logistics Coordinator',
            location: 'Coimbatore, Tamil Nadu',
            type: 'Full-time',
            experience: '2-4 years',
            description: 'Manage international shipments, coordinate with carriers, and ensure timely delivery.',
            skills: ['Supply Chain Management', 'Communication', 'Problem Solving']
        },
        {
            id: 2,
            title: 'Business Development Executive',
            location: 'Coimbatore, Tamil Nadu',
            type: 'Full-time',
            experience: '1-3 years',
            description: 'Identify new business opportunities, build client relationships, and drive revenue growth.',
            skills: ['Sales', 'Negotiation', 'Market Research']
        },
        {
            id: 3,
            title: 'Operations Manager',
            location: 'Coimbatore, Tamil Nadu',
            type: 'Full-time',
            experience: '5+ years',
            description: 'Oversee daily operations, optimize processes, and lead the operations team.',
            skills: ['Leadership', 'Process Optimization', 'Team Management']
        }
    ];

    return (
        <section className="section-padding careers-section" id="careers">
            <div className="container">
                <motion.div
                    className="careers-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title heading-serif">Join Our Team</h2>
                    <p className="careers-subtitle">
                        Be part of a dynamic startup revolutionizing global trade. We're looking for passionate individuals
                        who want to make an impact.
                    </p>
                </motion.div>

                <div className="jobs-grid">
                    {jobOpenings.map((job, index) => (
                        <motion.div
                            key={job.id}
                            className="job-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="job-header">
                                <h3>{job.title}</h3>
                                <span className="job-type">{job.type}</span>
                            </div>
                            <div className="job-details">
                                <span className="job-location">📍 {job.location}</span>
                                <span className="job-experience">💼 {job.experience}</span>
                            </div>
                            <p className="job-description">{job.description}</p>
                            <div className="job-skills">
                                {job.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                            <button className="apply-btn">Apply Now</button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Careers;
