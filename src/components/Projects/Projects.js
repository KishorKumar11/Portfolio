import React from 'react';
import './Projects.css';
import AlexPic from '../../images/AlexPic.png';
import mBotPic from '../../images/mBotPic.png';
import FPGAPic from '../../images/FPGAPic.png';
import KuramaPic from '../../images/KuramaPic.png';
import KingsGambitPic from '../../images/KingsGambitPic.jpg';
import GetJackDPic from '../../images/GetJackDPic.png';
import MIOPic from '../../images/MIOPic.jpg';
import DesignPic from '../../images/DesignPic.jpg';

const Projects = ({ setActiveNav }) => {
    // const section = document.querySelector('section');
    // window.addEventListener('scroll', () => {

    //   const sectionTop = section.offsetTop;
    //   if(window.scrollY >= sectionTop) {
    //     setActiveNav = "#projects";
    //   }
    // })

    return (
        <section className="projects" id="projects">
            <h2 className="section__title">Projects</h2>

            <div className="portfolio-content">
                <div className="col">
                    <a href="https://docs.google.com/document/d/1R1OqPS06sV9wHk_WkpTq40PquCBtBhXgDHLtROBaKuY/view" alt="Loading...">
                        <img src={mBotPic} alt="" />
                    </a>

                    <h3>
                        mBot<h4></h4>
                    </h3>

                    <h5>A maze detection robot relying on color detection, IR sensors and ultrasound</h5>
                </div>

                <div className="col">
                    <a href="https://github.com/woodenclock/CG1112-B03-4A" alt="Loading...">
                        <img src={AlexPic} alt="" />
                    </a>

                    <h3>
                        Alex <h4></h4>{' '}
                    </h3>

                    <h5>A search and rescue robot that was built using LiDAR, arduino, raspberry pi 3, color sensor, buzzer, and wheel encoders</h5>
                </div>

                <div className="col">
                    <a href="https://docs.google.com/document/d/1BSP30bwGhRQ4jp_2Q4IT_XzKoD5q-iRPJ9UoeIqqqRM/edit" alt="Loading...">
                        {' '}
                        <img src={FPGAPic} alt="" />{' '}
                    </a>

                    <h3>
                        FPGA Design <h4></h4>{' '}
                    </h3>

                    <h5>Used an FPGA to create an entertaining game coded in verilog using Vivado</h5>
                </div>

                <div className="col">
                    <a href="https://github.com/KishorKumar11/RTOS" alt="">
                        {' '}
                        <img src={KuramaPic} alt="Loading..." />{' '}
                    </a>

                    <h3>
                        RTOS <h4></h4>{' '}
                    </h3>

                    <h5>A remote controlled robot car</h5>
                </div>

                <div className="col">
                    <a href="https://docs.google.com/document/d/1beOyvtbNEGYNWUt3eZeQQ41H9DH2tvUeTfTCP20eYVg/edit#heading=h.5dp1ylp2cjtt" alt="Loading...">
                        {' '}
                        <img src={KingsGambitPic} alt="Loading..." />{' '}
                    </a>

                    <h3>
                        King's Gambit <h4></h4>{' '}
                    </h3>

                    <h5>A 3D chess trainer made using Unreal Engine 4</h5>
                </div>

                <div class="col">
                    <a href="" alt="">
                        <img src={GetJackDPic} alt="Loading..." />{' '}
                    </a>

                    <h3>
                        Get Jack'D <h4></h4>{' '}
                    </h3>

                    <h5>A CLI application that offers workout routine and a todo list for users to modify and follow</h5>
                </div>

                <div class="col">
                    <a href="https://www.figma.com/file/lGEQ2NaUq4o9Um7a1xbISz/CS3240-Group-13-Mall-In-One-team-library?node-id=0%3A1" alt="Loading...">
                        {' '}
                        <img src={MIOPic} alt="Coming soon" />{' '}
                    </a>

                    <h3>
                        Mall in One <h4></h4>{' '}
                    </h3>

                    <h5>
                        An UI/UX project-based web application built using Figma and Balsamiq that allows shoppers to plan ahead before visiting shopping malls by being able to access information such
                        as item availability and address
                    </h5>
                </div>

                <div class="col">
                    <a href="https://docs.google.com/presentation/d/15jbXckEWw3xQA_B75ksqmbDKp5004nnsGsfRyTYxd2c/edit?usp=share_link" alt="Loading...">
                        {' '}
                        <img src={DesignPic} alt="Coming soon" />{' '}
                    </a>

                    <h3>
                        Tracken <h4></h4>{' '}
                    </h3>

                    <h5>A Social Media Tracker App design done on Figma</h5>
                </div>
            </div>
        </section>
    );
};

export default Projects;
