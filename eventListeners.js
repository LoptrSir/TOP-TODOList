//Event Listener logic
//Does it make sense to bundle these functions into a master function IE: a module, factory, or constructor?  Or does the export make this redundant?  A: allegedly better flow is to wrap it return the sub functions, export that function, then declare each sub function a const in website1.

import { createCategory, existingCategoryNames } from "./createCategory.js";
import { createTask, existingTaskNames } from "./createTask.js";


function mouseoverHandler() {
  //Will add styling to change color upon mouseover
  console.log("Mouseover");
}

function handleAddCategory() {
  createCategory();
  console.log("Add Category");
}

function handleAddTask(event) {
  const addButton = event.target;
  const categoryElement = addButton.closest('.categoryList');
  if(categoryElement){
  const categoryName = addButton.closest(".categoryList").dataset.name;
  createTask(categoryName);
  console.log("AddTask",categoryName);
  } else {alert('Error: Unable to determine category for this task');
}
}

function handleChange() {
  //Add logic to change name
  console.log("Change");
}

function handleDelete(event) {
  const element = event.target.parentElement;
  const itemName = element.dataset.name; 
  const category = element.dataset.category;
  if (existingCategoryNames.has(itemName)) {
       existingCategoryNames.delete(itemName); //Remove from set
   element.remove();
   } else if (existingTaskNames.has(itemName)) {
       existingTaskNames.delete(itemName); //Remove from set
       element.remove();
    } else {
    alert(`Item not found: ${itemName}`);
  }
}

export {
  mouseoverHandler,
  handleAddCategory,
  handleAddTask,
  handleChange,
  handleDelete,
};
