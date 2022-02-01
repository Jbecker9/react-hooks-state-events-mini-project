import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories, setTasks }) {

  return (
    <div className="tasks">
      {tasks.map((task) =>
        <Task key={task.text} taskText={task.text} tasks={tasks} setTasks={setTasks} taskCategory={task.category}/>
      )}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
