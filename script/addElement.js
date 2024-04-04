import { addEvent } from "./addEventOnDraggable.js";
import { deleteElement } from "./deleteElement.js";
import { draggableElement } from "./index.js";

const container_sourse = document.querySelector('.constructor__items-container-sources');

const form = document.querySelector('.add-element-form');
const input = document.querySelector('.addElement-input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const value = input.value;
  if (!value) return;

  const newElement = document.createElement('div');
  newElement.classList.add('constructor__item');
  newElement.classList.add('constructor__item-custom');
  newElement.setAttribute('draggable', 'true');

  const newElementText = document.createElement('p');
  newElementText.classList.add('constructor__item-text');
  newElementText.innerText = value;

  const newBadge = document.createElement('span');
  newBadge.classList.add('constructor__item-badge');
  newBadge.innerText = 'x';
  newBadge.addEventListener('click', () => {
    deleteElement(newElement, container_sourse);
  });

  newElement.appendChild(newElementText);
  newElement.appendChild(newBadge);

  addEvent(newElement, draggableElement);

  // newElement.addEventListener('dragstart', event => {
  //   newElement.classList.add('constructor__item_dragging');
  // })
  // newElement.addEventListener('dragend', event => {
  //   newElement.classList.remove('constructor__item_dragging');
  //   if (draggableElement != null) {
  //     draggableElement.classList.remove('constructor__item_dragging');
  //   }
  //   codeGenerator();
  // })


  container_sourse.appendChild(newElement);
  input.value = '';
})
