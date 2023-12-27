// Create Category
import {createNewCategoryDOM} from './website1.js'

const existingCategoryIds = new Set();

function getCategoryName() {
    return prompt("What is the name of your new category?");
  }
  
  //The following two functions can be combined.

  // function checkDuplicateCategory(name) {
  //  // add logic to check for duplicate category names
    // console.log("checkDupeCategory");
  // }
  
  // function createCategoryLogic(name) {
  //   //category logic here
  //   if (checkDuplicateCategory(name)) {
  //     alert("Category Name Exists");
  //   }
  //   console.log('createCategoryLogic')
  // }
  

  // function createCategory() {
  //   const name = getCategoryName();
  //   createCategoryLogic(name);
  //   createNewCategoryDOM(name);
  // }

  function createCategory() {
    const name = getCategoryName();
    if (existingCategoryIds.has(name)){
    alert('Category Name Already Exists');
    return;
  }
  existingCategoryIds.add(name);
    createNewCategoryDOM(name);
  }

  export {createCategory, existingCategoryIds} 