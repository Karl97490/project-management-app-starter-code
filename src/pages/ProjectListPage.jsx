import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // used for calling the API

import ProjectCard from "../components/ProjectCard"; // used to render each Project

function ProjectListPage() {
  const [allProjects, setAllProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    try {
      // call the API here to receive all projects...
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/projects`,
      );
      // console.log(response.data)
      setIsLoading(false); // render the component once the data finished loading
      setAllProjects(response.data);
    } catch (error) {
      console.log(error);
      //todo proper error handling here
    }
  };

  if (isLoading) return <h3>Loading...</h3>; //todo proper loading animation here

  return (
    <div className="ProjectListPage">
      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}
      {allProjects.map((project) => {
        // console.log(project);
        return <ProjectCard key={project.id} projectObj={project} />;
      })}
    </div>
  );
}

export default ProjectListPage;
