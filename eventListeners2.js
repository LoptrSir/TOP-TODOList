
//Event Listeners

//Import

//Local Storage
import {
    LOCAL_STORAGE_LIST_KEY,
    LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
    // DEFAULT_VALUE,
    lists,
    // selectedListId,
    // lists as defaultLists,
    } from './website2.js';

//Event Listeners
import {
    selectedListId as defaultSelectedListId,
    saveAndRender,
} from './website2.js'; 
// console.log('defaultSLI:', defaultSelectedListId);

// let lists = defaultLists
let selectedListId = defaultSelectedListId;
// let selectedListId = selectedListId;
console.log('import SLI:', selectedListId);

export function handleListsContainer(e) {
    if (e.target.tagName.toLowerCase() === "li") {
      selectedListId = e.target.dataset.listId;
      saveAndRender();
    }
  };