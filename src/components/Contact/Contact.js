import React from 'react';
import './Contact.css';
import { motion, useReducedMotion } from 'framer-motion';
import { FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ParticleField, MotionSection, fadeUp, slideLeft } from '../../motion';

const Contact = () => {
    const reduce = useReducedMotion();

    const contactInfo = [
        { icon: <FaLinkedin />, title: 'LinkedIn', info: 'Connect with me on LinkedIn', link: 'https://www.linkedin.com/in/kishorkumar11/' },
        { icon: <FaMapMarkerAlt />, title: 'Location', info: 'Singapore', link: '#' }
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, name: 'LinkedIn', link: 'https://www.linkedin.com/in/kishorkumar11/', color: '#0077b5' },
        { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com/KishorKumar11', color: '#333' }
    ];

    return (
        <MotionSection className="contact section" id="contact" gap={0.12}>
            <ParticleField count={14} />

            <motion.h2 className="section__title" variants={fadeUp}>
                Get In Touch
            </motion.h2>

            <motion.p className="contact__description" variants={fadeUp}>
                Let's work together! Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </motion.p>

            <div className="contact__container container">
                <motion.div className="contact__info contact__info--centered" variants={slideLeft}>
                    <h3 className="contact__info-title">Contact Information</h3>
                    {contactInfo.map((info, i) => (
                        <motion.a key={i} href={info.link} className="contact__info-item" whileHover={reduce ? {} : { x: 8, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <div className="contact__info-icon">{info.icon}</div>
                            <div className="contact__info-details">
                                <h4>{info.title}</h4>
                                <span>{info.info}</span>
                            </div>
                        </motion.a>
                    ))}

                    <div className="contact__social">
                        <h4 className="contact__social-title">Follow Me</h4>
                        <div className="contact__social-links">
                            {socialLinks.map((s, i) => (
                                <motion.a
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact__social-link"
                                    style={{ '--social-color': s.color }}
                                    whileHover={reduce ? {} : { scale: 1.18, rotate: 4, backgroundColor: s.color }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="contact__decoration">
                <motion.div className="contact__shape contact__shape-1" animate={reduce ? {} : { y: [0, -20, 0], rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} />
                <motion.div className="contact__shape contact__shape-2" animate={reduce ? {} : { y: [0, 20, 0], rotate: [0, -360] }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }} />
            </div>
        </MotionSection>
    );
};

export default Contact;
