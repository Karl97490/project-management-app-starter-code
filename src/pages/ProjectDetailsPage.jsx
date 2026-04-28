import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask"; // for rendering Task Add Form
import TaskCard from "../components/TaskCard"; // for rendering Task List
import axios from "axios"; // used for calling the API
import { useEffect, useState } from "react";

function ProjectDetailsPage () {

  const { projectId } = useParams() // destructuring the project id from dynamic params (see App.jsx => :projectId)

  const [ product, setProduct ] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async() => {
    try {

      // call the API here to receive project details...

    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }

  // if (!product) return <h3>Loading...</h3> //todo proper loading animation here
  
  return (
    <div className="ProjectDetailsPage">

      <div>
        <h1>PROJECT_NAME</h1>
        <p>PROJECT_DESCRIPTION</p>
      </div>

      {/* ... list of all Tasks for this Project should be rendered here */}

      {/* example of a single TaskCard being rendered */}
      {/* <TaskCard /> */}

      {/* ... form for adding a new Task should be rendered here    */}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      
      <Link to={`/projects/edit/PROJECT_ID_HERE`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}

export default ProjectDetailsPage;
