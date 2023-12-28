//Create Task

import { createNewTaskDOM } from "./website1.js";

const existingTaskNames = new Set();

function getTaskName() {
  return prompt("What is the name of your new task?");
}

function createTask(categoryName) {
  const name = getTaskName();
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
