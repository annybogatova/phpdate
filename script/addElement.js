import { codeGenerator } from "./codeGenerator.js";
import { draggableElement } from "./index.js";

const container_result = document.querySelector('.constructor__items-container-result');
const container_sourse = document.querySelector('.constructor__items-container-sources');

const form = document.querySelector('.add-element-form');
const input = document.querySelector('.addElement-input');

form.addEventListener('submit', event => {
  console.log('submit')
  event.preventDefault();

  const value = input.value;
  if (!value) return;


  const item_template = document.querySelector('.itemWithBadge-template').content.cloneNode(true);


  // console.log(item_template)

  item_template.querySelector('.constructor__item-text').innerText = value;
  item_template.querySelector('.constructor__item-badge').innerText = 'x';
  item_template.querySelector('.constructor__item-badge').addEventListener('click', event => {
    // console.log('click')
    event.target.closest('div.constructor__item').remove();
    console.log(container_sourse.querySelector('.items__custom-container').firstElementChild == null)
    codeGenerator()
    if (container_sourse.querySelector('.items__custom-container').firstElementChild == null) {
      container_sourse.querySelector('.items__custom-container').closest('div.container-fluid').remove();
    }
  });




  if (container_sourse.querySelector('.items__custom-container') != null) {
    if (isExist()) {
      return;
    }
    container_sourse.querySelector('.items__custom-container').appendChild(item_template);
    container_sourse.querySelector('.items__custom-container').lastElementChild.classList.add('constructor__item-custom');
    // form.classList.add('was-validated')

  } else {
    if (isExist()) {
      return;
    }

    const newContainer = document.querySelector('.custom-items').content.cloneNode(true);
    container_sourse.insertBefore(newContainer, form);
    container_sourse.querySelector('.items__custom-container').appendChild(item_template);
    container_sourse.querySelector('.items__custom-container').lastElementChild.classList.add('constructor__item-custom');
    // form.classList.add('was-validated')

  }

  function isExist() {
    let exist = false;
    Array.from(document.querySelectorAll('.items__custom-container .constructor__item-text')).forEach(child => {
      if (value == child.textContent) {
        exist = true
      }
    })
    return exist;
  }

  // container_sourse.appendChild(item_template);
  input.value = '';

  container_sourse.querySelectorAll('.constructor__item-custom').forEach(item => {
    if (item.classList.contains('empty')) {

      item.classList.remove('empty');

      item.addEventListener('dragstart', event => {
        item.classList.add('constructor__item_dragging');
      })

      item.addEventListener('dragend', event => {
        item.classList.remove('constructor__item_dragging');
        if (draggableElement != null) {
          draggableElement.classList.remove('constructor__item_dragging');
        }
        codeGenerator();
      })

      item.addEventListener('click', event => {
        if (event.target.tagName != "SPAN") {

          const item_template = document.querySelector('.itemWithBadge-template').content.cloneNode(true);

          item_template.querySelector('.constructor__item-text').innerText = item.querySelector('.constructor__item-text').textContent;
          item_template.querySelector('.constructor__item-badge').innerText = '-';
          item_template.querySelector('.constructor__item-badge').addEventListener('click', event => {
            event.target.closest('div.constructor__item').remove();
            codeGenerator();
          });

          container_result.appendChild(item_template);

          codeGenerator();
        }
      })
    }
  })

})
