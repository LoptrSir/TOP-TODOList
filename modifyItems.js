//Modify Items: mouseover, change, delete,
import { createNewCategoryDOM, createNewTaskDOM } from "./website1.js"; //is this redundant?
import { existingCategoryNames, existingTaskNames } from "./createItems.js";

import {   mouseoverHandler,
  handleAddCategory,
  handleAddTask,
  handleChange,
  handleDelete,
  handleCompleteTask, } from './eventListeners.js'

function deleteItem(event) {
  const element = event.target.parentElement;
  const itemName = element.dataset.name;
  const category = element.dataset.category; //Is this used? seems redundant.
  if (existingCategoryNames.has(itemName)) {
    existingCategoryNames.delete(itemName); //Remove from set
    element.remove();
  } else if (existingTaskNames.has(itemName)) {
    existingTaskNames.delete(itemName); //Remove from set
    element.remove();
  } else {
    alert(`Item not found: ${itemName}`);
  }
}
///////////////////////
function changeItem(event) {
  const element = event.target.parentElement;
  const itemName = element.dataset.name;
  const newName = prompt(`Enter a new name for: ${itemName}`);
  if (newName === null || newName === "") {
    alert("Error: Enter a new name");
    return;
  }
  // Create a new element with the updated name
  const newElement = document.createElement(element.tagName);
  // const newElement = element.cloneNode(true);

  // Clone attributes and child nodes
  for (let i = 0; i < element.attributes.length; i++) {
    newElement.setAttribute(element.attributes[i].name, element.attributes[i].value);
  }

  newElement.textContent = newName;

  // If it's a category, update the corresponding masterList element
  if (newElement.classList.contains("categoryList")) {
    const sanitizedId = newName.toLowerCase().replace(/\s+/g, "-");
    newElement.id = sanitizedId;


    // You may need additional logic here to update child tasks or order if applicable
  }

  // Clone child nodes
  for (let i = 0; i < element.children.length; i++) {
    const childClone = element.children[i].cloneNode(true);
    
    // if (childClone.tagName === "button") {
    //   if (childClone.tagName === "BUTTON") {
    //   childClone.addEventListener("mouseover", mouseoverHandler);
    //   childClone.addEventListener("click", childClone.clickHandler);
    //   // Add more event listeners if needed
    // }

    if (childClone.tagName === "BUTTON") {
      Array.from(element.children[i].attributes).forEach(attr => {
        if (attr.name.startsWith("on")) {
        childClone.setAttribute(attr.name, attr.value);
        }
      });
    }
    
    newElement.appendChild(childClone);
  }

  // Replace the existing element with the new one
  element.parentNode.replaceChild(newElement, element);

  console.log(`Item name changed to: ${newName}`);

  console.log("changeItem");
}

////////////////////
function mouseoverItem() {
  console.log("mouseoverItem");
}

export { deleteItem, mouseoverItem, changeItem };

///////////////////
//Strugling with change function.
// things like New Set name and100% category dont carry over so child tasks get misplaced. changng category name causes child tasks to disappear.

//Sort of works but creates new elements instead of changing the existing one.
// function changeItem(event) {
//   const element = event.target.parentElement;
//   const itemName = element.dataset.name;
//   const newName = prompt(`Enter a new name for "${itemName}`);
//   if (newName === null || newName === "") {
//     alert("Error: Enter a new name");
//     return;
//   } else {
//     element.textContent = newName;
//     element.dataset.name = newName;
//     if (existingCategoryNames.has(itemName)) {
//       existingCategoryNames.delete(itemName);
//       existingCategoryNames.add(newName);
//       createNewCategoryDOM(newName);
//     } else if (existingTaskNames.has(itemName)) {
//       existingTaskNames.delete(itemName);
//       existingTaskNames.add(newName);
//       const categoryName = element.dataset.category;
//       createNewTaskDOM(newName, categoryName);
//     }
//     console.log(`Item name changed to: ${newName}`);
//   }
//   console.log("changeItem");
// }
/////////////////
/////////////////
// function changeItem(event) {
//     const element = event.target.parentElement;
//     const itemName = element.dataset.name;
//     const newName = prompt(`Enter a new name for: ${itemName}`);
//     if (newName === null || newName === "") {
//       alert("Error: Enter a new name");
//       return;
//     } else {
//       element.textContent = newName;
//       element.dataset.name = newName;
//       if (existingCategoryNames.has(itemName)) {
//         existingCategoryNames.delete(itemName);
//         existingCategoryNames.add(newName);
//         createNewCategoryDOM(newName);
//       } else if (existingTaskNames.has(itemName)) {
//         existingTaskNames.delete(itemName);
//         existingTaskNames.add(newName);
//         const categoryName = element.dataset.category;
//         createNewTaskDOM(newName, categoryName);
//       }
//       console.log(`Item name changed to: ${newName}`);
//     }
//     console.log("changeItem");
//   }
////////////////////
