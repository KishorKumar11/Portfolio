import React from 'react';
import './Skills.css';
import Cplusplus from '../../images/c-.png';
import js from '../../images/js.png';
import git from '../../images/git.png';
import figma from '../../images/figma.png';
import react from '../../images/react.png';
import tailwindcss from '../../images/tailwindcss.png';
import java from '../../images/java.png';
import html5 from '../../images/html-5.png';
import css3 from '../../images/css-3.png';
import nodejs from '../../images/nodejs.png';
import Carousel from 'react-elastic-carousel';

const Skills = ({setActiveNav}) => {

  // const section = document.querySelector('section');
  // window.addEventListener('scroll', () => {
    
  //   const sectionTop = section.offsetTop;
  //   if(window.scrollY >= sectionTop) {
  //     setActiveNav = "#skills";
  //   }
  // })

  return (
    <section className='skills' id="skills">
      <h2 className='section__title'>Skills</h2>
    
    <div className='skills-box'>
      <div className='carousel-wrapper'>
        <Carousel>
          <div className='skills-content'>
            <div><img src={Cplusplus} width={60} /><br></br>C++</div>
            <div><img src={js} width={60} /><br></br>Javascript</div>
            <div><img src={figma} width={60} /><br></br>Figma</div>
            <div><img src={react} width={60} /><br></br>React</div>
            <div><img src={java} width={60} /><br></br>Java</div>
          </div>
            <div className='skills-content'>
            <div><img src={html5} width={70} /><br></br>HTML5</div>
            <div><img src={tailwindcss} width={70} /><br></br>Tailwindcss</div>
            <div><img src={nodejs} width={70} /><br></br>Nodejs</div>
            <div><img src={git} width={70} /><br></br>Git</div>
            <div><img src={css3} width={70} /><br></br>CSS3</div>
          </div>
            
        </Carousel>
      </div>
    </div>

    </section>
  )
}

export default Skills