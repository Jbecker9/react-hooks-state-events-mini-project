import React from "react";

function Task({ taskText, taskCategory, handleDelete }) {

  return (
    <div className="task">
      <div className="label">{taskCategory}!</div>
      <div className="text">{taskText}!</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;
