import React from "react";

function NewTaskForm({ categories, isSelected, tasks, setFilter, setSelected, addedCategory, setAddCategory, addedText, setAddText, setTasks, onTaskFormSubmit }) {
  const newCategoryArray = categories.filter((category) => category !== "All")

  function handleAddCategory(event){
    setAddCategory(event.target.value)
    const filteredTasks = tasks.filter((task) => {
      if(task.category === event.target.value){
        return  true && (event.target.className = "selected")
        
      }
      else if (event.target.value === "All"){
        return true && (event.target.className = "selected")
      }
    })
    setFilter(filteredTasks)
    setSelected(event.target.value)
    // let catElement = document.querySelector(".selected")
    // console.log(catElement)
  }
  function handleAddText(event){
    setAddText(event.target.value)
    // console.log(addedText)
  }

  // function onTaskFormSubmit(event){
  //   event.preventDefault()
  //   let newTaskObj = {
  //     category: addedCategory,
  //     text: addedText
  //   }
  //   // newTaskArray = [...newTaskObj]
  //   console.log(newTaskObj)
  //   const newTaskArray = [...tasks, newTaskObj]
  //   console.log(newTaskArray)
  //   setFilter(newTaskArray)
  // }


  return (
    <form onSubmit={onTaskFormSubmit}className="new-task-form">
      <label>
        Details
        <input onChange={e => handleAddText(e)} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleAddCategory} name="category">
          {newCategoryArray.map((category) => 
          <option className={isSelected === category ? "selected" : null} key={category}>{category}</option>
          )} 
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
