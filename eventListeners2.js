//Event Listeners

//This page holds the functions related to the event listeners.
//eventListeners2.js

//Imports
//Local Storage
import {
  LOCAL_STORAGE_LIST_KEY,
  LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
  lists as defaultLists,
  selectedListId,
} from "./localStorage.js";

//Functions
import { saveAndRender } from "./website2.js";

let lists = defaultLists;
console.log("EL2 sli:", selectedListId);

// Event Listener Functions
export function handleListsContainer(e) {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId.value = e.target.dataset.listId;
    console.log("EL F hlc sli:", selectedListId);
    saveAndRender();
  }
}
