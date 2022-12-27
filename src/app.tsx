import React from "react";
import "./App.css";
import Biography from "./layout/biography";

export default function App() {
  return (
    <div className="landing-page">
      <div className="menubar">
        <div className="menubar-title">
          <div className="blue">TOH&nbsp;</div>
          KAI FENG
        </div>
      </div>
      <div className="cover">
        <div className="profile-pic">
          <img src="/profilepic.jpeg" />
        </div>
        <div className="name-box">
          <div className="name-top">Toh</div>
          <div className="name-bottom">KaiFeng</div>
          <div className="profile-title">FULL STACK SOFTWARE ENGINEER</div>
        </div>
      </div>
      <Biography />
    </div>
  );
}
