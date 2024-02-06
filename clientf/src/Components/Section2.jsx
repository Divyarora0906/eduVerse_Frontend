import React from "react";
import icon1 from "../assets/Modules.png";
import icon2 from "../assets/Brain.png";
import icon3 from "../assets/year.png";
import gif from "../assets/line.gif"

import "./CSS/Section2.css";
function Section2() {
  return (
    <>
    <div className="Course_heading">
    <h2 className="key"> Key Features</h2>
    <img src={gif} alt="Line"/>
    </div>

      <div className="Card-Container">
        <div className="Card">
          <div className="box">
            <h2 className="num">01</h2>
          <img src={icon1}></img>
          <h2 className="text">Interactive Learning Modules</h2>
          </div>
          </div>
          <div className="Card">
          <div className="box" style={{backgroundColor:"#fdf6e3"}}>
            <h2 className="num">02</h2>
          <img src={icon2}></img>
          <h2 className="text">Project Based <br/>Learning</h2>
          </div>
          </div>
          <div className="Card">
          <div className="box" style={{backgroundColor:"rgb(255,235,224)"}}>
            <h2 className="num">03</h2>
          <img src={icon3}></img>
          <h2 className="text">1 Year Course <br />Access</h2>
          </div>
          </div>
      </div>
    </>
  );
}

export default Section2;
