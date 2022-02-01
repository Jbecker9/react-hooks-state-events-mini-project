import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [isSelected, setSelected] = useState(false)
  const [isFiltered, setFilter] = useState("All")
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      tasks={tasks} 
      setTasks={setTasks} 
      categories={categories} 
      isSelected={isSelected} 
      setSelected={setSelected}
      isFiltered={isFiltered}
      setFilter={setFilter}
      />
      <NewTaskForm />
      <TaskList 
      setTasks={setTasks} 
      tasks={tasks} 
      categories={categories}/>
    </div>
  );
}

export default App;
