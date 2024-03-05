//TOP TODO List
//Functions

//functions2.js

//Imports
import {
  listsContainer,
  taskDisplayContainer,
  listTitleElement,
  taskCountElement,
  taskContainer,
  taskTemplate,
  taskNoteInput,
  taskPriorityOptions,
  taskDueDateInput,
} from "./globalDeclarations.js";

import {
  LOCAL_STORAGE_LIST_KEY,
  LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
  lists,
  selectedListId,
} from "./localStorage.js";

//Functions
export function createList(name) {
  console.log("F createList:", name);
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

export function createTask(name, note, priority, dueDate) {
  return {
    id: Date.now().toString(),
    name: name,
    note: note || "",
    priority: priority || "",
    dueDate: dueDate || "",
    complete: false,
  };
}

export function hideTaskDetails() {
  taskNoteInput.style.display = "none";
  taskPriorityOptions.style.display = "none";
  taskDueDateInput.style.display = "none";
}

export function resetPriorityRadioButtons(container) {
  const radioButtons = container.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
}

export function toggleInputField(inputField) {
  if (inputField.style.display === "block") {
    inputField.style.display = "none";
  } else {
    inputField.style.display = "block";
    inputField.focus();
  }
}

export function isValidDate(dateString) {
  if (dateString === "") {
    return true;
  }
  const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{2}$/;
  if (!datePattern.test(dateString)) {
    return false;
  }
  const [month, day, year] = dateString.split("/").map(Number);
  if (month < 1 || month > 12) {
    return false;
  }
  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) {
    return false;
  }
  if (year < 0 || year > 99) {
    return false;
  }
  return true;
}

export function saveAndRender() {
  save();
  render();
}

export function save() {
  console.log("F save lists pre:", lists);
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  console.log("F save lists:", lists);
  console.log("F save sli null:", selectedListId);
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  console.log("F save sli null post:", selectedListId);
}

export function render() {
  clearElement(listsContainer);
  renderLists();
  const selectedList = lists.find((list) => list.id === selectedListId.value);
  if (selectedListId.value == null) {
    taskDisplayContainer.style.display = "none";
  } else {
    console.log("F render sl:", selectedList);
    taskDisplayContainer.style.display = "block";
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(taskContainer);
    renderTasks(selectedList);
  }
}

//clearElement avoids duplication of previously displayed items
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderLists() {
  if (lists.length === 0) {
    const defaultListName = 'Example ToDo List';
    const defaultList = createList(defaultListName);
    lists.push(defaultList);
    selectedListId.value = defaultList.id;
  }
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    console.log("F rl sli:", selectedListId);
    if (list.id === selectedListId.value) {
      listElement.classList.add("active-list");
    }
    listsContainer.appendChild(listElement);
  });
}

export function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  taskCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const taskNameLabel = taskElement.querySelector(".task-name-label");
    const taskNoteLabel = taskElement.querySelector(".task-note-label");
    const taskPriorityLabel = taskElement.querySelector(".task-priority-label");
    const taskDueDateLabel = taskElement.querySelector(".task-due-date-label");
    taskNameLabel.htmlFor = task.id;
    taskNoteLabel.htmlFor = task.id;
    taskPriorityLabel.htmlFor = task.id;
    taskDueDateLabel.htmlFor = task.id;
    taskNameLabel.append(task.name);
    taskNoteLabel.append(task.note);
    taskPriorityLabel.append(task.priority);
    taskDueDateLabel.append(task.dueDate);
    taskContainer.appendChild(taskElement);
  });
}
