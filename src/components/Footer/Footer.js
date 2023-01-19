import React from 'react';
import LinkedInIcon from '../../images/linkedin.png';
import GithubIcon from '../../images/github.png';
import GmailIcon from '../../images/gmail.png';
import "./Footer.css";

const Footer = () => {

  return (
    <div className='footer-box'>
      <div className='footer-content'>
        <h2 className='footer-detail'>"You've reached the end! Thank you for hanging around. Always remember to love yourself and take care of each other. Feel free to contact me!"</h2>
        <a href="https://www.linkedin.com/in/kishorkumar11/" alt="" >
          <img src={LinkedInIcon} className='icon1' alt=""/>
        </a>
        <a href="https://github.com/KishorKumar11" alt="">
          <img src={GithubIcon} className='icon2' alt=""/>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=h.kishorkumar7@gmail.com" alt="">
          <img src={GmailIcon} className='icon2'alt="" />
        </a>
        <h4 className='copyright'>© Designed & developed by Kishor Kumar</h4>
      </div>
    </div>
  )
}

export default Footer