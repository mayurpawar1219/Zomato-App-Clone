import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-left'>
          <img src={assets.logo} alt='Zomato Logo' className='footer-logo' />
        </div>
        
        <div className='footer-center'>
          <h2>ABOUT ZOMATO</h2>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        
        <div className='footer-center'>
          <h2>ZOMAVERSE</h2>
          <ul>
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Zomato Live</li>
            <li>Zomaland</li>
            <li>Weather Union</li>
          </ul>
        </div>
        
        <div className='footer-center'>
          <h2>FOR RESTAURANTS</h2>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>
        
        <div className='footer-center'>
          <h2>LEARN MORE</h2>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
          </ul>
        </div>
        
        <div className='footer-right'>
          <h2>SOCIAL LINKS</h2>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='Facebook' />
            <img src={assets.twitter_icon} alt='Twitter' />
            <img src={assets.linkedin_icon} alt='LinkedIn' />
          </div>
          <div className='footer-apps'>
            <img src={assets.appstore_icon} alt='App Store' />
            <img src={assets.playstore_icon} alt='Google Play' />
          </div>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        &copy; 2025 Zomato Ltd. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
