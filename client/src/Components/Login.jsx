import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import "./CSS/Login.css";
import { UserContext } from "../Components/ReactContext/Context";
import { useNavigate } from "react-router-dom";
function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setuser } = useContext(UserContext);
  const navigate = useNavigate();
  
  
 

  const CheckLoginUser = (ev) => {
    ev.preventDefault();
    axios
      .post(
        "https://edubackend-9xfi.onrender.com/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data && res.data.name) {
          setuser(res.data.name);
          // setuser(res.data.username)
          navigate("/");
        } else {
          setuser(null);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="Login">
        <form onSubmit={CheckLoginUser}>
          <label for="user" className="user-label">
            User Id
          </label>
          <input
            placeholder="username"
            type="text"
            value={username}
            id="user"
            onChange={(e) => setusername(e.target.value)}
          ></input>
           <label for="password" className="user-label">
            Password
          </label>
          <input
            type="password"
            placeholder="password"
            value={password}
            id="password"
            onChange={(e) => setpassword(e.target.value)}
          ></input>
          <button type="Sumbit" className="Login-btn">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
