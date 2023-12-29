//Event Listener logic
//Does it make sense to bundle these functions into a master function IE: a module, factory, or constructor?  Or does the export make this redundant?  A: allegedly better flow is to wrap it return the sub functions, export that function, then declare each sub function a const in website1.

//Event Listener Logic

import { createCategory, createTask } from "./createItems.js";
import { deleteItem, changeItem, mouseoverItem } from "./modifyItems.js";

function mouseoverHandler() {
  //mouseoverItem();
  //Will add styling to change color upon mouseover
  // Can CSS styling handle mouseover without this function?
  console.log("mouseoverHandler");
}

function handleAddCategory() {
  createCategory();
}

function handleAddTask(event) {
  createTask(event);
}

function handleChange(event) {
 // changeItem(event);
  console.log("handleChange");
}

function handleDelete(event) {
  deleteItem(event);
}

export {
  mouseoverHandler,
  handleAddCategory,
  handleAddTask,
  handleChange,
  handleDelete,
};

///////////////////
//import { createTask, existingTaskNames } from "./createTask.js";
//import { createNewCategoryDOM, createNewTaskDOM } from "./website1.js";

//const existingCategoryNames = new Set();
//const existingTaskNames = new Set();
//////////////////
// function handleAddTask(event) {
//   const addButton = event.target;
//   const categoryElement = addButton.closest(".categoryList");
//   if (categoryElement) {
//     const categoryName = addButton.closest(".categoryList").dataset.name;
//     const name = prompt("What is the name of your new category?");
//     if (name === null) {
//       return;
//     } else if (name === "") {
//       alert("Error: Enter a name");
//       return;
//     }

//     if (existingTaskNames.has(name)) {
//       alert("Task Name Already Exists");
//       return;
//     }
//     existingTaskNames.add(name);
//     const categoryContainer = document.getElementById(
//       categoryName.toLowerCase().replace(/\s+/g, "-")
//     );
//     if (categoryContainer) {
//       const createTaskDOM = createNewTaskDOM(name, categoryName);
//       categoryContainer.appendChild(createTaskDOM);
//     } else {
//       alert("Error: Category container not found");
//     }
//     console.log("AddTask", categoryName);
//   } else {
//     alert("Error: Unable to determine category for this task");
//   }
// }
//////////////////////
// function handleAddCategory() {
//   const name = prompt("What is the name of your new category?");
//   if (name === null) {
//     return;
//   } else if (name === "") {
//     alert("Error: Enter a name");
//     return;
//   }
//   if (existingCategoryNames.has(name)) {
//     alert("Category Name Already Exists");
//     return;
//   }
//   existingCategoryNames.add(name);
//   createNewCategoryDOM(name);
//   console.log("Add Category");
// }
//////////////////////////////////
