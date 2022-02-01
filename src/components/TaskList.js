import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories, setTasks }) {
  function handleDelete(event){
    event.preventDefault()
    const selectedDelete = event.target.parentNode
    console.log(event.target.parentNode)
    // const newDeleteTask = tasks.filter((task) => task.text !== )
    // setTasks(newDeleteTask)
  }

  return (
    <div className="tasks">
      {tasks.map((task)=>
        <Task handleDelete={handleDelete} key={task.text} taskText={task.text} taskCategory={task.category}/>
      )}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
