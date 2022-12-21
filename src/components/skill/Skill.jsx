import React from "react";
import './skill.css';
import BackEnd from "./BackEnd";
import Frontend from "./Frontend";

const Skill = () => {
  return (
    <section className="skills section" id="skill">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skill__container container grid">
        <Frontend />
        <BackEnd />
      </div>
    </section>
  );
};

export default Skill;
