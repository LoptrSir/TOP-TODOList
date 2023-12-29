//Create Items: createCategory and createTask

import { createNewCategoryDOM, createNewTaskDOM } from "./website1.js";

const existingCategoryNames = new Set();
const existingTaskNames = new Set();

function getUserInput(promptMessage, existingNames) {
  const userInput = prompt(promptMessage);

  if (userInput === null) {
    return null; // User canceled the prompt
  } else if (userInput === "") {
    alert("Error: Enter a name");
    return null;
  } else if (existingNames.has(userInput)) {
    alert(`${promptMessage.split(" ")[0]} Name Already Exists`);
    return null;
  }
  existingNames.add(userInput);
  return userInput;
}

function createCategory() {
  const name = getUserInput(
    "What is the name of your new category?",
    existingCategoryNames
  );
  if (name !== null) {
    createNewCategoryDOM(name);
    console.log("Add Category", name);
  }
}

function createTask(event) {
  const addButton = event.target;
  const categoryElement = addButton.closest(".categoryList");
  console.log("createTask", categoryElement);

  if (!categoryElement) {
    alert("Error: Unable to determine category for this task");
    console.log("Error: Unable to determine category for this task");
    return;
  }
  const categoryName = categoryElement.dataset.name;
  const taskName = getUserInput(
    "What is the name of your new task?",
    existingTaskNames
  );
  if (taskName !== null) {
    updateDOM(categoryName, taskName);
  }
}

function updateDOM(categoryName, taskName) {
  const categoryContainer = document.getElementById(
    categoryName.toLowerCase().replace(/\s=/g, "-")
  );
  if (categoryContainer) {
    const createTaskDOM = createNewTaskDOM(taskName, categoryName);
    categoryContainer.appendChild(createTaskDOM);
    console.log("AddTask", categoryName);
  } else {
    alert("Error: Category container not found");
  }
}
export { createCategory, existingCategoryNames, createTask, existingTaskNames };

