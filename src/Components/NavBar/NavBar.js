import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
      <div>
          <div className="container">
              <div className="left-navbar">
                    <h1>Logo</h1>
              </div>
              <div className="right-navbar">
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Contact</a></li>
                  </ul>
                  <button><a href="#">Sign in</a></button>
              </div>
          </div>
      </div>
  );
}

export default NavBar;