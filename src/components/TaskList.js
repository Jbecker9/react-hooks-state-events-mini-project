import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories, setTasks }) {

  return (
    <div className="tasks">
      {tasks.map((task) =>
        <Task key={task.text} text={task.text} tasks={tasks} setTasks={setTasks} category={task.category}/>
      )}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
