import React from 'react';
import './About.css';
import Info from './Info';
import myPic from '../../images/myPic.jpg';

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
            <h2 className="section__title">About Me</h2>
            <div className="about__container containter grid">
                <img src={myPic} class="about__img" width={400} alt="" />

                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        An optimist, hardworker and most importantly a great listener! I am a <b>Computer Engineering</b> Graduate from the National University of Singapore with a minor in{' '}
                        <b>Mathematics</b> and a concentration in <b>Interactive Digital Media</b>. <br></br> <br></br>
                        When I'm not studying, there is high chance you could spot me at a <b>gym or watching tv shows/movies</b>. Moreover, I <b>draw portraits and play keyboard</b>. Being{' '}
                        <b>versatile</b> is my trademark. My goal is to provide a comfortable life for my parents while enjoying mine to the fullest. I like to incorporate <b>fun</b> in all projects.
                        This way, I am able to proceed with a <b>stress-free</b> journey where knowledge reaches me easily. I love to <b>design and write code</b>. With my passion, I want to leave a
                        splendid legacy and be able to make a <b>change in this world</b>.{' '}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
