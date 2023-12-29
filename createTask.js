//Create Task
//This page is now obsolete 12/29 combined into parent event handler.

import { createNewTaskDOM } from "./website1.js";



// function getTaskName() {
//   return prompt("What is the name of your new task?");
//   //logic for blank response rejection
// }

const existingTaskNames = new Set();

function createTask(categoryName) {
const name =   prompt("What is the name of your new category?");
  if (name === null) {
      return;
  } else if (name === "") {
    alert("Error: Enter a name");
    return;
  }

  if (existingTaskNames.has(name)) {
    alert("Task Name Already Exists");
    return;
  }
  existingTaskNames.add(name);
  const categoryContainer = document.getElementById(
    categoryName.toLowerCase().replace(/\s+/g, "-")
  );
  if (categoryContainer) {
    const createTaskDOM = createNewTaskDOM(name, categoryName);
    categoryContainer.appendChild(createTaskDOM);
  } else {
    alert("Error: Category container not found");
  }
}

export { createTask, existingTaskNames };
