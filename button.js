// Create Buttons logic
import { mouseoverHandler } from "./eventListeners.js";

export function createButton(text, id, clickHandler) {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.id = id;
    button.textContent = text;
    button.addEventListener("mouseover", mouseoverHandler);
    button.addEventListener("click", clickHandler);
    return button;
  }

