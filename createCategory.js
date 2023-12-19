// Category Module Export
import {createNewCategoryDOM} from './website1.js'

function getCategoryName() {
    return prompt("What is the name of your new category?");
  }
  
  function checkDuplicateCategory(name) {
    //add logic to check for duplicate category names
    console.log("checkDupeCategory");
  }
  
  function createCategoryLogic(name) {
    //category logic here
    if (checkDuplicateCategory(name)) {
      alert("Category Name Exists");
    }
    console.log('createCategoryLogic')
  }
  
  function createCategory() {
    //Make this a master function with the above as sub functions
    const name = getCategoryName();
    createCategoryLogic(name);
    createNewCategoryDOM(name);
  }

  export {createCategory,} //all other functions are called only by createCategory, no need to export them.