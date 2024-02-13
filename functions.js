//TOP TODO List
//Functions:

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
    lists,
    selectedListId
} from './localStorage.js';
  // Local Storage Creation/Save


//Functions
export function createList(name) {
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
  
  //Local Storage Creation/Save
  export function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
  }
  
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
    
  export function render() {
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
  export function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  
  export function renderLists() {
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
  
  export function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.tasks.filter(
      (task) => !task.complete
    ).length;
    const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
    taskCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
  }
  
  export function renderTasks(selectedList) {
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

//For easy copy into new file, update this if list is modified.  
//   import {
//     createList,
//     createTask,
//     hideTaskDetails,
//     resetPriorityRadioButtons,
//     toggleInputField,
//     isValidDate,
//     saveAndRender,
//     save,
//     render,
//     clearElement,
//     renderLists,
//     renderTaskCount,
//     renderTasks,
//     } from './functions.js';