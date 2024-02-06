import React from "react";
import "./CSS/Aboutus.css"
import img from "../assets/section2.webp"
import gif from "../assets/line.gif"
function Aboutus() {
  return (
    <>
      <div className="About-Section">
        <div className="About-Section-in">
          <div className="Content">
            <div className="Heading_About">
            <h1 >EduVerse Institute</h1>
             <img src={gif}/>
            </div>
            <p className="abp">
              Welcome to Eduverse – where learning transcends boundaries and
              creativity knows no limits. Our tagline, "Let's Learn, Do, Create
              IT," encapsulates the essence of our institute, reflecting our
              commitment to providing a holistic educational experience that
              empowers individuals to thrive in the ever-evolving world of
              information technology. Eduverse stands as a beacon of innovation,
              fostering a community of learners, creators, and doers. With a
              dedicated team of 110+ mentors, we bring expertise and passion to
              every aspect of our educational programs. Whether you're delving
              into coding, artificial intelligence, web development, or any
              other IT discipline, our mentors are here to guide you through a
              transformative journey. Our thriving community of 2700+
              individuals forms the foundation of Eduverse. In this dynamic
              environment, collaboration and creativity flourish. Students and
              mentors alike come together to share ideas, work on projects, and
              support each other's growth. At Eduverse, we understand that
              education is not just about acquiring knowledge; it's about
              building connections and fostering a sense of belonging. Explore
              the limitless possibilities of IT with our rich catalog of 240+
              online courses. Crafted by experts in the field, these courses are
              designed to equip you with the skills and knowledge needed to
              succeed in a rapidly changing technological landscape.
            </p>
          </div>
          <div className="Image">
            <img src={img}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
