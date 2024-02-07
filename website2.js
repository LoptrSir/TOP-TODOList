//ToDo List

//To Work On:
//  body: task-list loses delete button visibility if all-lists is too long.
//.task-list: How to make .tasks spacing conform to the space of .task-list not the full page.  This seems important for change to screen size view.
//new task submit button (+). Leave btn at beginning but move to end of tab trail after due date.
// notes,priority,dueDate are not centered in task-temp.
// click on note/priority/dueDate again to close pop up.
//Note functionality: hover shows rest of note and delete/edit buttons.
//Priority: place popup window in a better location. Color priority based on option selected.
//Calendar: logic to convert input string to a date with two year display, add option to use a calendar. Hover over task dueDate allows change? Get dueDate displaying margin-right.
//Task buttons to icons:

//Global Declarations
const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const taskDisplayContainer = document.querySelector(
  "[data-task-display-container]"
);
const listTitleElement = document.querySelector("[data-list-title]");
const taskCountElement = document.querySelector("[data-task-count]");
const taskContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");
const taskNoteButton = document.querySelector("[data-task-notes-button]");
const taskNoteInput = document.querySelector("[data-task-note-input]");
const taskPriorityButton = document.querySelector(
  "[data-task-priority-button]"
);
const taskPriorityOptions = document.querySelector(".task-priority-options");

const taskDueDateButton = document.querySelector("[data-task-due-date-button]");
const taskDueDateInput = document.querySelector("[data-task-due-date-input]");

const deleteListButton = document.querySelector("[data-delete-list-button]");
const clearCompleteTasksButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
);

// Local Storage Elements
const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

//Event Listeners
listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
});

newListForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName == "") return;
  const list = createList(listName);
  newListInput.value = null;
  lists.push(list);
  saveAndRender();
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  hideTaskDetails();
  if (taskName == null || taskName == "") return;
  const taskNote = taskNoteInput.value;
  const taskPriority =
    taskPriorityOptions.querySelector('input[type="radio"]:checked')?.value ||
    "";
  const dueDate = taskDueDateInput.value;
  const task = createTask(taskName, taskNote, taskPriority, dueDate);
  newTaskInput.value = null;
  taskNoteInput.value = null;
  taskDueDateInput.value = null;
  resetPriorityRadioButtons(taskPriorityOptions);
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
  // console.log("nTF, array item", selectedList);
});

taskNoteButton.addEventListener("click", (e) => {
  e.preventDefault();
  // taskNoteInput.style.display = "block";
  // taskNoteInput.focus(); //moves cursor into note field
  toggleInputField(taskNoteInput);
});

taskPriorityButton.addEventListener("click", (e) => {
  e.preventDefault();
  // taskPriorityOptions.style.display = "block";
  toggleInputField(taskPriorityOptions);
});

taskDueDateButton.addEventListener("click", (e) => {
  e.preventDefault();
  // taskDueDateInput.style.display = "block";
  // taskDueDateInput.focus();
  toggleInputField(taskDueDateInput)
  const input = taskDueDateInput.value;
  // const isValidFormat = /^\d{2}\/\d{2}\/\d{2}$/.test(input);
  // if (!isValidFormat) {

  //Removed to make code work without vetting valid date.
  //   const isValidDate = isValidDateValue(input);
  //   if(!isValidDate) {
  //   taskDueDateInput.setCustomValidity('Please enter a valid mm/dd/yy format');
  // } else {
  //   taskDueDateInput.setCustomValidity('');
  // }
});

clearCompleteTasksButton.addEventListener("click", (e) => {
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

deleteListButton.addEventListener("click", (e) => {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});

//Functions
function createList(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

function createTask(name, note, priority, dueDate) {
  return {
    id: Date.now().toString(),
    name: name,
    note: note || "",
    priority: priority || "",
    dueDate: dueDate || "",
    // dueDate: new Date(dueDate) || '',
    complete: false,
  };
} 

function hideTaskDetails() {
  taskNoteInput.style.display = "none";
  taskPriorityOptions.style.display = "none";
  taskDueDateInput.style.display = "none";
}

function resetPriorityRadioButtons(container) {
  const radioButtons = container.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
}

function toggleInputField(inputField) {
  if (inputField.style.display === 'block'){
    inputField.style.display = 'none';
  } else {
    inputField.style.display = 'block';
    inputField.focus();
  }
}

function isValidDateValue(input) {
  // the 2 lines below did not work
  // const date = new Date(input);
  // return !isNaN(date.getTime());
  const [month, day, year] = input.split('/');
  const parsedMonth = parseInt(month, 10);
  const parsedDay = parseInt(day, 10);
  const parsedYear = parseInt(year, 10);
  // const adjustedYear = parsedYear >= 0 && parsedYear <= 99 ? 2000 + parsedYear : parsedYear;
  // const date = new Date(adjustedYear, parsedMonth - 1, parsedDay);
  // return date.getFullYear() === adjustedYear && date.getMonth() === parsedMonth - 1 && date.getDate() === parsedDay;
  // }
}

function saveAndRender() {
  save();
  render();
}

//Local Storage Creation/Save
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function render() {
  clearElement(listsContainer);
  renderLists();
  const selectedList = lists.find((list) => list.id === selectedListId);
  if (selectedListId == null) {
    taskDisplayContainer.style.display = "none";
  } else {
    taskDisplayContainer.style.display = "block";
    listTitleElement.innerText = selectedList.name;
    renderTaskCount(selectedList);
    clearElement(taskContainer);
    renderTasks(selectedList);
  }
}

// clearElement avoids duplication of previously displayed items
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderLists() {
  lists.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("list-name");
    listElement.innerText = list.name;
    if (list.id === selectedListId) {
      listElement.classList.add("active-list");
    }
    listsContainer.appendChild(listElement);
  });
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  taskCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderTasks(selectedList) {
  //Does this need to be broken down?
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    //console.log("rTask,taskTemplate:", taskTemplate.content);
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

render();
