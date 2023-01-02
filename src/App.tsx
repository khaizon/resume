import { Outlet } from 'react-router-dom';
import './app.css';
import Icon from './icons/icon';

export default function App() {
  return (
    <div className="landing-page-parent">
      <div className="menubar">
        <div className="menubar-title">
          <div className="blue">TOH&nbsp;</div>
          KAI FENG
        </div>
      </div>
      <Outlet />
      <div className="footer">
        Happy to connect on:
        <Icon link="https://www.linkedin.com/in/kai-feng-toh/" variant="linkedin" />
        <Icon link="mailto:toh.kai.feng.2015@vjc.edu.sg" variant="email" />
        <Icon link="https://github.com/khaizon" variant="github" />
      </div>
    </div>
  );
}
