import { Link } from "react-router-dom";

function ProjectCard({ projectObj: project }) {
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${project.id}`}>
        <h3>{project.title}</h3>
      </Link>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;
