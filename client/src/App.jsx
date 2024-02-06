import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import FullWeb from "./Components/FullWeb";
import Login from "./Components/Login";
import { UserProvider } from "./Components/ReactContext/Context.jsx";
import PaymentGateway from "./Components/PaymentGateway.jsx";
import ShowCourses from "./Components/ShowCourses.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<FullWeb />}></Route>
          <Route path={"/register"} element={<Register />}></Route>
          <Route path={"/login"} element={<Login />}></Route>
          <Route path={"/PaymentGateway"} element={<PaymentGateway />}></Route>
          <Route path={"/Courses"} element={<ShowCourses />}></Route>


        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
