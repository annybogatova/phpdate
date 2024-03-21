const draggables = document.querySelectorAll('.constructor__item');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', event => {
    draggable.classList.add('constructor__item_dragging');
    event.dataTransfer.setData("text/plane", event.target.id);

    // console.log('[draggable dragstart] --- ', draggable.textContent);
  })
  draggable.addEventListener('dragend', event => {

    draggable.classList.remove('constructor__item_dragging');
    if (draggableElement != null) {
      draggableElement.classList.remove('constructor__item_dragging');
    }

    codeGenerator();

    // console.log('[draggable dragend] --- ', draggable.textContent);
  })
})

const container_sourse = document.querySelector('.constructor__items-container-sources');
const container_result = document.querySelector('.constructor__items-container-result');

let draggableElement = null;


container_sourse.addEventListener('dragstart', event => {
  event.dataTransfer.effectAllowed = 'move';
  draggableElement = event.target.cloneNode(true);

})
//swap elements in constructor
container_result.addEventListener('dragover', event => {
  event.preventDefault();
  const afterElement = getDragAfterElement(container_result, event.clientY);
  let draggable = null;
  if (draggableElement != null) {
    draggable = draggableElement;
  } else {
    draggable = document.querySelector('.constructor__item_dragging');
  }
  if (afterElement == null) {
    // TODO: add some style
    container_result.appendChild(draggable);
  } else {
    container_result.insertBefore(draggable, afterElement);
  }
})

container_result.addEventListener('dragstart', event => {
  event.target.classList.add('constructor__item_dragging');

})

container_result.addEventListener('dragend', event => {
  console.log('dragend');
  event.target.classList.remove('constructor__item_dragging');
  codeGenerator();
  draggableElement = null;
})


function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.constructor__item:not(.constructor__item_dragging)')];
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    }
    else return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element
}



function codeGenerator() {

  let result_line = '';

  container_result.childNodes.forEach(child => {
    result_line += child.textContent;
  })

  const url = './script/php/date.php';
  const form = new FormData();
  form.append('format', result_line);
  const request = new Request(url, {
    method: 'POST',
    body: form
  })

  fetch(request)
    .then(response => {
      return response.text();
    })
    .then(data => {
      document.querySelector('.constructor__result-text').innerHTML = '';
      document.querySelector('.constructor__result-text').textContent = 'date( \'' + result_line + '\', ?int $timestamp = null): string';

      document.querySelector('.constructor_result-date').innerHTML = '';
      document.querySelector('.constructor_result-date').textContent = data.toString();
    });
}
