//TOP TODO List


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
    clearCompleteTasksButton
  } from './globalDeclarations.js';
//Local Storage
import {
    LOCAL_STORAGE_LIST_KEY,
    LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
    lists as defaultLists,
    selectedListId as defaultSelectedListId,
} from './localStorage.js';
//functions
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

    // import {
    // createList,
    // createTask,
    // hideTaskDetails,
    // resetPriorityRadioButtons,
    // toggleInputField,
    // isValidDate,
    // saveAndRender,
    // save,
    // render,
    // clearElement,
    // renderLists,
    // renderTaskCount,
    // renderTasks,
    // } from './webpage.js';

//Event Listener Functions
//   listsContainer.addEventListener("click", (e) => 
let lists = defaultLists;
let selectedListId = defaultSelectedListId;

export function handleListsContainer(e) {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedListId = e.target.dataset.listId;
      saveAndRender();
    }
  };
  
//   taskContainer.addEventListener("click", (e) => 
  export function handleTaskContainer(e) {
    if (e.target.tagName.toLowerCase() === "input") {
      const selectedList = lists.find((list) => list.id === selectedListId);
      const selectedTask = selectedList.tasks.find(
        (task) => task.id === e.target.id
      );
      selectedTask.complete = e.target.checked;
      save();
      renderTaskCount(selectedList);
    }
  };
  
//   export let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);


//   newListForm.addEventListener("submit", (e) => 
  export function handleNewListForm(e) {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName == "") return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    saveAndRender();
  };
  
//   newTaskForm.addEventListener("submit", (e) =>blessed hellride 
  export function handleNewTaskForm(e) {
    e.preventDefault();
    const taskName = newTaskInput.value;
    hideTaskDetails();
    if (taskName == null || taskName == "") return;
    const taskNote = taskNoteInput.value;
    const taskPriority =
      taskPriorityOptions.querySelector('input[type="radio"]:checked')?.value ||
      "";
    const dueDate = taskDueDateInput.value;
    console.log('nTF date value:', dueDate);
    if(!isValidDate(dueDate)){
      alert('Please enter valid mm/dd/yy' );
      taskDueDateInput.value = null;
      return;
    }
    const task = createTask(taskName, taskNote, taskPriority, dueDate);
    newTaskInput.value = null;
    taskNoteInput.value = null;
    taskDueDateInput.value = null;
    resetPriorityRadioButtons(taskPriorityOptions);
    const selectedList = lists.find((list) => list.id === selectedListId);
    selectedList.tasks.push(task);
    saveAndRender();
    // console.log("nTF, array item", selectedList);
  };
  
//   taskNoteButton.addEventListener("click", (e) => 
  export function handleTaskNoteButton(e) {
    e.preventDefault();
    toggleInputField(taskNoteInput);
  };
  
//   taskPriorityButton.addEventListener("click", (e) => 
  export function handleTaskPriorityButton(e) {
    e.preventDefault();
    toggleInputField(taskPriorityOptions);
  };
  
//   taskDueDateButton.addEventListener("click", (e) => 
  export function handleTaskDueDateButton(e) {
    e.preventDefault();
    toggleInputField(taskDueDateInput)
  };
  
//   clearCompleteTasksButton.addEventListener("click", (e) => 
  export function handleClearCompleteTasksButton(e) {
    const selectedList = lists.find((list) => list.id === selectedListId);
    selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
    saveAndRender();
  };
  
//   deleteListButton.addEventListener("click", (e) => 
  export function handleDeleteListButton(e) {
    lists = lists.filter((list) => list.id !== selectedListId);
    selectedListId = null;
    saveAndRender();
  };


//Event Listeners
// listsContainer.addEventListener("click", (e) => {
//     if (e.target.tagName.toLowerCase() === "li") {
//       selectedListId = e.target.dataset.listId;
//       saveAndRender();
//     }
//   });
  
//   taskContainer.addEventListener("click", (e) => {
//     if (e.target.tagName.toLowerCase() === "input") {
//       const selectedList = lists.find((list) => list.id === selectedListId);
//       const selectedTask = selectedList.tasks.find(
//         (task) => task.id === e.target.id
//       );
//       selectedTask.complete = e.target.checked;
//       save();
//       renderTaskCount(selectedList);
//     }
//   });
  
//   newListForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const listName = newListInput.value;
//     if (listName == null || listName == "") return;
//     const list = createList(listName);
//     newListInput.value = null;
//     lists.push(list);
//     saveAndRender();
//   });
  
//   newTaskForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const taskName = newTaskInput.value;
//     hideTaskDetails();
//     if (taskName == null || taskName == "") return;
//     const taskNote = taskNoteInput.value;
//     const taskPriority =
//       taskPriorityOptions.querySelector('input[type="radio"]:checked')?.value ||
//       "";
//     const dueDate = taskDueDateInput.value;
//     console.log('nTF date value:', dueDate);
//     if(!isValidDate(dueDate)){
//       alert('Please enter valid mm/dd/yy' );
//       taskDueDateInput.value = null;
//       return;
//     }
//     const task = createTask(taskName, taskNote, taskPriority, dueDate);
//     newTaskInput.value = null;
//     taskNoteInput.value = null;
//     taskDueDateInput.value = null;
//     resetPriorityRadioButtons(taskPriorityOptions);
//     const selectedList = lists.find((list) => list.id === selectedListId);
//     selectedList.tasks.push(task);
//     saveAndRender();
//     // console.log("nTF, array item", selectedList);
//   });
  
//   taskNoteButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     toggleInputField(taskNoteInput);
//   });
  
//   taskPriorityButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     toggleInputField(taskPriorityOptions);
//   });
  
//   taskDueDateButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     toggleInputField(taskDueDateInput)
//   });
  
//   clearCompleteTasksButton.addEventListener("click", (e) => {
//     const selectedList = lists.find((list) => list.id === selectedListId);
//     selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
//     saveAndRender();
//   });
  
//   deleteListButton.addEventListener("click", (e) => {
//     lists = lists.filter((list) => list.id !== selectedListId);
//     selectedListId = null;
//     saveAndRender();
//   });