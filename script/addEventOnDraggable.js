import { codeGenerator } from "./codeGenerator.js";
import { deleteElement } from "./deleteElement.js";

const container_result = document.querySelector('.constructor__items-container-result');

export function addEvent(draggable, draggableElement) {
  draggable.addEventListener('dragstart', event => {
    draggable.classList.add('constructor__item_dragging');
  })
  draggable.addEventListener('dragend', event => {
    draggable.classList.remove('constructor__item_dragging');
    if (draggableElement != null) {
      draggableElement.classList.remove('constructor__item_dragging');
    }
    codeGenerator();
  })
  draggable.addEventListener('click', event => {

    const newElement = draggable.cloneNode(true);
    newElement.classList.remove('constructor__item-source');
    newElement.classList.add('constructor__item-custom');

    const newBadge = document.createElement('span');
    newBadge.classList.add('constructor__item-badge');
    newBadge.innerText = '-';
    newBadge.addEventListener('click', () => {
      deleteElement(newElement, container_result);
      codeGenerator();
    });

    const oldBadge = draggable.querySelector('.constructor__item-badge');

    if (oldBadge != null) {
      newElement.querySelector('.constructor__item-badge').remove();
    }

    newElement.appendChild(newBadge);

    container_result.appendChild(newElement);

    codeGenerator();
  })
}
