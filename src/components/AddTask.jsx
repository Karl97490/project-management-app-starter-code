import { useState } from "react";
import axios from "axios";

function AddTask({ projectId, getData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      title: title,
      description: description,
      projectId: projectId,
    };

    try {
      // call the API here to create one task...
      // IMPORTANT: the ID of the Project should be part of the Task data
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/tasks`,
        body,
      );
      // stay on this page, but reload all the data from the project state by calling again getData()
      getData();
    } catch (error) {
      console.log(error);
      //todo proper error handling here
    }
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
