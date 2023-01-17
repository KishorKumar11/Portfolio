import React from 'react';
import LinkedInIcon from '../../images/linkedin.png';
import GithubIcon from '../../images/github.png';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer-box'>
      <div className='footer-content'>
        <h2 className='footer-detail'>"You've reached the end! Thank you for hanging around. Always remember to love yourself and take care of each other"</h2>
        <a href="https://www.linkedin.com/in/kishorkumar11/" >
          <img src={LinkedInIcon} className='icon1' />
        </a>
        <a href="https://github.com/KishorKumar11">
          <img src={GithubIcon} className='icon2' />
        </a>
        <h4 className='copyright'>© Designed & developed by Kishor Kumar</h4>
      </div>
    </div>
  )
}

export default Footer