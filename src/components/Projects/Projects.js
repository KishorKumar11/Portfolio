import React from 'react';
import './Projects.css';
import AlexPic from '../../images/AlexPic.png';
import mBotPic from '../../images/mBotPic.png';
import FPGAPic from '../../images/FPGAPic.png';
import KuramaPic from '../../images/KuramaPic.png';
import KingsGambitPic from '../../images/KingsGambitPic.jpg';
import GetJackDPic from '../../images/GetJackDPic.png';
import MIOPic from '../../images/MIOPic.jpg';

const Projects = ({setActiveNav}) => {
    
    // const section = document.querySelector('section');
    // window.addEventListener('scroll', () => {
      
    //   const sectionTop = section.offsetTop;
    //   if(window.scrollY >= sectionTop) {
    //     setActiveNav = "#projects";
    //   }
    // })

  return (
    <section className='projects' id="projects">
      <h2 className='section__title'>Projects</h2>

      <div className="portfolio-content">
        <div className="col">
        <div className="layer">
            <img src={mBotPic} alt=""/>
           
                <h3>mBot</h3>
                <h5><a href="https://docs.google.com/document/d/1R1OqPS06sV9wHk_WkpTq40PquCBtBhXgDHLtROBaKuY/view" alt="Loading..."> </a>Click to view documentation</h5>
            </div>
        </div>

        <div className="col">
            <div className="layer">
            <img src={AlexPic} alt=""/>
            
                <h3>Alex</h3>
                <h5><a href="https://github.com/woodenclock/CG1112-B03-4A" alt="Loading..."> </a>Click to view documentation</h5>
            </div>
        </div>

        <div className="col">
            <div className="layer">
            <img src={FPGAPic} alt=""/>
            
                <h3>FPGA Design</h3>
                <h5><a href="https://docs.google.com/document/d/1BSP30bwGhRQ4jp_2Q4IT_XzKoD5q-iRPJ9UoeIqqqRM/edit" alt="Loading..."> </a>Click to view documentation</h5>
            </div>
        </div>

        <div className="col">
        <div className="layer">
            <img src={KuramaPic} alt="Loading..."/>
            
                <h3>RTOS</h3>
                <h5><a href="/#"> </a>Click to view documentation</h5>
            </div>
        </div>

        <div className="col">
        <div className="layer">
            <img src={KingsGambitPic} alt="Loading..."/>
            
                <h3>King's Gambit</h3>
                <h5><a href="https://docs.google.com/document/d/1beOyvtbNEGYNWUt3eZeQQ41H9DH2tvUeTfTCP20eYVg/edit#heading=h.5dp1ylp2cjtt" alt="Loading..."> </a>Click to view documentation</h5>
            </div>
        </div>

        <div class="col">
        <div class="layer">
            <img src={GetJackDPic} alt="Loading..."/>
            
                <h3>Get Jack'D</h3>
                <h5><a href="/#"> </a>Click to view documentation</h5>
            </div>
        </div>

        <div class="col">
        <div class="layer">
            <img src={MIOPic} alt="Coming soon" />
            
                <h3>Mall in One</h3>
                <h5><a href="https://www.figma.com/file/lGEQ2NaUq4o9Um7a1xbISz/CS3240-Group-13-Mall-In-One-team-library?node-id=0%3A1" alt="Loading..."> </a>Click to view documentation</h5>
            </div>
        </div>

        {/* <div class="col">
            <img src={""} alt="Coming soon" />
            <div class="layer">w
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