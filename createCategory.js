// Create Category
//This page is now obsolete 12/29 combined into parent event handler.

import { createNewCategoryDOM } from "./website1.js";

const existingCategoryNames = new Set();

// function getCategoryName() {
//   prompt("What is the name of your new category?");
//   if (prompt === null || prompt === "") {
//     alert("Error: Enter a name");
//   } else {
//     return prompt;
//   }
// }

// function createCategory() {
//   const name = getCategoryName();
//   if (existingCategoryNames.has(name)) {
//     alert("Category Name Already Exists");
//     return;
//   }
//   existingCategoryNames.add(name);
//   createNewCategoryDOM(name);
// }

function createCategory() {
  const name =   prompt("What is the name of your new category?");
  if (name === null) {
      return;
  } else if (name === "") {
    alert("Error: Enter a name");
    return;
  }

  if (existingCategoryNames.has(name)) {
    alert("Category Name Already Exists");
    return;
  }
  existingCategoryNames.add(name);
  createNewCategoryDOM(name);
}

export { createCategory, existingCategoryNames };
