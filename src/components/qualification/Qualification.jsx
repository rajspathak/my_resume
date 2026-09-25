import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section">
        <span className="section__subtitle">Qualification</span>
        <h2 className="section__title">My journey</h2>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <HiOutlineBriefcase className="qualification__icon" />
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Master In Computer Application</h3>
                            <span className="qualification__subtitle">Galgotias University, Greater Noida, UP</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon"/>
                                2020-2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Bachelor In Computer Application</h3>
                            <span className="qualification__subtitle">B.D Evening College, Patna, Bihar</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2016-2019
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Senior React Native Developer</h3>
                            <a href="https://ecarter.co/" className="qualification__company" target="_blank" rel="noopener noreferrer">Ecarter Technology</a>
                            <span className="qualification__subtitle">Noida, Uttar Pradesh</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Sep 2022 – Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">React Native Developer</h3>
                            <a href="https://www.sourcesoftsolutions.com/" className="qualification__company" target="_blank" rel="noopener noreferrer">Source Soft Solution</a>
                            <span className="qualification__subtitle">Noida, Uttar Pradesh</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                Feb 2022 – Sep 2022
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;