import React from 'react';
import './App.css';
import Biography from './layout/Biography';
import Projects from './layout/Projects';

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
          <div className="cover-grid">
            <div className="profile-pic">
              <img src={`${import.meta.env.BASE_URL}/profilemasked.png`} />
            </div>
            <div className="name-box image-text">
              <div className="name-top ">Toh</div>
              <div className="name-bottom">KaiFeng</div>
              <div className="profile-title">FULL STACK SOFTWARE ENGINEER</div>
            </div>
          </div>
        </div>
        <Biography />
        <Projects />
      </div>
      <div className="footer">
        Happy to connect at:{' '}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </div>
    </div>
  );
}
