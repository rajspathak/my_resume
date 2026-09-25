import React from 'react';
import Projects from './Projects';
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <span className="section__subtitle">Portfolio</span>
        <h2 className="section__title">Apps I've shipped</h2>

        <Projects />
    </section>
  );
}

export default Portfolio;