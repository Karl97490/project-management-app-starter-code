function TaskCard({ taskObj }) {
  return (
    <div className="TaskCard card">
      <h3>{taskObj.title}</h3>
      <h4>Description:</h4>
      <p>{taskObj.description}</p>
    </div>
  );
}

export default TaskCard;
