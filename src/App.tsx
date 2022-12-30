import './app.css';
import Icon from './icons/icon';

import Biography from './layout/biography';
import Projects from './layout/projects';

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
        Happy to connect on:
        <Icon link="https://www.linkedin.com/in/kai-feng-toh/" variant="linkedin" />
        <Icon link="mailto:toh.kai.feng.2015@vjc.edu.sg" variant="email" />
        <Icon link="https://github.com/khaizon" variant="github" />
      </div>
    </div>
  );
}
