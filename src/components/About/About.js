import React from 'react';
import './About.css';
import Info from './Info';
import myPic from '../../images/myPic.jpg';
import bgPic from '../../images/background.jpg';

const About = () => {
  return (
    <section class='about' id='about'>
      {/* <img src={bgPic} className='bgimg' /> */}
      <h2 className='section__title'>About Me</h2>
      <div className='about__container containter grid'>
        <img src={myPic} class='about__img' width={400}/>

        <div className='about__data'>
          <Info />
          <p className='about__description'>An optimist, hardworker and most importantly a great listener! 
            I am a Penultimate Computer Engineering Student at the National University of Singapore with a minor in Mathematics. <br></br> <br></br>
            When I'm not studying, there is high chance you could spot me at a gym or watching tv shows/anime. Moreover, I draw and play keyboard. Being versatile is my trademark. My goal is to provide a comfortable life for my parents while enjoying mine to the fullest. I like to incorporate fun in all projects. This way, I am able to proceed with a stress-free journey where knowledge reaches me easily.
            I love to design and write code. With my passion, I want to be able to make a change in this world. </p>
          
        </div>
      </div>

        {/* <div class="about-text">
          <h2>About Me</h2>
          <h4>Be Humble, Be Great</h4>
          <p>An optimist, hardworker and most importantly a great listener! 
            I am a Sophomore at the National University of Singapore. My goal is to provide a comfortable life for my parents while enjoying mine to the fullest. I like to incorporate fun in all projects I work on. In this way, I am able to proceed with a stress-free journey where knowledge reaches me easily.
            I love to design and write code. With my passion, I want to be able to make a change in this world. </p>
          <div class="about-gri">
            <div class="about-in">
              <h5>1. Problem Solving</h5>
            </div>

            <div class="about-in">
              <h5>1. Problem Solving</h5>
            </div>

            <div class="about-in">
              <h5>1. Problem Solving</h5>
            </div>

            <div class="about-in">
              <h5>1. Problem Solving</h5>
            </div>
          </div>
        </div> */}
      </section>
  )
}

export default About