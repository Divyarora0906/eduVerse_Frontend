import React from "react";
import photo from "../assets/Photo.webp";
import "./CSS/home.css";
function Homepage() {
  return (
    <>
      <main>
        <div className="right">
          <div className="image">
            <div className="circle-3">
              <div className="circle-2">
                <div className="circle-1"></div>
              </div>
            </div>

            <img src={photo} />
          </div>
        </div>

        <div className="left">
          <div className="Abs">
            <h1>
              EduVerse <br />
              E-Learning Platform
            </h1>
            <button className="Buy_Course">Enroll Now</button>
            <p>Let's Learn, Do and Create</p>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{}}
        >
          <path
            fill="#fdf9f6"
            fillOpacity="1"
            d="M0,0L18.5,10.7C36.9,21,74,43,111,80C147.7,117,185,171,222,170.7C258.5,171,295,117,332,128C369.2,139,406,213,443,218.7C480,224,517,160,554,122.7C590.8,85,628,75,665,101.3C701.5,128,738,192,775,186.7C812.3,181,849,107,886,101.3C923.1,96,960,160,997,160C1033.8,160,1071,96,1108,90.7C1144.6,85,1182,139,1218,149.3C1255.4,160,1292,128,1329,128C1366.2,128,1403,160,1422,176L1440,192L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
          ></path>
        </svg>
      </main>
    </>
  );
}

export default Homepage;
