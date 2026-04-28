import { useState, useEffect } from "react";
import axios from "axios"; // used for calling the API
import { useParams } from "react-router-dom";

function EditProjectPage() {

  const { projectId } = useParams() // destructuring the project id from dynamic params (see App.jsx => :projectId)
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async(e) => {
    e.preventDefault();

    try {
      // call the API here to edit one task...
      
    } catch (error) {
      console.log(error)
      //todo proper error handling here 
    }
  };

  const deleteProject = async() => {
    try {
      // call the API here to delete one task...
      
    } catch (error) {
      console.log(error)
      //todo proper error handling here
    }
  }; 

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>

      <button onClick={deleteProject}>Delete Project</button>      
    </div>
  );
}

export default EditProjectPage;
