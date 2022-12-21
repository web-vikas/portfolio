import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Fresher</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">3 Project's</span>
      </div>
      <div className="about__box">
        <i className="bx bx-desktop about__icon"></i>
        <h3 className="about__title">Learning</h3>
        <span className="about__subtitle">New Technology</span>
      </div>
    </div>
  );
};
export default Info;
