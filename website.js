//TODO List: See info.txt

//todo: btns should be small icons that give title upon hover,  create btn creation function?,

//Logic functionality
function createCategory() {
  const name = prompt("What is the title of this category?");
  //Do I want code to parse the title?
  //Check for duplication

  // if(!name == createTaskDOM.textContent) {
  //     alert('Category Name Exists');
  // }else return name;
  createNewCategoryDOM(name);
  return name; //remove this once if is sorted.
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

function makeButton(text, id, clickHandler, parentElement) {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.id = id;  //assign ID
    button.textContent = text; //Likely to be removed once styled with icon. Can i swap this for an icon?
    button.addEventListener('mouseover', clickHandler);
    button.addEventListener('click', clickHandler);
    parentElement && parentElement.appendChild(button);
    return button;
}


function clickHandler(event) {
  //this function will need to be changed based on butonActions and createButtons logic.
  if (event.type === "mouseover") {
    //hover logic
    console.log("mouseover event");
  } else if (event.type === "click") {
    //click logic  // how do I assign relevant action when there are more than one?
    // if(source === addCategory) {
    createCategory();
    console.log("click event");
  }
}

const masterList = document.createElement("div");
masterList.classList.add("masterList");
masterList.textContent = "Category";
document.querySelector(".content").appendChild(masterList);

const addCategoryBtn = makeButton(
  "Add Category",
  "addCategoryBtn",
  clickHandler,
  document.querySelector(".masterList")
);
const changeCategoryBtn = makeButton(
  "Change Category",
  "changeCategoryBtn",
  clickHandler,
  document.querySelector(".masterList")
);
const deleteCategoryBtn = makeButton(
  "Delete Category",
  "deleteCategoryBtn",
  clickHandler,
  document.querySelector(".masterList")
);

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

  return createCategoryDOM;
}

function createNewTaskDOM() {
  const createTaskDOM = document.createElement("div");
  createTaskDOM.classList.add("createTask");
  createTaskDOM.textContent = "create name reference here";
  document.querySelector("#taskName").appendChild("createTaskDOM");

  return createTaskDOM;
}

//Temp Placement
const buttonActions = [
  //clickHandler name will need to be changed to proper action.
  {
    text: "Delete",
    clickHandler: clickHandler,
    level: [
      masterList,
      createNewCategoryDOM.createCategoryDOM,
      createNewTaskDOM.createTaskDOM,
    ],
  }, //figure out proper call
  {
    text: "Change",
    clickHandler: clickHandler,
    level: [masterList, createNewCategoryDOM, createNewTaskDOM],
  },
  {
    text: "Add",
    clickHandler: clickHandler,
    level: [masterList, createNewCategoryDOM, createNewTaskDOM],
  },
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

  contentDiv.appendChild(myFooter());
}

createWebsite();
//createNewCategoryDOM();
//createNewTaskDOM();
//createCategory();
