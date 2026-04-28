import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // used for calling the API
import ProjectCard from "../components/ProjectCard"; // used to render each Project

function ProjectListPage() {

  const [ allProjects, setAllProjects ] = useState(null)

  useEffect(() => {
    getData()
  })

  const getData = async() => {
    try {

      // call the API here to receive all projects...

    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }

  // if (!allProjects) return <h3>Loading...</h3> //todo proper loading animation here
  
  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}
       
    </div>
  );
}

export default ProjectListPage;