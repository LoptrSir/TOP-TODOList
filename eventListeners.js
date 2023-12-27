//Event Listener logic
//Does it make sense to bundle these functions into a master function IE: a module, factory, or constructor?  Or does the export make this redundant?

import { createCategory, existingCategoryNames } from "./createCategory.js";
import { createTask, existingTaskNames } from "./createTask.js";

//function setupEventListeners(){  //used for more efficient code flow... Trouble with imports, went back to previous logic.
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

function handleDelete(event) {
  const element = event.target.parentElement;
  const itemName = element.dataset.name; 
  console.log('Delete:', itemName);
  if (existingCategoryNames.has(itemName)) {
       existingCategoryNames.delete(itemName); //Remove from set
   element.remove();
     // alert(`${itemName} deleted`);
    console.log(`${itemName} category deleted`);
  } else if (existingTaskNames.has(itemName)) {
       existingTaskNames.delete(itemName); //Remove from set
       element.remove();
     console.log(`${itemName} task deleted`);
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
//}

//  export default setupEventListeners;
//export { setupEventListeners};
