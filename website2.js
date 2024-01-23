//ToDo List

//To Work On: break into grid so that lists and tasks can manage their own height/spacing.  task dueDate/priority/notes functionality/styling,
//Note functionality: move cursor into note field upon click, reduce size of text, create an edit/delete button, display x characters, display full note on hover. clicking on displayed note triggers checkbox check (I think that has to do with html template input type checkbox).
//Priority: radio button working and displaying, however: it always displays high.  Do i need some kind of if/forEach/loop to verify checked? why is this needed?  <label data-task-priority-display> priority wont display without it.
//Calendar:
//Task buttons to icons:

//Global Declarations
const listsContainer = document.querySelector("[data-lists]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const taskDisplayContainer = document.querySelector(
  "[data-task-display-container]"
);
const listTitleElement = document.querySelector("[data-list-title");
const taskCountElement = document.querySelector("[data-task-count]");
const taskContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskForm = document.querySelector("[data-new-task-form");
const newTaskInput = document.querySelector("[data-new-task-input");
const taskNoteButton = document.querySelector("[data-task-notes-button]");
const taskNoteInput = document.querySelector("[data-task-note-input]");

const taskPriorityButton = document.querySelector(
  "[data-task-priority-button]"
);
// const taskPriorityInput = document.querySelector(
//   "input[data-task-priority-input]:checked"
// );
// const taskPriorityInput = document.querySelector("[data-task-priority-input]");
//const taskPriorityLabel = document.querySelector('.task-priority-label');
// const taskPriorityDisplay = document.querySelector(  "[data-task-priority-display]");
const taskPriorityOptions = document.querySelector(".task-priority-options");

const taskDueDateButton = document.querySelector("[data-task-due-date-button]");
const taskDueDateInput = document.querySelector("[data-task-due-date-input]");

const deleteListButton = document.querySelector("[data-delete-list-button]");
const clearCompleteTasksButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
);

let taskNoteValue = "";
let selectedPriority = "";

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
  taskNoteInput.style.display = "none";
  taskPriorityOptions.style.display = "none";
  if (taskName == null || taskName == "") return;
  const taskNote = taskNoteInput.value;
  const taskPriority = taskPriorityOptions.querySelector('input[type="radio"]:checked')?.value || "";
  console.log("nTFpriority:", taskPriority);
  const task = createTask(taskName, taskNote, taskPriority);
  newTaskInput.value = null;
  taskNoteInput.value = null;
  const radioButtons = taskPriorityOptions.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
  console.log("nTF, array item", selectedList);

  //Probably need to break this bloat into a couple functions: radioButtonReset, 
});

taskNoteButton.addEventListener("click", (e) => {
  e.preventDefault();
  taskNoteInput.style.display = "block";
  //Move curser into field upon button click
});

taskPriorityButton.addEventListener("click", (e) => {
  e.preventDefault();
  taskPriorityOptions.style.display = "block";
  // selectPriority()
});

taskPriorityOptions.addEventListener("change", (e) => {
  if (e.target.type === "radio" && e.target.checked) {
    selectedPriority = e.target.value;
    console.log("taskPriorityOptions:", selectedPriority);
    const radioButtons = taskPriorityOptions.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radioButton) => {
      if (radioButton !== e.target) {
        radioButton.checked = false;
      }
    })
  }
});
//taskDueDateButton

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

function createTask(name, note, priority) {
  return {
    id: Date.now().toString(),
    name: name,
    note: note || "",
    priority: priority || "",
    // dueDate: new Date(dueDate) || '',
    complete: false,
  };
}

//function createNote() {}

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
    taskDisplayContainer.style.display = "";
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
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const taskNameLabel = taskElement.querySelector(".task-name-label");
    const taskNoteLabel = taskElement.querySelector(".task-note-label");
    const taskPriorityLabel = taskElement.querySelector(".task-priority-label");
    taskNameLabel.htmlFor = task.id;
    taskNoteLabel.htmlFor = task.id;
    taskPriorityLabel.htmlFor = task.id;
    taskNameLabel.append(task.name);
    taskNoteLabel.append(task.note);
    taskPriorityLabel.append(task.priority);
    taskContainer.appendChild(taskElement);
  });
}

render();
