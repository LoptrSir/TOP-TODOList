//ToDo List

//To Work On:
//Filter Tasks: priority, dueDate, date added. Filter secondary by non dominate selection.
//Task: note, priority, and due date will not align-items: center without over riding ellipsis on note.
//Task functionality: add a single edit button to the entire task OR have edits on hover of each element?
//Priority:Color priority based on option selected. (place popup window in a better location. later)
//Calendar: Get dueDate displaying margin-right.
//If no list active refresh displays blank task-list, should not display if no active list
//Task buttons to icons?:
//To ponder at a future date:
//.task-list: Explore spacing of task elements to the container instead of the body.
//Add Dark/Light display option.

////////////////////////////////////////////////////////////////////////////

//website2.js

//Imports
//Global Declarations
import {
  listsContainer,
  newListForm,
  newListInput,
  taskDisplayContainer,
  listTitleElement,
  taskCountElement,
  taskContainer,
  taskTemplate,
  newTaskForm,
  newTaskInput,
  taskNoteButton,
  taskNoteInput,
  taskPriorityButton,
  taskPriorityOptions,
  taskDueDateButton,
  taskDueDateInput,
  deleteListButton,
  clearCompleteTasksButton,
} from "./globalDeclarations.js";

//Local Storage
import {
  LOCAL_STORAGE_LIST_KEY,
  LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
  lists as defaultLists,
  selectedListId,
} from "./localStorage.js";
let lists = defaultLists;

// //Event Listener Functions
import * as eventListeners from "./eventListeners2.js";

//Functions
import {
createTask, 
hideTaskDetails, 
resetPriorityRadioButtons, 
toggleInputField, 
isValidDate, 
saveAndRender, 
render, 
} from './functions2.js';

// ^^^^^Global Declarations^^^^^  moved into globalDeclarations.js
// ^^^^^Local Storage Elements^^^^^  moved into localStorage.js

//Event Listeners to be moved to eventListeners2

// taskContainer.addEventListener("click", (e) => {
//   if (e.target.tagName.toLowerCase() === "input") {
//     const selectedList = lists.find((list) => list.id === selectedListId.value);
//     const selectedTask = selectedList.tasks.find(
//       (task) => task.id === e.target.id
//     );
//     selectedTask.complete = e.target.checked;
//     save();
//     renderTaskCount(selectedList);
//   }
// });

// newListForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const listName = newListInput.value;
//   if (listName == null || listName == "") return;
//   const list = createList(listName);
//   // console.log('EL newListFormNAME:', list);
//   newListInput.value = null;
//   lists.push(list);
//   console.log("EL newListFormNAME:", list);
//   console.log("EL newListFormARRAY:", lists);
//   saveAndRender();
// });

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
  console.log("EL nTF date value:", dueDate);
  if (!isValidDate(dueDate)) {
    alert("Please enter valid mm/dd/yy");
    taskDueDateInput.value = null;
    return;
  }
  const task = createTask(taskName, taskNote, taskPriority, dueDate);
  newTaskInput.value = null;
  taskNoteInput.value = null;
  taskDueDateInput.value = null;
  resetPriorityRadioButtons(taskPriorityOptions);
  const selectedList = lists.find((list) => list.id === selectedListId.value);
  selectedList.tasks.push(task);
  saveAndRender();
  // console.log("EL nTF, array item", selectedList);
});

taskNoteButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleInputField(taskNoteInput);
});

taskPriorityButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleInputField(taskPriorityOptions);
});

taskDueDateButton.addEventListener("click", (e) => {
  e.preventDefault();
  toggleInputField(taskDueDateInput);
});

clearCompleteTasksButton.addEventListener("click", (e) => {
  const selectedList = lists.find((list) => list.id === selectedListId.value);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

deleteListButton.addEventListener("click", (e) => {
const deleteList = selectedListId.value;
  // lists = lists.filter((list) => list.id !== selectedListId.value);
  lists = lists.filter((list) => list.id !== deleteList);
  console.log('EL dlb:', lists);
  selectedListId.value = null;
  saveAndRender();
  // selectedListId.value = null;
});

function setupEventListeners() {
  listsContainer.addEventListener("click", eventListeners.handleListsContainer);
  taskContainer.addEventListener("click", eventListeners.handleTaskContainer);
  newListForm.addEventListener('click', eventListeners.handleNewListForm);
  // newTaskForm.addEventListener('click', eventListeners.handleNewTaskForm);
  // taskNoteButton.addEventListener('click', eventListeners.handleTaskNoteButton);
  // taskPriorityButton.addEventListener('click', eventListeners.handleTaskPriorityButton);
  // taskDueDateButton.addEventListener('click', eventListeners.handleTaskDueDateButton);
  // clearCompleteTasksButton.addEventListener('click', eventListeners.handleClearCompleteTasksButton);
  // deleteListButton.addEventListener('click', eventListeners.handleDeleteListButton);
}
setupEventListeners();

//  ^^^^^Functions^^^^^ migrated to functions2js

render();
