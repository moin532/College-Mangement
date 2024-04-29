
import React, { useState } from "react";
import "../Home/Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "../../Button";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navbar = () => {
  
  const { isAuthenticated } = useSelector((state) => state.student);
  const [showMediaIcons, setShowMediaIcons] = useState(false);


  const logOut = () => {
    Cookies.remove("username");
    toast.success('Logout Successfully')

  }

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo animate-bounce">
          <h2>
            <span>I</span>nspired
            <span>T</span>o
            <span>I</span>nspire
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setShowMediaIcons(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setShowMediaIcons(false)}>about</Link>
            </li>
            <li >
              <Link to="/profile" onClick={() => setShowMediaIcons(false)}> <span className=" text-slate-400">Profile</span></Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setShowMediaIcons(false)}>contact</Link>
            </li>
           
            <li>
              <Link to="/toppers" onClick={() => setShowMediaIcons(false)}>Toppers</Link>
            </li>
          </ul>
        </div>

          
        {/* 3rd social media links */}
        <div className="social-media">
          
          <ul className="social-media-desktop animate-bounce">
            <img src="./images/srs images.jpg"  className="Logo"/>
          </ul>


         

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>


       {
        isAuthenticated ? 
        
        <Button className="  text-2x1 text-center mt-11  w-32  h-16 hover:bg-red-400 " id="btn" onClick={logOut}>LogOut</Button>
      : 

        <Link to="/login">
        
        <Button className="  text-2x1 text-center mt-11  w-32  h-16 hover:bg-red-400 " id="btn">Login</Button>
      </Link> 
        
        
       }      
      </nav>

      
    </>
  );
};



export default Navbar;