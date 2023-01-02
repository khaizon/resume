import Biography from './Biography';
import Projects from './Projects';

export default function LandingPage() {
  return (
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
  );
}
