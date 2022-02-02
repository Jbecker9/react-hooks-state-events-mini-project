import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, setFilter, isFiltered }) {

  return (
    <div className="tasks">
      {tasks.map((task) =>
        <Task key={task.text} setFilter={setFilter} text={task.text} tasks={tasks} setTasks={setTasks} category={task.category} isFiltered={isFiltered}/>
      )}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
