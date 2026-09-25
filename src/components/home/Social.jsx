import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/rajspathak" className="home__social-icon" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/rajspathak" className="home__social-icon" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/rajspathak_/" className="home__social-icon" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FiInstagram />
            </a>
            <a href="https://www.facebook.com/raj.sunaina.pathak/" className="home__social-icon" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FiFacebook />
            </a>
        </div>
    );
}

export default Social;
