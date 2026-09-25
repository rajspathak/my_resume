import React from 'react';
import "./footer.css";
import Social from '../home/Social';

const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <div className="footer__top">
                <div>
                    <a href="#home" className="footer__title">Raj Pathak<span className="nav__logo-dot">.</span></a>
                    <p className="footer__tagline">React Native Developer building apps for iOS, Android and the web.</p>
                </div>
                <Social />
            </div>

            <div className="footer__bottom">
                <ul className="footer__list">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <a href={href} className="footer__link">{label}</a>
                        </li>
                    ))}
                </ul>
                <span className="footer__copy">© {new Date().getFullYear()} Raj Pathak. All rights reserved.</span>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
