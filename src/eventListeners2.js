//TOP TODO List
//Event Listener Functions

//Imports
import {
  newListInput,
  newTaskInput,
  taskNoteInput,
  taskPriorityOptions,
  taskDueDateInput,
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

import { lists as defaultLists, selectedListId } from "./localStorage.js";
let lists = defaultLists;

import {
  createList,
  createTask,
  hideTaskDetails,
  resetPriorityRadioButtons,
  toggleInputField,
  isValidDate,
  saveAndRender,
  save,
  renderTaskCount,
} from "./functions2.js";

// Event Listener Functions
export function setupEventListeners() {
  listsContainer.addEventListener("click", handleListsContainer);
  taskContainer.addEventListener("click", handleTaskContainer);
  newListForm.addEventListener("click", handleNewListForm);
  newTaskButton.addEventListener("click", handleNewTaskForm);
  taskNoteButton.addEventListener("click", handleTaskNoteButton);
  taskPriorityButton.addEventListener("click", handleTaskPriorityButton);
  taskDueDateButton.addEventListener("click", handleTaskDueDateButton);
  clearCompleteTasksButton.addEventListener(
    "click",
    handleClearCompleteTasksButton
  );
  deleteListButton.addEventListener("click", handleDeleteListButton);
}

export function handleListsContainer(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId.value = e.target.dataset.listId;
    saveAndRender();
  }
}

export function handleTaskContainer(e) {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListId.value);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
}

export function handleNewListForm(e) {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName == "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
}

export function handleNewTaskForm(e) {
  e.preventDefault();
  const taskName = newTaskInput.value;
  hideTaskDetails();
  if (taskName == null || taskName == "") return;
  const taskNote = taskNoteInput.value;
  const taskPriority =
    taskPriorityOptions.querySelector('input[type="radio"]:checked')?.value ||
    "";
  const taskDueDate = taskDueDateInput.value;
  if (!isValidDate(taskDueDate)) {
    alert("Please enter valid mm/dd/yy");
    taskDueDateInput.value = null;
    return;
  }
  const task = createTask(taskName, taskNote, taskPriority, taskDueDate);
  newTaskInput.value = null;
  taskNoteInput.value = null;
  taskDueDateInput.value = null;
  resetPriorityRadioButtons(taskPriorityOptions);
  const selectedList = lists.find((list) => list.id === selectedListId.value);
  selectedList.tasks.push(task);
  saveAndRender();
}

export function handleTaskNoteButton(e) {
  e.preventDefault();
  toggleInputField(taskNoteInput);
}

export function handleTaskPriorityButton(e) {
  e.preventDefault();
  toggleInputField(taskPriorityOptions);
}

export function handleTaskDueDateButton(e) {
  e.preventDefault();
  toggleInputField(taskDueDateInput);
}

export function handleClearCompleteTasksButton(e) {
  const selectedList = lists.find((list) => list.id === selectedListId.value);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
}

export function handleDeleteListButton(e) {
  // lists = lists.filter((list) => list.id !== selectedListId.value);
  //*****use splice edits original lists in globalDeclarations. filter works on local lists declared after import.*****
  lists.splice(
    lists.findIndex((list) => list.id === selectedListId.value),
    1
  );
  selectedListId.value = null;
  saveAndRender();
}
