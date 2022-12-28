import React from "react";
import "./App.css";
import Biography from "./layout/Biography";
import Projects from "./layout/Projects";

export default function App() {
  return (
    <div className="landing-page-parent">
      <div className="menubar">
        <div className="menubar-title">
          <div className="blue">TOH&nbsp;</div>
          KAI FENG
        </div>
      </div>
      <div className="landing-page">
        <div className="cover">
          <div className="profile-pic">
            <img src={`${import.meta.env.BASE_URL}/profilepic.jpeg`} />
          </div>
          <div className="name-box image-text">
            <div className="name-top ">Toh</div>
            <div className="name-bottom">KaiFeng</div>
            <div className="profile-title">FULL STACK SOFTWARE ENGINEER</div>
          </div>
        </div>
        <Biography />
        <Projects />
      </div>
      <div className="footer">HI</div>
    </div>
  );
}
