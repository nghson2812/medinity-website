import React from "react";
import "./NavBar.css";
import logo from "../../resources/logo.png"

function NavBar() {
  return (
      <div>
          <div className="navbar">
              <div className="left-navbar">
                  <div id="logo">
                      <img src={logo} alt="" style={{alignSelf:"center"}}/>
                      <h1>MEDINITY</h1>
                  </div>
              </div>
              <div className="right-navbar">
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
                  <div className="btn" style={{width: "98px", height: "38px"}}><a href="#" style={{fontSize:"14px"}}>Sign up</a></div>
              </div>
          </div>
      </div>
  );
}

export default NavBar;