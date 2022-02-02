import React from "react";

function CategoryFilter({ tasks, setTasks, isSelected, setSelected, categories, isFiltered, setFilter }) {

  function handleFilter(event){
    const filteredTasks = tasks.filter((task) => {
      if(task.category === event.target.innerText){
        return  true && (event.target.className = "selected")

      }
      else if (event.target.innerText === "All"){
        return true && (event.target.className = "selected")
      }
    })
    setFilter(filteredTasks)
    setSelected(event.target.value)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category)=>
          <button className={isSelected === category ? "selected" : null} key={category}
          onClick={handleFilter}>
            {category}
          </button>
        )}
    </div>
  );
}

export default CategoryFilter;
