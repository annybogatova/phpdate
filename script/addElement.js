const form = document.querySelector('.add-element-form');
const input = document.querySelector('.addElement-input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const value = input.value;
  if (!value) return;

  const newElement = document.createElement('p');
  newElement.classList.add('constructor__item');
  newElement.classList.add('constructor__item-custom');
  newElement.setAttribute('draggable', 'true');
  newElement.innerText = value;

  newElement.addEventListener('dragstart', event => {
    newElement.classList.add('constructor__item_dragging');
  })
  newElement.addEventListener('dragend', event => {
    newElement.classList.remove('constructor__item_dragging');
    if (draggableElement != null) {
      draggableElement.classList.remove('constructor__item_dragging');
    }
    codeGenerator();
  })

  container_sourse.appendChild(newElement);
  input.value = '';
})
