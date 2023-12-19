//TODO List: See info.txt

//todo: btns should be small icons that give title upon hover,  create btn creation function?,

//Logic functionality
function getCategoryName() {
  const name = prompt("What is the title of this category?"); //This will become its own function.
  //Do I want code to parse the title?
  //Check for duplication

  // if(!name == createTaskDOM.textContent) {
  //     alert('Category Name Exists');
  // }else return name;
  createNewCategoryDOM(name);

}

function createTask() {
  //taskName
  //taskDescription
  //taskDueDate
  //taskPriority
  //taskComplete
  //taskDelete
  //taskNotes //later addition
  //taskCheckList //later addition
  console.log("create task");
}

//DOM functionality

function makeButton(text, id, clickHandler, parentElement) {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.id = id;
  button.textContent = text; //swap this for an icon at a later date
  button.addEventListener("mouseover", clickHandler); //modify this to its own listener
  button.addEventListener("click", clickHandler);
  parentElement.appendChild(button);
  return button;
}

function createButton(buttonActions, parentElement, level, id) {
  buttonActions
    .filter((action) => action.level.includes(level))
    //.filter((action) => action.level === level)
    .forEach(({ text, clickHandler }) => {
      makeButton(text, id, clickHandler, parentElement);
    });
}

function clickHandler(event) {
  //this function will need to be changed based on butonActions and createButtons logic.
  if (event.type === "mouseover") {
    //hover logic
    console.log("mouseover event");
  } else if (event.type === "click") {
    //click logic  // how do I assign relevant action when there are more than one?
    // if(source === addCategory) {
    getCategoryName(); //null event creates null category modify prompt for this
    console.log("click event");
  }
}

const masterList = document.createElement("div");
masterList.classList.add("masterList");
masterList.textContent = "Category";
document.querySelector(".content").appendChild(masterList);

function createNewCategoryDOM(name) {
  const createCategoryDOM = document.createElement("div");
  createCategoryDOM.classList.add("list");
  createCategoryDOM.textContent = `${name}`;
  masterList.appendChild(createCategoryDOM);
  const addTask = document.createElement("button");
  addTask.classList.add("btn");
  addTask.textContent = "Add Task";
  const changeNameButton = document.createElement("button");
  changeNameButton.classList.add("btn");
  changeNameButton.textContent = "Change";
  const deleteNameButton = document.createElement("button");
  deleteNameButton.classList.add("btn");
  deleteNameButton.textContent = "Delete";
  createCategoryDOM.appendChild(addTask);
  createCategoryDOM.appendChild(changeNameButton);
  createCategoryDOM.appendChild(deleteNameButton);
  masterList.appendChild(createCategoryDOM);
  return createCategoryDOM;
}

function createNewTaskDOM() {
  const createTaskDOM = document.createElement("div");
  createTaskDOM.classList.add("createTask");
  createTaskDOM.textContent = "createTask";
  return createTaskDOM;
}

//Temp Placement
const buttonActions = [
  //clickHandler name will need to be changed to proper action.
  {
    text: "Delete",
    clickHandler: clickHandler,
    id: "delete",
    level: [masterList],
    // level: [masterList, createCategoryDOM, createTaskDOM],
  }, //figure out proper call
  {
    text: "Change",
    clickHandler: clickHandler,
    id: "change",
    level: [masterList],
    //level: [masterList, createCategoryDOM, createTaskDOM],
  },
  {
    text: "Add",
    clickHandler: clickHandler,
    id: "add",
    level: [masterList],
    //level: [masterList, createCategoryDOM, createTaskDOM],
  },
  //   {
  //     text: "Add Task",
  //     clickHandler: clickHandler,
  //     //clickHandler: getCategoryName,
  //     id: "addTask",
  //     level: [createCategoryDOM],
  //   },
  //title
  //notes
  //checklist
  //duedate
];

//my footer
function myFooter() {
  const footer = document.createElement("footer");
  footer.style.backgroundColor = "#333";
  footer.style.fontSize = "1rem";
  footer.style.color = "#f8afe5";
  footer.style.padding = "3px";
  footer.style.textAlign = "center";
  footer.style.position = "fixed";
  footer.style.width = "100%";
  footer.style.bottom = "0";
  footer.innerHTML = "loptrSir";
  return footer;
}

//loads page
function createWebsite() {
  const contentDiv = document.querySelector(".content");
  createButton(buttonActions, masterList, masterList);

  contentDiv.appendChild(myFooter());
}

createWebsite();
//createNewCategoryDOM();
//createNewTaskDOM();
//getCategoryName();

//Retired attempts:

//This bit is an attempt to automate buttons with unique event listeners. but it doesnt want to play.
// function createButtons(buttonActions, parentElement, level) {
//   buttonActions
//     .filter((action) => action.level.includes(level))
//     .forEach(({ text, clickHandler }) => {
//       //    makeButton(text, id, clickHandler, parentElement);
//       const button = makeButton(text, id, clickHandler, parentElement);
//       //button.document.createElement("button");
//       button.classList.add("btn");
//       button.id = id; //assign ID
//       button.textContent = text; //Likely to be removed once styled with icon. Can i swap this for an icon?
//       button.addEventListener("mouseover", clickHandler);
//       button.addEventListener("click", clickHandler);
//       parentElement && parentElement.appendChild(button);
//       return button;
//     });
// }

// const buttonActions = [
//     //clickHandler name will need to be changed to proper action.
//     {
//       text: "Delete",
//       clickHandler: clickHandler,
//       level: [
//         masterList,
//         createNewCategoryDOM.createCategoryDOM,
//         createNewTaskDOM.createTaskDOM,
//       ],
//     }, //figure out proper call
//     {
//       text: "Change",
//       clickHandler: clickHandler,
//       level: [masterList, createNewCategoryDOM, createNewTaskDOM],
//     },
//     {
//       text: "Add",
//       clickHandler: clickHandler,
//       level: [masterList, createNewCategoryDOM, createNewTaskDOM],
//     },
//     //title  //     text: "Add Task",
  //     clickHandler: clickHandler,
  //     //clickHandler: getCategoryName,
  //     id: "addTask",
  //     level: [createCategoryDOM],
  //   },
//     //notes
//     //checklist
//     //duedate
//   ];
//   document.querySelector("#taskName").appendChild(createTaskDOM);
