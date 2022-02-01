import React from "react";
import Task from "./Task";

function TaskList({ list }) {

  return (
    <div className="tasks">
      {list.map((task)=>
        <Task taskText={task.text} taskCategory={task.category}/>
      )}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
