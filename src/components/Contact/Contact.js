import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = ({ setActiveNav }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        {
            icon: <FaLinkedin />,
            title: 'LinkedIn',
            info: 'Connect with me on LinkedIn',
            link: 'https://www.linkedin.com/in/kishorkumar11/'
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Location',
            info: 'Singapore',
            link: '#'
        }
    ];

    const socialLinks = [
        {
            icon: <FaLinkedin />,
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/kishorkumar11/',
            color: '#0077b5'
        },
        {
            icon: <FaGithub />,
            name: 'GitHub',
            link: 'https://github.com/KishorKumar11',
            color: '#333'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section className="contact section" id="contact">
            {/* Floating particles effect */}
            <div className="contact-particles">
                {[...Array(14)].map((_, i) => {
                    const randomX = Math.random() * 100;
                    const randomY = Math.random() * 100;
                    const randomMoveX = (Math.random() - 0.5) * 45;
                    const randomMoveY = (Math.random() - 0.5) * 45;

                    return (
                        <motion.div
                            key={i}
                            className="contact-particle"
                            animate={{
                                y: [0, randomMoveY, 0],
                                x: [0, randomMoveX, 0],
                                opacity: [0.4, 0.8, 0.4],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 3.5 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2.5,
                                ease: 'easeInOut'
                            }}
                            style={{
                                left: `${randomX}%`,
                                top: `${randomY}%`
                            }}
                        />
                    );
                })}
            </div>

            <motion.h2 className="section__title" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                Get In Touch
            </motion.h2>

            <motion.p className="contact__description" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                Let's work together! Whether you have a project in mind or just want to connect, I'd love to hear from you.
            </motion.p>

            <motion.div className="contact__container container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                <div className="contact__content">
                    <motion.div className="contact__info" variants={itemVariants}>
                        <h3 className="contact__info-title">Contact Information</h3>

                        {contactInfo.map((info, index) => (
                            <motion.a key={index} href={info.link} className="contact__info-item" whileHover={{ x: 10, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact__social-link"
                                        style={{ '--social-color': social.color }}
                                        whileHover={{
                                            scale: 1.2,
                                            rotate: 5,
                                            backgroundColor: social.color
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.form className="contact__form" onSubmit={handleSubmit} variants={itemVariants}>
                        <h3 className="contact__form-title">Send Me a Message</h3>

                        <div className="contact__form-group">
                            <motion.input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="contact__form-input"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </div>

                        <div className="contact__form-group">
                            <motion.input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="contact__form-input"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </div>

                        <div className="contact__form-group">
                            <motion.input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="contact__form-input"
                                required
                                whileFocus={{ scale: 1.02 }}
                            />
                        </div>

                        <div className="contact__form-group">
                            <motion.textarea
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="contact__form-input contact__form-textarea"
                                required
                                whileFocus={{ scale: 1.02 }}
                            ></motion.textarea>
                        </div>

                        <motion.button type="submit" className="contact__form-button button" whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                            Send Message
                            <FaPaperPlane className="button__icon" />
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>

            {/* Background decoration */}
            <div className="contact__decoration">
                <motion.div
                    className="contact__shape contact__shape-1"
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
                <motion.div
                    className="contact__shape contact__shape-2"
                    animate={{
                        y: [0, 20, 0],
                        rotate: [0, -180, -360]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />
            </div>
        </section>
    );
};

export default Contact;
