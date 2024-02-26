//TOP TODO List
//ToDo List

//Add LoptrSir footer.

//To Work On:
//Filter Tasks: priority, dueDate, date added. Filter secondary by non dominate selection.
//Task: note, priority, and due date will not align-items: center without over riding ellipsis on note.
//Task functionality: add a single edit button to the entire task OR have edits on hover of each element?
//Priority:Color priority based on option selected. (place popup window in a better location. later)
//Calendar: Get dueDate displaying margin-right.
//To ponder at a future date:
//.task-list: Explore spacing of task elements to the container instead of the body.
//Add Dark/Light display option.


//website2.js

import {
  listsContainer,
  newListForm,
  taskContainer,
  newTaskButton,
  taskNoteButton,
  taskPriorityButton,
  taskDueDateButton,
  deleteListButton,
  clearCompleteTasksButton,
} from "./globalDeclarations.js";

import * as eventListeners from "./eventListeners2.js";

import { render } from "./functions2.js";

function setupEventListeners() {
  listsContainer.addEventListener("click", eventListeners.handleListsContainer);
  taskContainer.addEventListener("click", eventListeners.handleTaskContainer);
  newListForm.addEventListener("click", eventListeners.handleNewListForm);
  newTaskButton.addEventListener("click", eventListeners.handleNewTaskForm);
  taskNoteButton.addEventListener("click", eventListeners.handleTaskNoteButton);
  taskPriorityButton.addEventListener("click", eventListeners.handleTaskPriorityButton);
  taskDueDateButton.addEventListener("click", eventListeners.handleTaskDueDateButton);
  clearCompleteTasksButton.addEventListener("click", eventListeners.handleClearCompleteTasksButton);
  deleteListButton.addEventListener("click",eventListeners.handleDeleteListButton);
}
setupEventListeners();

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
  footer.innerHTML = "LoptrSir";
  return footer;
}

  const footerDiv = document.querySelector(".footer");
  footerDiv.appendChild(myFooter());

export function website() {
render();
}
