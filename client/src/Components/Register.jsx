import React from "react";
import { useState } from "react";
import axios from "axios";
import "./CSS/Register.css"
function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phone, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

 

  const CreateAccount = async(ev) => {
    ev.preventDefault();
    const res = await axios.post(
        "https://edubackend-9xfi.onrender.com/register",
        {
          firstname,
          lastname,
          phone,
          date,
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      console.log(res)
  };

  return (
    <>
    <div className="Form_Container">
    <img src="https://t3.ftcdn.net/jpg/04/45/30/00/360_F_445300032_8BOeLM2RyS8hFgjPgZ8OMPXUelRCySun.jpg"></img>
      <form onSubmit={CreateAccount}>
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
        />
        <input
          type="tel"
          value={phone}
          placeholder="Phone Number"
          onChange={(e) => setNumber(e.target.value)}
        />
         <input
          type="date"
          value={date}
          placeholder="Date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="sumbit">
            Submit
        </button>
      </form>
    </div>
    
    </>
  );
}

export default Register;
