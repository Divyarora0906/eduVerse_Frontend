import React, { useEffect, useContext , useState} from 'react';
import "./CSS/ShowCourse.css";
import { UserContext } from "../Components/ReactContext/Context";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import imgs from "../assets/web.jpg";
import ui from "../assets/images.jfif"
import gif from "../assets/line.gif"
import ds from "../assets/ds.jfif"
function ShowCourses() {
  const { user, setuser } = useContext(UserContext);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/coursesNow",
        {
          user,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data.courseId); // Assuming the server responds with data
      setCourses(response.data.courseId);
      // Do something with the response data if needed

    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Check if user is defined before making the POST request
    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <>
      <div className='Courses-show'>
        <div className='Containers'>
        {courses.includes(1) ? (
            <div className='Container-1'>
              <div className='Box'>
                <img src={ds} />
                <div className='Head'>Data Science and IOT</div>
                <button className='C-btn'>Start Learning</button>
              </div>
            </div>
          ) : null}
            {courses.includes(2) ? (
            <div className='Container-1'>
              <div className='Box'>
              <img src={imgs} />
                <div className='Head'>Fundamentals of Web Devlopment</div>
                <button className='C-btn'>Start Learning</button>
              </div>
            </div>
          ) : null}
           {courses.includes(3) ? (
            <div className='Container-1'>
              <div className='Box'>
              <img src={ui} />
                <div className='Head'>UI/UX Designing Course</div>
                <button className='C-btn'>Start Learning</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default ShowCourses;
