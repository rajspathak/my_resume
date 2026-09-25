import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Social from "./Social";

const tags = ["React Native", "React.js", "Next.js", "Node.js", "TypeScript", "GraphQL"];

const Data = () => {
  return (
    <div className="home__data">
        <span className="home__badge">React Native Developer</span>
        <h1 className="home__title">
            Hi, I'm <span className="home__title-accent">Raj Pathak</span>
        </h1>
        <p className="home__description">
            I build React Native, React and Next.js apps that ship to the App Store and Google Play, from polished UI to in-app purchases and AI features.
        </p>

        <ul className="home__tags">
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>

        <div className="home__actions">
            <a href="#contact" className="button button--flex">
                Say Hello
                <HiOutlineArrowSmRight className="button__icon" />
            </a>
            <a href="#portfolio" className="button button--ghost button--flex">
                View my work
            </a>
        </div>

        <Social />
    </div>
  )
}

export default Data;
