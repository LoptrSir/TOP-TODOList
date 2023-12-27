// Create Category
import {createNewCategoryDOM} from './website1.js'

const existingCategoryNames = new Set();

function getCategoryName() {
    return prompt("What is the name of your new category?");
  }
  
  function createCategory() {
    const name = getCategoryName();
    if (existingCategoryNames.has(name)){
    alert('Category Name Already Exists');
    return;
  }
  existingCategoryNames.add(name);
    createNewCategoryDOM(name);
  }

  export {createCategory, existingCategoryNames}; 