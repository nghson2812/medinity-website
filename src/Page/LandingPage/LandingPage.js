import React from "react";
import "./LandingPage.css";
import bannerImg from "../../resources/banner_img.png";

function LandingPage() {
  return (
    <div style={{marginTop:"60px"}}>
      <div className="section1">
          <div className="left-section">
              <h1>Symptom Diagnosis System</h1>
              <p>Simplifying day-to-day Habit with an easy-to-use software,
                  you can easily get the analysis for your health condition based on some basic data</p>
              <button><a href="src/Page/LandingPage/LandingPage#">GET STARTED NOW</a></button>
          </div>
          <div className="right-section">
              <img src={bannerImg} alt=""/>
          </div>
      </div>

      <div className="section2">
          <div className="heading">
              <h1>What Are Medinity System's Functions?</h1>
              <p>Our solution provides the easiest way for anyone to refer to their health condition</p>
          </div>
          <div className="content">
              <div className="upper">
                  <div className="symptom-checker">
                      <img src="" alt=""/>
                      <h3>Symptom</h3>
                      <h3>Checker</h3>
                      <button><a href="#">Try Now</a></button>
                  </div>
                  <div className="vertical-line"
                       style={{
                           width: "285.7px",
                           height: "0px",
                           border: "1.5037px solid rgba(21, 39, 70, 0.21)",
                           transform: "rotate(-90deg)"}} />
                  <div className="chat-bot">
                      <img src="" alt=""/>
                      <h3>Medical Assistant</h3>
                      <h3>(Chat Bot)</h3>
                      <button><a href="#">Try Now</a></button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default LandingPage;