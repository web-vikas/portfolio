import React from "react";

const BackEnd = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">Sqlite</h3>
              <span className="skills__level">Intermidate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">MySql</h3>
              <span className="skills__level">Intermidate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div className="">
              <h3 className="skills__name">express</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            {/* <i className="bx bx-badge-check"></i> */}
            <div className="">
              <h3 className="skills__name"></h3>
              <span className="skills__level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
