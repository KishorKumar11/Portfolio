import React from 'react';
import './Projects.css';
import AlexPic from '../../images/AlexPic.png';
import mBotPic from '../../images/mBotPic.png';
import FPGAPic from '../../images/FPGAPic.png';
import KuramaPic from '../../images/KuramaPic.png';
import KingsGambitPic from '../../images/KingsGambitPic.jpg';
import GetJackDPic from '../../images/GetJackDPic.png';
import MIOPic from '../../images/MIOPic.jpg';

const Projects = () => {
  return (
    <section className='projects' id="projects">
      <h2 className='section__title'>Projects</h2>

      <div className="portfolio-content">
        <div className="col">
            <img src={mBotPic} />
            <div className="layer">
                <h3>mBot</h3>
                <h5>Popup</h5>
            </div>
        </div>

        <div className="col">
            <img src={AlexPic} />
            <div className="layer">
                <h3>Alex</h3>
                <h5>Popup</h5>
            </div>
        </div>

        <div className="col">
            <img src={FPGAPic} />
            <div className="layer">
                <h3>FPGA Design</h3>
                <h5>Popup</h5>
            </div>
        </div>

        <div className="col">
            <img src={KuramaPic} />
            <div className="layer">
                <h3>RTOS</h3>
                <h5>Popup</h5>
            </div>
        </div>

        <div className="col">
            <img src={KingsGambitPic} />
            <div className="layer">
                <h3>King's Gambit</h3>
                <h5>Popup</h5>
            </div>
        </div>

        <div class="col">
            <img src={GetJackDPic} />
            <div class="layer">
                <h3>Get Jack'D</h3>
                <h5>Popup</h5>
            </div>
        </div>

        <div class="col">
            <img src={MIOPic} alt="Coming soon" />
            <div class="layer">
                <h3>Mall in One</h3>
                <h5>Popup</h5>
            </div>
        </div>

        {/* <div class="col">
            <img src={""} alt="Coming soon" />
            <div class="layer">
                <h3>Capstone Project</h3>
                <h5>Popup</h5>
            </div>
        </div>

        <div class="col">
            <img src={""} alt="Coming soon" />
            <div class="layer">
                <h3>Project Trident</h3>
                <h5>Popup</h5>
            </div>
        </div> */}
      </div>
    </section>
  )
}

export default Projects