//Event Listener logic 
//Does it make sense to bundle these functions into a master function IE: a module, factory, or constructor?  Or does the export make this redundant?

import { createCategory } from "./createCategory.js";
import { createTask } from "./createTask.js";


function mouseoverHandler() {
    //Will add styling to change color upon mouseover
    console.log("Mouseover");
  }
  
  function handleAddCategory() {
    createCategory();
    console.log("Add Category");
  }
  
  function handleAddTask() {
    createTask();
    console.log("AddTask");
  }
  
  function handleChange() {
    //Add logic to change name
    console.log("Change");
  }
  
  function handleDelete() {
    //Add logic to delete item
    console.log("Delete");
  }

  export { mouseoverHandler, handleAddCategory, handleAddTask, handleChange, handleDelete}