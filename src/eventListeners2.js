//TOP TODO List
//Event Listener Functions

//eventListeners2.js

//Imports

import {
  newListInput,
  newTaskInput,
  taskNoteInput,
  taskPriorityOptions,
  taskDueDateInput,
} from "./globalDeclarations.js";

import {
  lists as defaultLists,
  selectedListId,
} from "./localStorage.js";
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

console.log("EL2 sli:", selectedListId);

// Event Listener Functions
export function handleListsContainer(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId.value = e.target.dataset.listId;
    console.log("EL F hlc sli:", selectedListId);
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
  // console.log('EL newListFormNAME:', list);
  newListInput.value = null;
  lists.push(list);
  //attempt to add default list. put in wrong place.
  // if (lists.length === 1) {
  //   const defaultListName = 'Example ToDo List';
  //   const defaultList = createList(defaultListName);
  //   lists.push(defaultList);
  // }
  console.log("EL newListFormNAME:", list);
  console.log("EL newListFormARRAY:", lists);
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
  console.log("EL nTF date value:", taskDueDate);
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

export function handleClearCompleteTasksButton (e) {
  const selectedList = lists.find((list) => list.id === selectedListId.value);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
};

export function handleDeleteListButton (e) {
  console.log("EL dlb pre:", lists);
  // lists = lists.filter((list) => list.id !== selectedListId.value);
  //*****using splice instead of filter edits to origin lists in globalDeclarations instead of local lists declared after import.*****
  lists.splice(lists.findIndex(list => list.id === selectedListId.value), 1);
  console.log("EL dlb:", lists);
  console.log("EL dlb sli:", selectedListId);
  selectedListId.value = null;
  console.log("EL dlb sli null:", selectedListId);
  console.log("EL dlb null:", lists);
  saveAndRender();
};