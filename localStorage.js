//TOP TODO List
//Local Storage:

//localStorage.js

// Local Storage Elements
export const LOCAL_STORAGE_LIST_KEY = "task.lists";
export const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
export let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
export let selectedListId = {value :localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)};
