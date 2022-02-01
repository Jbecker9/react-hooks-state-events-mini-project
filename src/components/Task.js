import React from "react";

function Task({ taskText, taskCategory, tasks, setTasks }) {
  function handleDelete(event){
    event.preventDefault()
    const newDeleteTask = tasks.filter((task) => task.text !== taskText)
    setTasks(newDeleteTask)
  }

  return (
    <div className="task">
      <div className="label">{taskCategory}!</div>
      <div className="text">{taskText}!</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
