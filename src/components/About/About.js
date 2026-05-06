import React from 'react';
import './About.css';
import Info from './Info';
import myPic from '../../images/myPic.jpg';
import { motion, useReducedMotion } from 'framer-motion';
import { ParticleField, MotionSection, MotionItem, fadeUp, slideLeft, slideRight } from '../../motion';

const About = () => {
    const reduce = useReducedMotion();
    return (
        <MotionSection as={motion.section} className="about" id="about" gap={0.15}>
            <div className="about-decoration"></div>
            <ParticleField count={12} color="linear-gradient(45deg, #5389c7, #7597de)" />

            <motion.h2 className="section__title" variants={fadeUp}>
                About Me
            </motion.h2>

            <div className="about__container container">
                <div className="about__content">
                    <MotionItem variants={slideLeft} className="about__img-wrap">
                        <motion.img
                            src={myPic}
                            className="about__img"
                            alt="Kishor portrait"
                            whileHover={reduce ? {} : { rotate: [0, -2, 2, 0], scale: 1.04 }}
                            transition={{ duration: 0.6 }}
                        />
                        <span className="about__img-glow" />
                    </MotionItem>

                    <MotionItem variants={slideRight} className="about__data">
                        <Info />
                        <p className="about__description">
                            An optimist, hardworker and most importantly a great listener! I am a <b>Computer Engineering</b> Graduate from the National University of Singapore with a minor in <b>Mathematics</b> and a concentration in <b>Interactive Digital Media</b>.<br />
                            <br />
                            When I'm not studying, there is high chance you could spot me at a <b>gym or watching tv shows/movies</b>. Moreover, I <b>draw portraits and play keyboard</b>. Being <b>versatile</b> is my trademark. My goal is to provide a comfortable life for my parents while enjoying mine to the fullest. I like to incorporate <b>fun</b> in all projects. This way, I am able to proceed with a <b>stress-free</b> journey where knowledge reaches me easily. I love to <b>design and write code</b>. With my passion, I want to leave a splendid legacy and be able to make a <b>change in this world</b>.
                        </p>
                    </MotionItem>
                </div>
            </div>
        </MotionSection>
    );
};

export default About;
