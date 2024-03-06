//TOP TODO List
//ToDo List

//Features to add in future:
//Filter Tasks: priority, dueDate, date added. Filter secondary by non dominate selection.
//Task: note, priority, and due date will not align-items: center without over riding ellipsis on note.
//Task functionality: add a single edit button to the entire task OR have edits on hover of each element?
//Priority:Color priority based on option selected. (place popup window in a better location. later)
//Calendar: Get dueDate displaying margin-right.
//.task-list: Explore spacing of task elements to the container instead of the body.
//Add Dark/Light display option.


//Website
import * as eventListeners from "./eventListeners2.js";
import { render, myFooter, defaultDisplay } from "./functions2.js";

export function website() {
  eventListeners.setupEventListeners();
  defaultDisplay();
  render();
  myFooter();
}
