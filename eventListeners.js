//Event Handler logic  
import { createCategory } from "./createCategory.js";
import { createTask } from "./createTask.js";


function mouseoverHandler() {
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
    console.log("Change");
  }
  
  function handleDelete() {
    console.log("Delete");
  }

  export { mouseoverHandler, handleAddCategory, handleAddTask, handleChange, handleDelete}