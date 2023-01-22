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
            <a href="https://docs.google.com/document/d/1R1OqPS06sV9wHk_WkpTq40PquCBtBhXgDHLtROBaKuY/view" alt="Loading..."><img src={mBotPic} alt="" /></a>
           
                <h3>mBot <h4><i class='bx bx-link-external'></i></h4> </h3>
               
            </div>
        </div>

        <div className="col">
            <div className="layer">
            <a href="https://github.com/woodenclock/CG1112-B03-4A" alt="Loading..."><img src={AlexPic} alt=""/></a>
            
                <h3>Alex <h4><i class='bx bx-link-external'></i></h4> </h3>
            </div>
        </div>

        <div className="col">
            <div className="layer">
            <a href="https://docs.google.com/document/d/1BSP30bwGhRQ4jp_2Q4IT_XzKoD5q-iRPJ9UoeIqqqRM/edit" alt="Loading..."> <img src={FPGAPic} alt=""/> </a>
            
                <h3>FPGA Design <h4><i class='bx bx-link-external'></i></h4> </h3>
            </div>
        </div>

        <div className="col">
        <div className="layer">
            <a href="/#" alt=""> <img src={KuramaPic} alt="Loading..."/> </a>
            
                <h3>RTOS <h4><i class='bx bx-link-external'></i></h4> </h3>
            
            </div>
        </div>

        <div className="col">
        <div className="layer">
            <a href="https://docs.google.com/document/d/1beOyvtbNEGYNWUt3eZeQQ41H9DH2tvUeTfTCP20eYVg/edit#heading=h.5dp1ylp2cjtt" alt="Loading..."> <img src={KingsGambitPic} alt="Loading..."/> </a>
            
                <h3>King's Gambit <h4><i class='bx bx-link-external'></i></h4> </h3>
            </div>
        </div>

        <div class="col">
        <div class="layer">
            <a href="" alt=""><img src={GetJackDPic} alt="Loading..."/> </a>
            
                <h3>Get Jack'D <h4><i class='bx bx-link-external'></i></h4> </h3>
            </div>
        </div>

        <div class="col">
        <div class="layer">
            <a href="https://www.figma.com/file/lGEQ2NaUq4o9Um7a1xbISz/CS3240-Group-13-Mall-In-One-team-library?node-id=0%3A1" alt="Loading..."> <img src={MIOPic} alt="Coming soon" /> </a>
            
                <h3>Mall in One <h4><i class='bx bx-link-external'></i></h4> </h3>
            </div>
        </div>

        <div class="col">
        <div class="layer">
            <a href="https://docs.google.com/presentation/d/15jbXckEWw3xQA_B75ksqmbDKp5004nnsGsfRyTYxd2c/edit?usp=share_link" alt="Loading..."> <img src={DesignPic} alt="Coming soon" /> </a>
            
                <h3>Interaction Design <h4><i class='bx bx-link-external'></i></h4> </h3>
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