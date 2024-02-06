import React, { useEffect } from "react";
import "./CSS/Courses.css";
import img from "../assets/web.jpg";
import ds from "../assets/ds.jfif"
import CouseBlock from "./CouseBlock";
import ui from "../assets/images.jfif"
import gif from "../assets/line.gif"
// importing aos

function Courses() {
  return (
    <>
      <div className="Course_Container">
        <div className="Heading_courses">
          <h2>Featured Courses</h2>
          <img src={gif} id="C-img"/>
        </div>
        <div className="Swiper-Center">
          <CouseBlock
            name={"Data Science and IOT"}
            img={ds}
            para={
              "Welcome to the Web Development Fundamentals Course! This comprehensive program is designed for individuals eager to embark on a journey into the exciting world of web development."
            }
            id="1"
            price="4999"
          />

          <CouseBlock
            name={"Fundamentals of Web Devlopment"}
            img={img}
            para={
              "Welcome to the Web Development Fundamentals Course! This comprehensive program is designed for individuals eager to embark on a journey into the exciting world of web development."
            }
            id="2"
            price="2999"
          />

          <CouseBlock
            name={"UI/UX Designing Course"}
            img={ui}
            para={
              "Welcome to the Web Development Fundamentals Course! This comprehensive program is designed for individuals eager to embark on a journey into the exciting world of web development."
            }
            id="3"
            price="3999"
          />
        </div>
      </div>
    </>
  );
}

export default Courses;
