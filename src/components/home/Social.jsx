import React from "react";
import {  FiGithub, FiLinkedin, FiInstagram} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/rajspathak" className="home__social-icon" target="_blank">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/rajspathak" className="home__social-icon" target="_blank">
                <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/rajspathak_/" className="home__social-icon" target="_blank">
                <FiInstagram />
            </a>
        </div> 
    ); 
}

export default Social;