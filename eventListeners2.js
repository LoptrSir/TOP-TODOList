//Event Listeners

//This page holds the functions related to the event listeners.
//eventListeners2.js

//Imports
//GlobalDeclarations
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
    clearCompleteTasksButton
  } from './globalDeclarations.js';
//Local Storage
import {
  LOCAL_STORAGE_LIST_KEY,
  LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
  lists,
  selectedListId,
} from "./localStorage.js";

//Functions
import {
createList, 
// createTask, 
// hideTaskDetails, 
// resetPriorityRadioButtons, 
// toggleInputField, 
// isValidDate, 
saveAndRender, 
save, 
// render, 
// clearElement, 
// renderLists, 
renderTaskCount, 
// renderTasks,
} from './functions2.js';

//let lists = defaultLists;
console.log("EL2 sli:", selectedListId);

// Event Listener Functions
export function handleListsContainer(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId.value = e.target.dataset.listId;
    console.log("EL F hlc sli:", selectedListId);
    saveAndRender();
  }
}

export function handleTaskContainer (e) {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListId.value);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
};

export function handleNewListForm (e) {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName == null || listName == "") return;
  const list = createList(listName);
  // console.log('EL newListFormNAME:', list);
  newListInput.value = null;
  lists.push(list);
  console.log("EL newListFormNAME:", list);
  console.log("EL newListFormARRAY:", lists);
  saveAndRender();
};

