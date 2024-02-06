import React, { useState } from "react";
import axios from "axios";
import "./CSS/PaymentG.css";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./ReactContext/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function PaymentGateway() {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get("name");
  const para = queryParams.get("para");
  const id = queryParams.get("id");
  const { user, setuser } = useContext(UserContext);
  const [pay,setpay] = useState(false);
  const handleSumbit = async (ev) => {
    setpay(true);
    ev.preventDefault();
      const res = await axios.post(
        "https://edubackend-9xfi.onrender.com/update",
        {
          id,
          name,
          user,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );


 
  };
  navigate("/")
  return (
    <>
        <div className="Full-Payment-Page">
          <div className="Box-Payment">
            <form onSubmit={handleSumbit}>
              <label>Debit/Credit Card</label>
              <input type="text" required placeholder="Card Number" />
              <input type="text" required placeholder="CVV" />
              <button type="submit">Proceed to Pay </button>
              <div className="Course_Det">
                <div className="details">
                  <b>Name of the Course</b>:-{name} <br></br>{" "}
                  <b>Content:-</b> {para}
                </div>
              </div>
            </form>
          </div>
          {
            !pay ? (<div></div>):(<div className="Success">
            <h1>Success</h1>
            <button>Next </button>
         </div>)
          }
        </div>
    </>
  );
}

export default PaymentGateway;
