import { useState } from "preact/hooks";
import "./app.css";
import Biography from "./layout/biography";

export function App() {
  return (
    <div class="landing-page">
      <div className="menubar">
        <div className="menubar-title">
          <div className="blue">TOH&nbsp;</div>
          KAI FENG
        </div>
      </div>
      <div class="cover">
        <div className="profile-pic">
          <img src="/profilepic.jpeg" />
        </div>
        <div class="name-box">
          <div class="name-top">Toh</div>
          <div class="name-bottom">KaiFeng</div>
          <div class="profile-title">FULL STACK SOFTWARE ENGINEER</div>
        </div>
      </div>
      <Biography />
    </div>
  );
}
