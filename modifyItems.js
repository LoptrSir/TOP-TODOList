//Modify Items: mouseover, change, delete,
import { createNewCategoryDOM, createNewTaskDOM } from "./website1.js"; //is this redundant?
import { existingCategoryNames, existingTaskNames } from "./createItems.js";

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
///////////////////
//Strugling with change function.
// things like New Set name and category dont carry over so child tasks get misplaced. changng category name causes child tasks to disappear.

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
function changeItem(event) {
    const element = event.target.parentElement;
    const itemName = element.dataset.name;
    const newName = prompt(`Enter a new name for "${itemName}`);
    if (newName === null || newName === "") {
      alert("Error: Enter a new name");
      return;
    } else {
      element.textContent = newName;
      element.dataset.name = newName;
      if (existingCategoryNames.has(itemName)) {
        existingCategoryNames.delete(itemName);
        existingCategoryNames.add(newName);
        createNewCategoryDOM(newName);
      } else if (existingTaskNames.has(itemName)) {
        existingTaskNames.delete(itemName);
        existingTaskNames.add(newName);
        const categoryName = element.dataset.category;
        createNewTaskDOM(newName, categoryName);
      }
      console.log(`Item name changed to: ${newName}`);
    }
    console.log("changeItem");
  }
////////////////////
function mouseoverItem() {
  console.log("mouseoverItem");
}

export { deleteItem, mouseoverItem, changeItem };
