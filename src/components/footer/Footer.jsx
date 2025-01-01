import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Raj!</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://github.com/rajspathak" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/rajspathak" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>   
                 <a href="https://www.instagram.com/rajspathak_/" className="home__social-icon" target="_blank">
                                <FiInstagram />
                            </a> 
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;