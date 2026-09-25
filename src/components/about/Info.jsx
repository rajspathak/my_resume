import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const stats = [
    { icon: HiOutlineDesktopComputer, value: "4.8 yrs", label: "Experience" },
    { icon: HiOutlineTerminal, value: "11+", label: "Projects completed" },
    { icon: HiOutlineSparkles, value: "24/7", label: "Online support" },
];

const Info = () => {
  return (
    <div className="about__info grid">
        {stats.map(({ icon: Icon, value, label }) => (
            <div className="about__box card" key={label}>
                <Icon className="about__icon" />
                <h3 className="about__title">{value}</h3>
                <span className="about__subtitle">{label}</span>
            </div>
        ))}
    </div>
  );
}

export default Info;
