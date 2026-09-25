import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ProjectItems = ({ item }) => {
  const label = item.platform === "Web" ? "Live website" : `Live on ${item.platform}`;

  return (
    <a
      href={item.link}
      className="project__card card"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="project__img" src={item.image} alt={item.title} />
      <div className="project__body">
        <h3 className="project__title">{item.title}</h3>
        <span className="project__store">{label}</span>
      </div>
      <HiOutlineArrowSmRight className="project__button-icon" />
    </a>
  );
};

export default ProjectItems;
