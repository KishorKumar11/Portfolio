import React from 'react';
import me from '../../images/me.png';
import loginVid from '../../images/mainVid.mp4';
import LinkedInIcon from '../../images/linkedin.png';
import GithubIcon from '../../images/github.png';
import ScrollDown from '../ScrollDown';
import { Fade } from 'react-reveal';
import './Home.css';

const Home = ({ setActiveNav }) => {
    // const section = document.querySelector('section');
    // window.addEventListener('scroll', () => {

    //   const sectionTop = section.offsetTop;
    //   if(window.scrollY >= sectionTop) {
    //     setActiveNav = "#home";
    //   }
    // })

    return (
        <div>
            <section class="home" id="home">
                <video src={loginVid} autoPlay loop muted className="back-video" alt="" />
                <div class="intro">
                    <Fade delay={350}>
                        <h1>
                            Hey I'm{' '}
                            <span>
                                <b>Kishor Kumar</b>
                            </span>
                        </h1>
                        <p>
                            Your friendly neighbourhood citizen from Singapore <br></br>
                            passionate about frontend engineering and product management
                        </p>
                    </Fade>

                    <a href="https://drive.google.com/file/d/1RwMQJsn8RgLPBPAMP7xe8x3yuNbHnR1X/view?usp=sharing" download className="cv" alt="">
                        DOWNLOAD RESUME 
                    </a>

                    <a href="https://www.linkedin.com/in/kishorkumar11/">
                        <img src={LinkedInIcon} className="icon1" alt="" />
                    </a>
                    <a href="https://github.com/KishorKumar11">
                        <img src={GithubIcon} className="icon2" alt="" />
                    </a>

                    <div class="images">
                        <img src={me} class="me" alt="" />
                    </div>

                    <div className="scroll-icon bounce">
                        <ScrollDown />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
