import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./assets/Home/Navbar";
import Home from "./assets/Home/Home";
import Footere from "./assets/Footer";
import LoginE from "./assets/Home/LoginE";
import Register from "./assets/Home/Register";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./action/StudentAction";
import Profile from "./assets/Profile";
import Cookies from "js-cookie";
import AdminList from "./Components/AdminList";
import AddMarks from "./Components/AddMarks";
import Topper from "./Components/Topper";
import Contact from "./assets/Contact";
import About from "./assets/About";


const App = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.student);
  // console.log(user);

  useEffect(() => {
    if (Cookies.get("username")) {
      dispatch(loadUser());
    }
  }, [dispatch, Cookies]);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/login" exact element={<LoginE />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
          <Route path="/admin/marks" exact element={<AdminList/>}></Route>
          <Route path="/admin/marks/:id" exact element={<AddMarks/>}></Route>
          <Route path="/toppers" exact element={<Topper/>}></Route>
          <Route path="/contact" exact element={<Contact/>}></Route>
          <Route path="/about" exact element={<About/>}></Route>


        </Routes>

        <Footere />
      </Router>
      <ToastContainer position="bottom-right" theme="colored" />
    </>
  );
};

export default App;
