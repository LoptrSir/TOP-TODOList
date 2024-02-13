//TOP TODO List
//Local Storage:



// Local Storage Elements
export const LOCAL_STORAGE_LIST_KEY = "task.lists";
export const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
export let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
export let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);



//For easy copy into new file, update this if list is modified.
// import {
//     LOCAL_STORAGE_LIST_KEY,
//     LOCAL_STORAGE_SELECTED_LIST_ID_KEY,
//     lists,
//     selectedListId
// } from './localStorage.js';