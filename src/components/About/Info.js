import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bxs-award"></i>
                <h3 className="about__title">Scholar</h3>
                <span className="about__subtitle">LTA</span>
            </div>

            <div className="about__box">
                <i class="bx bxs-briefcase"></i>
                <h3 className="about__title">Entreprenuer</h3>
                <span className="about__subtitle">Tranquilio</span>
            </div>

            <div className="about__box">
                <i class="bx bxs-graduation"></i>
                <h3 className="about__title">Student</h3>
                <span className="about__subtitle">NUS</span>
            </div>
        </div>
    );
};

export default Info;
