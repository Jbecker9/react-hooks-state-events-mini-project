import React from "react";

function Task({ text, category, setFilter, isFiltered }) {
  function handleDelete(event){
    event.preventDefault()
    const newDeleteTask = isFiltered.filter((task) => task.text !== text )
    setFilter(newDeleteTask)
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
