import React from "react";

function CategoryFilter({ tasks, setTasks, categories, taskFilter, isFiltered, setFilter }) {
  // console.log(categories)

  function handleFilter(event){
    setFilter(event.target.innerText)
    console.log("event", event.target.innerText)
    console.log("filter", isFiltered)
    console.log(taskFilter)
    // if(event.target.innerText === isFiltered){
    //   event.target.className = "selected"
    // }
    // else {
    //   event.target.className = ""
    // }
    // console.log(isFiltered)
    
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category)=>
          <button key={category}
          onClick={handleFilter}>
            {category}
          </button>
        )}
    </div>
  );
}

export default CategoryFilter;
