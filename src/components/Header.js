import React from 'react';
import ProfileIcons from '../assets/header-icon.jpg';

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="text-content" >
        <h1>Raj Pathak</h1>
        <p>Frontend Developer | MCA Graduate</p>
        <p>Noida, Gautam Buddha Nagar, U.P 201301</p>
        <p>Email: <a href="mailto:rajpathak9999@gmail.com">rajpathak9999@gmail.com</a> | Phone: <a href="tel:+9608676958">+91 960-867-6958</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/rajspathak" target="_blank" rel="noopener noreferrer">linkedin.com/in/rajspathak</a></p>
      </div>
      {/* <div className="image-container" style={{ paddingRight:40,}}>
        <img src={ProfileIcons} alt="Raj Pathak" className="profile-image"/>
      </div> */}
    </div>
  </header>
);

export default Header;