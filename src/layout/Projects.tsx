import { useLoaderData, useNavigate } from 'react-router-dom';
import './Projects.css';
import Divider from '../components/Divider';

export const getAllProjects = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}/projects/projectsData.json`);
  const projects = await response.json();
  return { projects };
};

export default function Projects() {
  const navigate = useNavigate();

  const { projects }: any = useLoaderData();

  return (
    <div className="projects">
      <div className="max-width-container">
        <div className="projects-title image-text">My Projects</div>
        <Divider alignLeft padding="1rem" />
        <div className="projects-grid">
          {projects.map((project: any, index: number) => [
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
      </div>
    </div>
  );
}
