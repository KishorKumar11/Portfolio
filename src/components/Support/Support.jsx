import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    FaHeart,
    FaPhoneAlt,
    FaWhatsapp,
    FaComments,
    FaLifeRing,
    FaHospital,
    FaHandsHelping,
    FaUserFriends,
    FaExclamationTriangle,
    FaHandHoldingHeart,
    FaShieldAlt,
} from 'react-icons/fa';
import { MotionSection, Tilt3D, fadeUp, scaleIn, popIn, stagger } from '../../motion';
import SectionBubbles from '../SectionBubbles';
import './Support.css';

const HELPLINES = [
    {
        icon: <FaComments />,
        name: 'National Mindline',
        crisis: false,
        hours: 'Available 24/7',
        blurb: 'For stress, anxiety, and emotional distress. A great first point of contact — call or message.',
        actions: [
            { type: 'call', label: 'Call 1771', href: 'tel:1771' },
            { type: 'whatsapp', label: 'WhatsApp 6669 1771', href: 'https://wa.me/6566691771' },
        ],
    },
    {
        icon: <FaLifeRing />,
        name: 'Samaritans of Singapore (SOS)',
        crisis: true,
        hours: 'Available 24/7',
        blurb: 'For crisis situations and suicide prevention. If you are in immediate danger, reach out here first.',
        actions: [{ type: 'call', label: 'Call 1767', href: 'tel:1767' }],
    },
    {
        icon: <FaHospital />,
        name: 'Institute of Mental Health (IMH)',
        crisis: true,
        hours: 'Available 24/7',
        blurb: 'Emergency line for psychiatric emergencies and urgent mental health support.',
        actions: [{ type: 'call', label: 'Call 6389 2222', href: 'tel:63892222' }],
    },
    {
        icon: <FaHandsHelping />,
        name: 'Singapore Association for Mental Health (SAMH)',
        crisis: false,
        hours: 'Weekdays, 9am – 6pm',
        blurb: 'For general counseling and mental wellness guidance during the week.',
        actions: [{ type: 'call', label: 'Call 1800 283 7019', href: 'tel:18002837019' }],
    },
    {
        icon: <FaUserFriends />,
        name: 'CHAT',
        crisis: false,
        hours: 'Youth support',
        blurb: 'For youth-specific mental health assessments and support in a safe space.',
        actions: [{ type: 'call', label: 'Call 6493 6500', href: 'tel:64936500' }],
    },
];

const NOTES = [
    {
        icon: <FaExclamationTriangle />,
        tone: 'crisis',
        title: 'Immediate crisis',
        text: 'If you are in immediate danger or a crisis, please prioritise SOS (1767) or the IMH emergency line (6389 2222).',
    },
    {
        icon: <FaHandHoldingHeart />,
        tone: 'guide',
        title: 'Support & guidance',
        text: 'Navigating stress, anxiety, or emotional distress? Mindline is an excellent first point of contact — they offer both call and WhatsApp options.',
    },
    {
        icon: <FaShieldAlt />,
        tone: 'safe',
        title: 'Why reach out?',
        text: 'Reaching out is a sign of strength, not weakness. These services provide a safe, confidential, and non-judgmental space to help you find your way forward.',
    },
];

const HelplineCard = ({ line, reduce }) => (
    <motion.div className={`support-card${line.crisis ? ' support-card--crisis' : ''}`} variants={scaleIn}>
        <Tilt3D className="support-card-inner" max={8} scale={1.02}>
            {line.crisis && <span className="support-crisis-badge">Immediate crisis</span>}
            <div className="support-card-icon">{line.icon}</div>
            <h3 className="support-card-title">{line.name}</h3>
            <span className="support-card-hours">{line.hours}</span>
            <p className="support-card-desc">{line.blurb}</p>
            <div className="support-card-actions">
                {line.actions.map((a) => (
                    <motion.a
                        key={a.label}
                        href={a.href}
                        target={a.type === 'whatsapp' ? '_blank' : undefined}
                        rel={a.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                        className={`support-action support-action--${a.type}`}
                        whileHover={reduce ? {} : { scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        {a.type === 'whatsapp' ? <FaWhatsapp /> : <FaPhoneAlt />}
                        <span>{a.label}</span>
                    </motion.a>
                ))}
            </div>
        </Tilt3D>
    </motion.div>
);

const CRISIS_LINES = HELPLINES.filter((l) => l.crisis);
const GENERAL_LINES = HELPLINES.filter((l) => !l.crisis);

const Support = () => {
    const reduce = useReducedMotion();

    return (
        <MotionSection className="support section" id="support" gap={0.1}>
            <SectionBubbles />

            <motion.div className="support-quote" variants={fadeUp}>
                <span className="support-quote-icon"><FaHeart /></span>
                <p>
                    I'm big on Mental Health and every life matters.
                    <br />
                    <span className="support-quote-em">Seeking help is a sign of strength!</span>
                </p>
            </motion.div>

            <motion.h2 className="section__title" variants={fadeUp}>
                Mental Health Support
            </motion.h2>

            <motion.p className="support-subtitle" variants={fadeUp}>
                If you or someone you know is feeling overwhelmed, please remember that you are not alone —
                professional support is available.
            </motion.p>

            <motion.div className="support-cards support-cards--crisis container" variants={stagger(0.12, 0.1)}>
                {CRISIS_LINES.map((line) => (
                    <HelplineCard key={line.name} line={line} reduce={reduce} />
                ))}
            </motion.div>

            <motion.div className="support-cards container" variants={stagger(0.12, 0.1)}>
                {GENERAL_LINES.map((line) => (
                    <HelplineCard key={line.name} line={line} reduce={reduce} />
                ))}
            </motion.div>

            <motion.div className="support-notes container" variants={popIn}>
                <h3 className="support-notes-title">A quick note for those seeking help</h3>
                <div className="support-notes-grid">
                    {NOTES.map((n) => (
                        <div key={n.title} className={`support-note support-note--${n.tone}`}>
                            <span className="support-note-icon">{n.icon}</span>
                            <div>
                                <h4 className="support-note-heading">{n.title}</h4>
                                <p className="support-note-text">{n.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </MotionSection>
    );
};

export default Support;
