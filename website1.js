//Create webpage file
//project TODO's: delete category does'nt delete child tasks, make sure tasks assign to proper task list not just to the end of list,

//imports
import {
  handleAddCategory,
  handleAddTask,
  handleChange,
  handleDelete,
} from "./eventListeners.js";
import { createButton } from "./button.js";


//logic

//DOM
const masterList = document.createElement("div");
masterList.classList.add("masterList");
masterList.textContent = "Category";
document.querySelector(".content").appendChild(masterList);
const addCategoryButton = createButton("Add", "add", handleAddCategory);
masterList.appendChild(addCategoryButton);

export function createNewCategoryDOM(name) {
  const sanitizedId = name.toLowerCase().replace(/\s+/g, "-");
  const createCategoryDOM = document.createElement("div");
  createCategoryDOM.classList.add("categoryList");
  createCategoryDOM.textContent = `${name}`;
  createCategoryDOM.dataset.name = name; //delete function
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

export function createNewTaskDOM(name, categoryName) {
  const sanitizeId = name.toLowerCase().replace(/\s+/g, '-');
  const createTaskDOM = document.createElement("div");
  createTaskDOM.classList.add("taskList");
  createTaskDOM.id = sanitizeId;
  createTaskDOM.textContent = `${name}`;
  createTaskDOM.dataset.name = name; //for delete function
  createTaskDOM.dataset.category = categoryName;
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

