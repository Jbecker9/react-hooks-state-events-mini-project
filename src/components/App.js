import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
console.log({TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [isFiltered, setFilter] = useState(tasks)
  const [isSelected, setSelected] = useState("All")
  const [addedCategory, setAddCategory] = useState("Code")
  const [addedText, setAddText] = useState("")

  function onTaskFormSubmit(event){
    event.preventDefault()
    let newTaskObj = {
      category: addedCategory,
      text: addedText
    }
    // newTaskArray = [...newTaskObj]
    console.log(newTaskObj)
    const newTaskArray = [...tasks, newTaskObj]
    console.log(newTaskArray)
    setFilter(newTaskArray)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      tasks={tasks} 
      setTasks={setTasks} 
      categories={CATEGORIES} 
      isFiltered={isFiltered}
      setFilter={setFilter}
      isSelected={isSelected}
      setSelected={setSelected}
      />
      <NewTaskForm 
      onTaskFormSubmit={onTaskFormSubmit}
      categories={CATEGORIES}
      isSelected={isSelected}
      setFilter={setFilter}
      setSelected={setSelected}
      setAddCategory={setAddCategory}
      addedCategory={addedCategory}
      setAddText={setAddText}
      addedText={addedText}
      tasks={tasks}
      setTasks={setTasks}
      />
      <TaskList
      setTasks={setTasks} 
      tasks={isFiltered}
      setFilter={setFilter}
      isFiltered={isFiltered}/>
    </div>
  );
}

export default App;
