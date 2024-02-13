//TOP TODO List
// Webpage:  Initial site build file.

// //Imports
// //Global Declarations
// import {
//   listsContainer,
//   newListForm,
//   newListInput,
//   taskDisplayContainer,
//   listTitleElement,
//   taskCountElement,
//   taskContainer,
//   taskTemplate,
//   newTaskForm,
//   newTaskInput,
//   taskNoteButton,
//   taskNoteInput,
//   taskPriorityButton,
//   taskPriorityOptions,shot to hell
//   taskDueDateButton,
//   taskDueDateInput,
//   deleteListButton,
//   clearCompleteTasksButton,
// } from "./globalDeclarations.js";
// //LocalStorage
// import {
//     LOCAL_STORAGE_LIST_KEY,
//     LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
//     lists,
//     selectedListId
// } from './localStorage.js';
// //Functions
//



// function setupEventListeners(){
//     listsContainer.addEventListener('click', eventListeners.handleListsContainer);
//     taskContainer.addEventListener('click', eventListeners.handleTaskContainer);
//     newListForm.addEventListener('click', eventListeners.handleNewListForm);
//     newTaskForm.addEventListener('click', eventListeners.handleNewTaskForm);
//     taskNoteButton.addEventListener('click', eventListeners.handleTaskNoteButton);
//     taskPriorityButton.addEventListener('click', eventListeners.handleTaskPriorityButton);
//     taskDueDateButton.addEventListener('click', eventListeners.handleTaskDueDateButton);
//     clearCompleteTasksButton.addEventListener('click', eventListeners.handleClearCompleteTasksButton);
//     deleteListButton.addEventListener('click', eventListeners.handleDeleteListButton);
// }
// setupEventListeners();


//Event Listeners
import * as eventListeners from './eventListeners.js';
//Functions
  import {
    createList,
    createTask,
    hideTaskDetails,
    resetPriorityRadioButtons,
    toggleInputField,
    isValidDate,
    saveAndRender,
    save,
    render,
    clearElement,
    renderLists,
    renderTaskCount,
    renderTasks,
    } from './functions.js';

//Global Declarations
export const listsContainer = document.querySelector("[data-lists]");
export const newListForm = document.querySelector("[data-new-list-form]");
export const newListInput = document.querySelector("[data-new-list-input]");
export const taskDisplayContainer = document.querySelector("[data-task-display-container]");
export const listTitleElement = document.querySelector("[data-list-title]");
export const taskCountElement = document.querySelector("[data-task-count]");
export const taskContainer = document.querySelector("[data-tasks]");
export const taskTemplate = document.getElementById("task-template");
export const newTaskForm = document.querySelector("[data-new-task-form]");
export const newTaskInput = document.querySelector("[data-new-task-input]");
export const taskNoteButton = document.querySelector("[data-task-notes-button]");
export const taskNoteInput = document.querySelector("[data-task-note-input]");
export const taskPriorityButton = document.querySelector("[data-task-priority-button]");
export const taskPriorityOptions = document.querySelector(".task-priority-options");
export const taskDueDateButton = document.querySelector("[data-task-due-date-button]");
export const taskDueDateInput = document.querySelector("[data-task-due-date-input]");
export const deleteListButton = document.querySelector("[data-delete-list-button]");
export const clearCompleteTasksButton = document.querySelector("[data-clear-complete-tasks-button]");



// Local Storage Elements
export const LOCAL_STORAGE_LIST_KEY = "task.lists";
export const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
export let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
export let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);




function setupEventListeners(){
    listsContainer.addEventListener('click', eventListeners.handleListsContainer);
    taskContainer.addEventListener('click', eventListeners.handleTaskContainer);
    newListForm.addEventListener('click', eventListeners.handleNewListForm);
    newTaskForm.addEventListener('click', eventListeners.handleNewTaskForm);
    taskNoteButton.addEventListener('click', eventListeners.handleTaskNoteButton);
    taskPriorityButton.addEventListener('click', eventListeners.handleTaskPriorityButton);
    taskDueDateButton.addEventListener('click', eventListeners.handleTaskDueDateButton);
    clearCompleteTasksButton.addEventListener('click', eventListeners.handleClearCompleteTasksButton);
    deleteListButton.addEventListener('click', eventListeners.handleDeleteListButton);
}
setupEventListeners();




//Functions
// export function createList(name) {
//     return {
//       id: Date.now().toString(),
//       name: name,
//       tasks: [],
//     };
//   }
  
//   export function createTask(name, note, priority, dulist-nameeDate) {
//     return {
//       id: Date.now().toString(),
//       name: name,
//       note: note || "",
//       priority: priority || "",
//       dueDate: dueDate || "",
//       complete: false,
//     };
//   }
  
//   export function hideTaskDetails() {
//     taskNoteInput.style.display = "none";
//     taskPriorityOptions.style.display = "none";
//     taskDueDateInput.style.display = "none";
//   }
  
//   export function resetPriorityRadioButtons(container) {
//     const radioButtons = container.querySelectorAll('input[type="radio"]');
//     radioButtons.forEach((radioButton) => {
//       radioButton.checked = false;
//     });
//   }
  
//   export function toggleInputField(inputField) {
//     if (inputField.style.display === "block") {
//       inputField.style.display = "none";
//     } else {
//       inputField.style.display = "block";
//       inputField.focus();
//     }
//   }
  
//   export function isValidDate(dateString) {
//     if (dateString === "") {
//       return true;
//     }
//     const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{2}$/;
//     if (!datePattern.test(dateString)) {
//       return false;
//     }
//     const [month, day, year] = dateString.split("/").map(Number);
//     if (month < 1 || month > 12) {
//       return false;
//     }
//     const daysInMonth = new Date(year, month, 0).getDate();
//     if (day < 1 || day > daysInMonth) {
//       return false;
//     }
//     if (year < 0 || year > 99) {
//       return false;
//     }
//     return true;
//   }
  
//   export function saveAndRender() {
//     save();
//     render();
//   }
  
  // Local Storage Creation/Save
  // export function save() {
  //   localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  //   localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  // }
  
  // export function render() {
  //   clearElement(listsContainer);
  //   renderLists();
  //   const selectedList = lists.find((list) => list.id === selectedListId);
  //   if (selectedListId == null) {
  //     taskDisplayContainer.style.display = "none";
  //   } else {
  //     taskDisplayContainer.style.display = "block";
  //     listTitleElement.innerText = selectedList.name;
  //     renderTaskCount(selectedList);
  //     clearElement(taskContainer);
  //     renderTasks(selectedList); 
  //   }
  // }
  
  // // clearElement avoids duplication of previously displayed items
  // export function clearElement(element) {
  //   while (element.firstChild) {
  //     element.removeChild(element.firstChild);
  //   }
  // }
  
  // export function renderLists() {
  //   lists.forEach((list) => {
  //     const listElement = document.createElement("li");
  //     listElement.dataset.listId = list.id;
  //     listElement.classList.add("list-name");
  //     listElement.innerText = list.name;
  //     if (list.id === selectedListId) {
  //       listElement.classList.add("active-list");
  //     }
  //     listsContainer.appendChild(listElement);
  //   });
  // }
  
  // export function renderTaskCount(selectedList) {
  //   const incompleteTaskCount = selectedList.tasks.filter(
  //     (task) => !task.complete
  //   ).length;
  //   const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  //   taskCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
  // }
  
  // export function renderTasks(selectedList) {
  //   //Does this need to be broken down?
  //   selectedList.tasks.forEach((task) => {
  //     const taskElement = document.importNode(taskTemplate.content, true);
  //     //console.log("rTask,taskTemplate:", taskTemplate.content);
  //     const checkbox = taskElement.querySelector("input");
  //     checkbox.id = task.id;
  //     checkbox.checked = task.complete;
  //     const taskNameLabel = taskElement.querySelector(".task-name-label");
  //     const taskNoteLabel = taskElement.querySelector(".task-note-label");
  //     const taskPriorityLabel = taskElement.querySelector(".task-priority-label");
  //     const taskDueDateLabel = taskElement.querySelector(".task-due-date-label");
  //     taskNameLabel.htmlFor = task.id;
  //     taskNoteLabel.htmlFor = task.id;
  //     taskPriorityLabel.htmlFor = task.id;
  //     taskDueDateLabel.htmlFor = task.id;
  //     taskNameLabel.append(task.name);
  //     taskNoteLabel.append(task.note);
  //     taskPriorityLabel.append(task.priority);
  //     taskDueDateLabel.append(task.dueDate);
  //     taskContainer.appendChild(taskElement);
  //   });
  // }




render();
