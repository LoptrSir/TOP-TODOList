//ToDo List

//To Work On: break into grid so that lists and tasks can manage their own height/spacing.  task dueDate/priority/notes functionality/styling,
//Note functionality: move cursor into note field upon click, reduce size of text, create an edit/delete button, display x characters, display full note on hover. clicking on displayed note triggers checkbox check (I think that has to do with html template input type checkbox).
//Priority: get radio buttons to display and update.
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



const taskNoteButton = document.querySelector('[data-task-notes-button]');
const taskNoteInput =  document.querySelector('[data-task-note-input]');

const taskPriorityButton = document.querySelector('[data-task-priority-button]');
const taskPriorityInput = document.querySelector('[data-task-priority-input]');
//const taskPriorityOptions = document.querySelector('.task-priority-options');
const taskDueDateButton = document.querySelector('[data-task-due-date-button]');
const taskDueDateInput = document.querySelector('[data-task-due-date-input]')


const deleteListButton = document.querySelector("[data-delete-list-button]");
const clearCompleteTasksButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
);

let taskNoteValue = '';

// Local Storage Elements
const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

//Event Listeners
listsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    //why not list.id instead of listId? see renderLists
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
  taskNoteInput.style.display = 'none';
  if (taskName == null || taskName == "") return;
  taskNoteValue = taskNoteInput.value; 
  console.log('nTF:', taskNoteValue);
  const taskNote = taskNoteValue;
  // let selectedPriority = '';
  // selectPriority();
  const task = createTask(taskName, taskNote);
  // const task = createTask(taskName, taskNote, selectedPriority);
  newTaskInput.value = null;
  taskNoteInput.value = null;
  taskNoteValue = '';
  //selectedPriority = '';

  // Can taskNoteValue and taskNoteInput.value be combined?
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
    //Probably need to break this bloat into a couple functions
  });

taskNoteButton.addEventListener('click', e => {
  e.preventDefault();
  taskNoteInput.style.display = 'block';
    //Move curser into field upon button click
});

// taskPriorityButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   taskPriorityInput.style.display = 'block';
// })


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

function createTask(name, note) {
// function createTask(name, note, priority) {
    return {
    id: Date.now().toString(),
    name: name,
    note: note || '',
    // priority: "",
    complete: false,
        // dueDate: new Date(dueDate),
   
   
  };
}

function createNote() {}

// function selectPriority() {
//   let selectedPriority = '';

//   taskPriorityInput.forEach((input) => {
//     if (input.check) {
//       selectedPriority = input.value;
//     }
//   })
//   return selectedPriority;
// }

function saveAndRender() {
  save();
  render();
}

function save() {
  //Local Storage Creation/Save
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

// clear My Lists data avoids duplication of existing items
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
    taskNameLabel.htmlFor = task.id;
    taskNoteLabel.htmlFor = task.id;
    taskNameLabel.append(task.name);
    taskNoteLabel.append(task.note);
    taskContainer.appendChild(taskElement);
  });
}

render();
