import React from "react";

function Task({ text, category, tasks, setTasks }) {
  function handleDelete(event){
    event.preventDefault()
    const newDeleteTask = tasks.filter((task) => task.text !== text)
    setTasks(newDeleteTask)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
