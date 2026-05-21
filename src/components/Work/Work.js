import React, { useState } from 'react';
import NUSLogo from '../../images/NUSLogo.png';
import TUMLogo from '../../images/TUMLogo.png';
import UMLogo from '../../images/UMLogo.png';
import GIISLogo from '../../images/GIISLogo.jpeg';
import AveliosLogo from '../../images/AveliosLogo.jpeg';
import LTALogo from '../../images/LTALogo.jpg';
import PragmaLogo from '../../images/PragmaLogo.jpeg';
import TranquilioLogo from '../../images/TranquilioLogo.jpeg';
import { motion, AnimatePresence } from 'framer-motion';
import { ParticleField, MotionSection, fadeUp } from '../../motion';
import SectionBubbles from '../SectionBubbles';
import './Work.css';

const EDU = [
    { side: 'left', logo: NUSLogo, title: 'Undergraduate', subtitle: 'National University of Singapore', date: 'Aug 2020 - May 2024' },
    { side: 'right', logo: TUMLogo, title: 'Exchange Student', subtitle: 'Technical University of Munich', date: 'July 2023 - Dec 2023' },
    { side: 'left', logo: UMLogo, title: 'Exchange Student', subtitle: 'University of Michigan', date: 'Aug 2022 - Dec 2022' },
    { side: 'right', logo: GIISLogo, title: 'High School', subtitle: 'Global Indian International School', date: 'Jul 2010 - Mar 2018' },
];

const WORK = [
    { side: 'left', logo: LTALogo, title: 'Full Stack Developer', subtitle: 'Land Transport Authority, Singapore', date: 'July 2024 - Present' },
    { side: 'right', logo: AveliosLogo, title: 'Software Engineer Intern', subtitle: 'Avelios Medical GmbH, Germany', date: 'July 2023 - Dec 2023' },
    { side: 'left', logo: LTALogo, title: 'Software Engineer Intern', subtitle: 'Land Transport Authority, Singapore', date: 'May 2023 - Jun 2023' },
    { side: 'right', logo: TranquilioLogo, title: 'Software Developer', subtitle: 'Tranquilio, Singapore', date: 'Apr 2022 - Aug 2022' },
    { side: 'left', logo: PragmaLogo, title: 'Cyber Security Analyst Intern', subtitle: 'Pragma, Singapore', date: 'May 2021 - Jul 2021' },
];

const cardSlideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const cardSlideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const QualContent = ({ item, align }) => (
    <div className={`qual-content qual-content--${align}`}>
        <h3 className="qual-content__title">{item.title}</h3>
        <p className="qual-content__sub">{item.subtitle}</p>
        <span className="qual-content__date">
            <i className="uil uil-calendar-alt" /> {item.date}
        </span>
    </div>
);

const TimelineRow = ({ item, idx, isLast }) => {
    const isLeft = item.side === 'left';

    return (
        <div className="qual-row">
            <motion.div
                className="qual-slot qual-slot--left"
                variants={isLeft ? cardSlideLeft : { hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {isLeft && <QualContent item={item} align="right" />}
            </motion.div>

            <div className="qual-node">
                <motion.div
                    className="qual-badge"
                    initial={{ scale: 0, rotate: -15, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 18, delay: idx * 0.08 }}
                    whileHover={{ scale: 1.12, rotate: 6, transition: { duration: 0.2 } }}
                >
                    <img src={item.logo} alt={item.subtitle} className="qual-badge__img" />
                </motion.div>
                {!isLast && (
                    <motion.div
                        className="qual-connector"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: idx * 0.08 + 0.2 }}
                        style={{ transformOrigin: 'top' }}
                    />
                )}
            </div>

            <motion.div
                className="qual-slot qual-slot--right"
                variants={!isLeft ? cardSlideRight : { hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {!isLeft && <QualContent item={item} align="left" />}
            </motion.div>
        </div>
    );
};

const Work = () => {
    const [tab, setTab] = useState(1);
    const items = tab === 1 ? EDU : WORK;

    return (
        <MotionSection className="work" id="work" gap={0.12}>
            <div className="work-decoration"></div>
            <ParticleField count={14} color="radial-gradient(circle, #7dd4e0, #4ab8c8)" glow="rgba(74,184,200,0.55)" />
            <SectionBubbles />

            <motion.h2 className="section__title" variants={fadeUp}>
                Qualifications
            </motion.h2>

            <div className="qualification__container container">
                <motion.div className="qualification__tabs" variants={fadeUp}>
                    <button
                        className={`qualification__button ${tab === 1 ? 'qualification__active' : ''}`}
                        onClick={() => setTab(1)}
                        type="button"
                    >
                        {tab === 1 && (
                            <motion.span
                                className="qualification__tab-pill"
                                layoutId="qual-tab-pill"
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                        <span className="qualification__tab-label">
                            <i className="uil uil-graduation-cap qualification__icon"></i> Education
                        </span>
                    </button>
                    <button
                        className={`qualification__button ${tab === 2 ? 'qualification__active' : ''}`}
                        onClick={() => setTab(2)}
                        type="button"
                    >
                        {tab === 2 && (
                            <motion.span
                                className="qualification__tab-pill"
                                layoutId="qual-tab-pill"
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                        <span className="qualification__tab-label">
                            <i className="uil uil-briefcase-alt qualification__icon"></i> Work Experience
                        </span>
                    </button>
                </motion.div>

                <div className="qualification__sections">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={tab}
                            className="qual-timeline"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.35 }}
                        >
                            {items.map((item, i) => (
                                <TimelineRow
                                    key={`${tab}-${i}`}
                                    item={item}
                                    idx={i}
                                    isLast={i === items.length - 1}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </MotionSection>
    );
};

export default Work;
