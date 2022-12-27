import "./Projects.css";
import Divider from "../components/PanelTitle";
import PanelTitle from "../components/PanelTitle";

interface project {
  title: string;
  description: string;
  date: string;
  image: string;
}

const projects: Array<project> = [
  {
    title: "Capstone",
    description: "A Yelp clone built with React and Typescript",
    date: "07 Jan 2022",
    image: "/capstone.png",
  },
  {
    title: "Yelpington",
    description: "A Yelp clone built with React and Typescript",
    date: "07 Jan 2022",
    image: "/yp.jpeg",
  },
  {
    title: "Yelpington",
    description: "A Yelp clone built with React and Typescript",
    date: "07 Jan 2022",
    image: "/yp.jpeg",
  },
];

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-top">
        <div className="projects-topleft">
          <PanelTitle alignLeft={false} subtitle="Latest Works" title="My Projects" />
        </div>
        <div className="projects-topright">
          <div className="number-and-tabs">
            <div
              className="panel-number image-text"
              style={{
                backgroundImage: `url(/yp.jpeg)`,
              }}
            >
              02
            </div>
          </div>
        </div>
      </div>
      <div className="projects-bottom">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-image">
              <img src={import.meta.env.BASE_URL + project.image} alt="project" />
            </div>
            <div className="project-text">
              <div className="project-title">{project.title}</div>
              <div className="project-description">{project.description}</div>
              <div className="project-divider" />
              <div className="project-date">{project.date}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button">View All</button>
    </div>
  );
}
