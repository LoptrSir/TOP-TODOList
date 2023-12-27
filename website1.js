//Create webpage file
//project TODO's: make sure tasks assign to proper task list not just to the end of list,

//imports
import {
  mouseoverHandler,
  handleAddCategory,
  handleAddTask,
  handleChange,
  handleDelete,
} from "./eventListeners.js";
import { createButton } from "./button.js";
import { createCategory } from "./createCategory.js";
import { createTask } from "./createTask.js";

//logic

//DOM

const masterList = document.createElement("div");
masterList.classList.add("masterList");
masterList.textContent = "Category";
document.querySelector(".content").appendChild(masterList);
const addCategoryButton = createButton("Add", "add", handleAddCategory);
const changeNameButton = createButton("Change", "change", handleChange);
const deleteNameButton = createButton("Delete", "delete", handleDelete);
masterList.appendChild(addCategoryButton);
masterList.appendChild(changeNameButton);
masterList.appendChild(deleteNameButton);

export function createNewCategoryDOM(name) {
  const sanitizedId = name.toLowerCase().replace(/\s+/g, "-");
  const createCategoryDOM = document.createElement("div");
  createCategoryDOM.classList.add("categoryList");
  createCategoryDOM.textContent = `${name}`;
  createCategoryDOM.id = sanitizedId;
  const addTaskButton = createButton("Add Task", "addTask", handleAddTask);
  const changeNameButton = createButton("Change", "change", handleChange);
  const deleteNameButton = createButton("Delete", "delete", handleDelete);
  createCategoryDOM.appendChild(addTaskButton);
  createCategoryDOM.appendChild(changeNameButton);
  createCategoryDOM.appendChild(deleteNameButton);
  masterList.appendChild(createCategoryDOM);
  return createCategoryDOM;
}

export function createNewTaskDOM(name) {
  const createTaskDOM = document.createElement("div");
  createTaskDOM.classList.add("taskList");
  createTaskDOM.textContent = `${name}`;
  const completeTaskButton = createButton(
    "Complete",
    "complete",
    handleAddTask
  );
  const changeNameButton = createButton("Change", "change", handleChange);
  const deleteNameButton = createButton("Delete", "delete", handleDelete);
  createTaskDOM.appendChild(changeNameButton);
  createTaskDOM.appendChild(completeTaskButton);
  createTaskDOM.appendChild(deleteNameButton);
  masterList.appendChild(createTaskDOM);
  return createTaskDOM;
}

//my footer
function myFooter() {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "loptrSir";
  return footer;
}

//loads page
function createWebsite() {
  const contentDiv = document.querySelector(".content");
  //createButton(buttonActions, masterList, masterList);
  const footer = contentDiv.appendChild(myFooter());
}

createWebsite();

//Code moved to other Files
//Found in button.js
// function createButton(text, id, clickHandler) {
//   const button = document.createElement("button");
//   button.classList.add("btn");
//   button.id = id;
//   button.textContent = text;
//   button.addEventListener("mouseover", mouseoverHandler);
//   button.addEventListener("click", clickHandler);
//   return button;
// }

//found in categoryModule.js as an export
// function getCategoryName() {
//   return prompt("What is the name of your new category?");
// }
// function checkDuplicateCategory(name) {
//   //add logic to check for duplicate category names
//   console.log("checkDupeCategory");
// }
// function createCategoryLogic(name) {
//   //category logic here{ mouseoverHandler, handleAddCategory, handleAddTask, handleChange, handleDelete}
//   if (checkDuplicateCategory(name)) {
//     alert("Category Name Exists");
//   }
// }
// function createCategory() {
//   //Make this a master function with the above as sub functions
//   const name = getCategoryName();
//   createCategoryLogic(name);
//   createNewCategoryDOM(name);
// }
