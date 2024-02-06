import React, { useState , useEffect} from "react";
import PaymentGateway from "./PaymentGateway";
import "./CSS/Courses.css";
import { UserContext } from "./ReactContext/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
function CouseBlock({ name, img, para, id , price}) {
  useEffect(() => {
    AOS.init();
  }, [])
  const { user, setuser } = useContext(UserContext);
  const navigate = useNavigate();
  const checkforPayment = () => {
    navigate("/login");
  };
  const handlePayment = () =>{
    if (!user || typeof user === 'undefined') {
      navigate("/login");
      return;
    }
    else{
      navigate("/PaymentGateway")
      const queryParams = new URLSearchParams({
        name,
        para,
        id
      }).toString();
  
      navigate(`/PaymentGateway?${queryParams}`);
  
    }
  }

  return (
    <>
      <div className="Course" data-aos="fade-up"  data-aos-duration="3000">
        <div className="Circle_Price">&#8377; {price}</div>
        <img src={img} className="course-img" />
        <h3 className="course-h3">{name}</h3>
        <p className="Course-p">{para}</p>
        {!user ? (
          <button onClick={checkforPayment} className="common">Login Now</button>
        ) : (
          <button type="submit" onClick={handlePayment} className="common">
            Buy Course
          </button>
        )}
      </div>
    </>
  );
}

export default CouseBlock;
