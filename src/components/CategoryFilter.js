import React from "react";

function CategoryFilter({ tasks, setTasks, categories, isSelected, setSelected, isFiltered, setFilter }) {
  // console.log(categories)
  function handleClassName(event){
    setSelected(!isSelected)
    if(isSelected){
      return (
        event.target.className = "selected"
      )
    }else{
      return event.target.className = ""
    }
  }

  function handleFilter(event){
    event.preventDefault()
    const taskFilter = tasks.filter((task) => task)
    setFilter(() => event.target.innerText)
    console.log(taskFilter)
    console.log(isFiltered)
    
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category)=>
        <button key={category} onClick={handleClassName, handleFilter}>
            {category}
        </button>
      )}
    </div>
  );
}

export default CategoryFilter;
