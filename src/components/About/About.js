import React from 'react';
import './About.css';
import Info from './Info';
import myPic from '../../images/myPic.jpg';
import { motion } from 'framer-motion';

const About = ({ setActiveNav }) => {
    // const section = document.querySelector('section');
    // window.addEventListener('scroll', () => {

    //   const sectionTop = section.offsetTop;
    //   if(window.scrollY >= sectionTop) {
    //     setActiveNav = "#about";
    //   }
    // })

    return (
        <section class="about" id="about">
            <div className="about-decoration"></div>

            {/* Floating particles effect */}
            <div className="about-particles">
                {[...Array(12)].map((_, i) => {
                    const randomX = Math.random() * 100;
                    const randomY = Math.random() * 100;
                    const randomMoveX = (Math.random() - 0.5) * 40;
                    const randomMoveY = (Math.random() - 0.5) * 40;

                    return (
                        <motion.div
                            key={i}
                            className="about-particle"
                            animate={{
                                y: [0, randomMoveY, 0],
                                x: [0, randomMoveX, 0],
                                opacity: [0.4, 0.8, 0.4],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
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

            <h2 className="section__title">About Me</h2>
            <div className="about__container container">
                <div className="about__content">
                    <img src={myPic} class="about__img" width={400} alt="" />
                    <div className="about__data">
                        <Info />
                        <p className="about__description">
                            An optimist, hardworker and most importantly a great listener! I am a <b>Computer Engineering</b> Graduate from the National University of Singapore with a minor in{' '}
                            <b>Mathematics</b> and a concentration in <b>Interactive Digital Media</b>. <br></br> <br></br>
                            When I'm not studying, there is high chance you could spot me at a <b>gym or watching tv shows/movies</b>. Moreover, I <b>draw portraits and play keyboard</b>. Being{' '}
                            <b>versatile</b> is my trademark. My goal is to provide a comfortable life for my parents while enjoying mine to the fullest. I like to incorporate <b>fun</b> in all
                            projects. This way, I am able to proceed with a <b>stress-free</b> journey where knowledge reaches me easily. I love to <b>design and write code</b>. With my passion, I
                            want to leave a splendid legacy and be able to make a <b>change in this world</b>.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
