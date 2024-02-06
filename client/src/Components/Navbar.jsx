import React, { useState, useContext, useEffect } from "react";
import "./CSS/Navbar.css";
import Ham from "../assets/menu.png";
import { Link } from "react-router-dom";
import { UserContext } from "./ReactContext/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { user, setuser } = useContext(UserContext);
 const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/profile", { withCredentials: true })
      .then((res) => {
        setuser(res.data.name);
      });
  }, []);

  const handleLogout = async () => {
    await axios.get("http://localhost:5000/logout", { withCredentials: true });
    setuser(null);
    navigate("/login");
  };
  const [showResponsiveNav, setShowResponsiveNav] = useState(false);

  const toggleResponsiveNav = () => {
    setShowResponsiveNav(!showResponsiveNav);
  };
   const handleCourse = ()=>{
     navigate("/Courses")
   }
  return (
    <>
   
      <div className="Navbar">
        <div className="Logo">EduVerse</div>
        <div className={`res ${showResponsiveNav ? "show" : ""}`}>
          <div className="navigations">
            <nav>
              <ul>
              <Link to={"/"}> <li>Home</li></Link>
              <Link to={"/"}> <li>Aboutus</li></Link>
                <Link to={"/"}> <li>Contact us</li></Link>
                 
                {!user ? (
                  <Link
                    to={"/login"}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <li>Login</li>
                  </Link>
                ) : (
                 <Link><li onClick={handleLogout}>Logout</li></Link> 
                )}
              </ul>
            </nav>
          </div>
          {!user ? (
            <Link to={"/register"}>
              <button className="Create_Account">Create Account</button>
            </Link>
          ) : (
            <>
            <button className="Create_Account">Hello {user}</button>
            <button className="Courses" onClick={handleCourse}>Courses</button>
            </>
          )}
          
        </div>
      

        <div className="ham" onClick={toggleResponsiveNav}>
          <img src={Ham} className="ham"></img>
        </div>
       
      </div>
    </>
  );
}

export default Navbar;
