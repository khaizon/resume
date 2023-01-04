import './ProjectsPanel.css';
import PanelTitle from '../../components/PanelTitle';
import { useNavigate } from 'react-router-dom';

interface project {
  title: string;
  description: string;
  date: string;
  image: string;
}

const projects: Array<project> = [
  {
    title: 'Panorama',
    description: 'A Yelp clone built with React and Typescript',
    date: '07 Jan 2022',
    image: '/capstone.png',
  },
  {
    title: 'Yelpington',
    description: 'A Yelp clone built with React and Typescript',
    date: '07 Jan 2022',
    image: '/yp.jpeg',
  },
  {
    title: 'Yelpington',
    description: 'A Yelp clone built with React and Typescript',
    date: '07 Jan 2022',
    image: '/yp.jpeg',
  },
];

export default function ProjectsPanel() {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <div className="projects-top">
        <div className="projects-title">
          <PanelTitle alignLeft={false} subtitle="Latest Works" title="My Projects" />
        </div>
        <div className="projects-number">
          <div
            className="panel-number image-text"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}/yp.jpeg)`,
            }}
          >
            02
          </div>
        </div>
      </div>
      <div className="projects-bottom">
        {projects.map((project, index) => [
          <div className="project-image" key={index + '1'}>
            <img src={import.meta.env.BASE_URL + project.image} alt="project" />
          </div>,
          <div
            className="project-text"
            key={index + '2'}
            onClick={() => {
              navigate(import.meta.env.BASE_URL + `projects/${project.title}`);
            }}
          >
            <div className="project-name">{project.title}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-divider" />
            <div className="project-date">{project.date}</div>
          </div>,
        ])}
      </div>
      <button
        className="view-all-button"
        onClick={() => {
          navigate(import.meta.env.BASE_URL + 'projects');
        }}
      >
        View All
      </button>
    </div>
  );
}
