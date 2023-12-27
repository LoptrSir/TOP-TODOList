//Create Task

import { createNewTaskDOM } from "./website1.js";

const existingTaskNames = new Set();

function getTaskName() {
  return prompt("What is the name of your new task?");
}

function createTask() {
  const name = getTaskName();
 if(existingTaskNames.has(name)){
  alert('Task Name Already Exists');
  return;
 }
 existingTaskNames.add(name);
  createNewTaskDOM(name);
}

export { createTask, existingTaskNames };
