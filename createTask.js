//Create Task

import { createNewTaskDOM } from "./website1.js";

function getTaskName() {
  return prompt("What is the name of your new task?");
}

function checkDuplicateTask(name) {
  //add logic to check for duplicate Task names
  console.log("checkDupeTask");
}

function createTaskLogic(name) {
  //Task logic here
  if (checkDuplicateTask(name)) {
    alert("TaskName Exists");
  }
  console.log("createTaskLogic");
}

function createTask() {
  //Make this a master function with the above as sub functions
  const name = getTaskName();
  createTaskLogic(name);
  createNewTaskDOM(name);
}

export { createTask };
