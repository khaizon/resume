import { useLoaderData, useNavigate } from 'react-router-dom';
import PanelTitle from '../components/PanelTitle';

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
      <button className="view-all-button">View All</button>
    </div>
  );
}
