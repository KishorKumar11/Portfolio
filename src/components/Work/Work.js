import React, { useState, useEffect } from 'react';
import NUSLogo from '../../images/NUSLogo.png';
import TUMLogo from '../../images/TUMLogo.png';
import UMLogo from '../../images/UMLogo.png';
import GIISLogo from '../../images/GIISLogo.jpeg';
import AveliosLogo from '../../images/AveliosLogo.jpeg';
import LTALogo from '../../images/LTALogo.jpg';
import PragmaLogo from '../../images/PragmaLogo.jpeg';
import TranquilioLogo from '../../images/TranquilioLogo.jpeg';
import './Work.css';

const Work = ({ setActiveNav }) => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="work" id="work">
            <h2 className="section__title">Qualifications</h2>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Work Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className="qualification__data">
                        <div></div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={NUSLogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Undergraduate</h3>
                                <span className="qualification__subtitle">National University of Singapore</span>
                                <span className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2020 - May 2024
                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Exchange Student</h3>
                                <span className="qualification__subtitle">Technical University of Munich</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> July 2023 - Dec 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={TUMLogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>

                            <div></div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={UMLogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Exchange Student</h3>
                                <span className="qualification__subtitle">Unviersity of Michigan</span>
                                <span className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Aug 2022 - Dec 2022
                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Global Indian International School</span>
                                <span className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Jul 2010 - Mar 2018
                                </span>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={GIISLogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>

                            <div></div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Engineer Intern</h3>
                                <span className="qualification__subtitle">Avelios Medical GmbH, Germany</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> July 2023 - Dec 2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={AveliosLogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={LTALogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Engineer Intern</h3>
                                <span className="qualification__subtitle">Land Transport Authority, Singapore</span>
                                <span className="qualification__calendar">
                                    <br></br>
                                    <i className="uil uil-calendar-alt"></i> May 2023 - Jun 2023
                                </span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">Tranquilio, Singapore</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> Apr 2022 - Aug 2022
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={TranquilioLogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder">
                                    <img src={PragmaLogo} alt="NUS Logo" className="qualification__logo"/>
                                </span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Cyber Security Analyst Intern</h3>
                                <span className="qualification__subtitle">Pragma, Singapore</span>
                                <span className="qualification__calendar">
                                    <br></br>
                                    <i className="uil uil-calendar-alt"></i> May 2021 - Jul 2021
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
