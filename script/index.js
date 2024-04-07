import { codeGenerator } from "./codeGenerator.js";



export const characters = [
  //day
  {
    character: 'd',
    description: 'День месяца, 2 цифры с ведущим нулём',
    category: 'day'
  },
  {
    character: 'D',
    description: 'Текстовое представление дня недели, 3 символа',
    category: 'day'
  },
  {
    character: 'j',
    description: 'День месяца без ведущего нуля',
    category: 'day'
  },
  {
    character: 'l',
    description: 'Полное наименование дня недели',
    category: 'day'
  },
  {
    character: 'N',
    description: 'Порядковый номер дня недели ISO 8601 (от 1 до 7)',
    category: 'day'
  },
  {
    character: 'S',
    description: 'Английский суффикс порядкового числительного дня месяца, 2 символа',
    category: 'day'
  },
  {
    character: 'w',
    description: 'Порядковый номер дня недели',
    category: 'day'
  },
  {
    character: 'z',
    description: 'Порядковый номер дня в году (начиная с 0)',
    category: 'day'
  },
  //week
  {
    character: 'W',
    description: 'Порядковый номер недели года в соответствии со стандартом ISO 8601; недели начинаются с понедельника',
    category: 'day'
  },
  //month
  {
    character: 'F',
    description: 'Полное наименование месяца, например, January или March',
    category: 'month'
  },
  {
    character: 'm',
    description: 'Порядковый номер месяца с ведущим нулём',
    category: 'month'
  },
  {
    character: 'M',
    description: 'Сокращённое наименование месяца, 3 символа',
    category: 'month'
  },
  {
    character: 'n',
    description: 'Порядковый номер месяца без ведущего нуля',
    category: 'month'
  },
  {
    character: 't',
    description: 'Количество дней в указанном месяце',
    category: 'month'
  },
  //year
  {
    character: 'L',
    description: 'Признак високосного года 	1, если год високосный, иначе 0.',
    category: 'year'
  },
  {
    character: 'o',
    description: 'Номер года в соответствии со стандартом ISO 8601',
    category: 'year'
  },
  {
    character: 'X',
    description: 'Расширенное полное числовое представление года, не менее 4 цифр, с - для годов до нашей эры и + для годов нашей эры.',
    category: 'year'
  },
  {
    character: 'x',
    description: 'Расширенное полное числовое представление, если требуется, или стандартное полное числовое представление, если возможно',
    category: 'year'
  },
  {
    character: 'Y',
    description: 'Полное числовое представление года, не менее 4 цифр, с - для годов до нашей эры.',
    category: 'year'
  },
  {
    character: 'y',
    description: 'Номер года, 2 цифры',
    category: 'year'
  },
  //time
  {
    character: 'a',
    description: 'Ante meridiem или Post meridiem в нижнем регистре',
    category: 'time'
  },
  {
    character: 'A',
    description: 'Ante meridiem или Post meridiem в верхнем регистре',
    category: 'time'
  },
  {
    character: 'B',
    description: 'Время в формате Интернет-времени (альтернативной системы отсчёта времени суток). От 000 до 999',
    category: 'time'
  },
  {
    character: 'g',
    description: 'Часы в 12-часовом формате без ведущего нуля',
    category: 'time'
  },
  {
    character: 'G',
    description: 'Часы в 24-часовом формате без ведущего нуля',
    category: 'time'
  },
  {
    character: 'h',
    description: 'Часы в 12-часовом формате с ведущим нулём',
    category: 'time'
  },
  {
    character: 'H',
    description: 'Часы в 24-часовом формате с ведущим нулём',
    category: 'time'
  },
  {
    character: 'i',
    description: 'Минуты с ведущим нулём',
    category: 'time'
  },
  {
    character: 's',
    description: 'Секунды с ведущим нулём',
    category: 'time'
  },
  {
    character: 'u',
    description: 'Микросекунды',
    category: 'time'
  },
  {
    character: 'v',
    description: 'Миллисекунды. Замечание такое же, как и для u. ',
    category: 'time'
  },
  //time zone
  {
    character: 'e',
    description: 'Идентификатор часового пояса',
    category: 'time zone'
  },
  {
    character: 'I',
    description: 'Признак летнего времени: 1, если дата соответствует летнему времени, 0 в противном случае',
    category: 'time zone'
  },
  {
    character: 'O',
    description: 'Разница со временем по Гринвичу без двоеточия между часами и минутами',
    category: 'time zone'
  },
  {
    character: 'P',
    description: 'Разница со временем по Гринвичу с двоеточием между часами и минутами',
    category: 'time zone'
  },
  {
    character: 'p',
    description: 'То же, что и P, но возвращает Z вместо +00:00 (доступен, начиная с PHP 8.0.0) ',
    category: 'time zone'
  },
  {
    character: 'T',
    description: 'Аббревиатура часового пояса, если известна; в противном случае смещение по Гринвичу.',
    category: 'time zone'
  },
  {
    character: 'Z',
    description: 'Смещение часового пояса в секундах',
    category: 'time zone'
  },
  //full date
  {
    character: 'c',
    description: 'Дата в формате стандарта ISO 8601',
    category: 'full date'
  },
  {
    character: 'r',
    description: 'Дата в формате » RFC 222/» RFC 5322',
    category: 'full date'
  },
  {
    character: 'U',
    description: 'Количество секунд, прошедших с начала Эпохи Unix (1 января 1970 00:00:00 GMT)',
    category: 'full date'
  },
];


window.addEventListener("load", function () {
  const container_sourse = document.querySelector('.constructor__items-container');
  const day_container = document.querySelector('.items__day-container');
  const month_container = document.querySelector('.items__month-container');
  const year_container = document.querySelector('.items__year-container');
  const time_container = document.querySelector('.items__time-container');
  const timeZone_container = document.querySelector('.items__timeZone-container');
  const fullDate_container = document.querySelector('.items__fullDate-container');
  characters.forEach(char => {
    const item_template = document.querySelector('.item-template').content.cloneNode(true);
    item_template.querySelector('.constructor__item-text').innerText = char.character;

    if (char.category == 'day') {
      day_container.append(item_template);
    }
    if (char.category == 'month') {
      month_container.append(item_template);
    }
    if (char.category == 'year') {
      year_container.append(item_template);
    }
    if (char.category == 'time') {
      time_container.append(item_template);
    }
    if (char.category == 'time zone') {
      timeZone_container.append(item_template);
    }
    if (char.category == 'full date') {
      fullDate_container.append(item_template);
    }
    // container_sourse.append(item_template);

    // container_sourse.insertAdjacentElement('beforeend', item_template);
    // container_sourse.insertAdjacentHTML('beforeend',
    //   // '<p class="constructor__item constructor__item-source" data-tooltip="' + char.description + '" draggable="true">' + char.character + '</p>')
    //   // '<div class="constructor__item constructor__item-source" draggable="true" data-tooltip="' + char.description + '"> <p class="text">' + char.character +'</p> <span class="badge">-</span></div>');
    //   '<div class="constructor__item constructor__item-source" draggable="true" data-tooltip="' + char.description + '"> <p class="constructor__item-text">' + char.character + '</p></div>');
  });


  addListener();


  if (document.querySelector('.form-check-input').checked) {
    document.querySelector('.add-timestamp-form').insertAdjacentHTML('beforeend', '<input type="text" class="form-control timestamp-input" placeholder="int $timestamp =">')
  }
})

document.querySelector('.form-check-input').addEventListener('click', () => {
  if (document.querySelector('.form-check-input').checked) {
    document.querySelector('.add-timestamp-form').insertAdjacentHTML('beforeend', '<input type="text" class="form-control timestamp-input" placeholder="int $timestamp =">')
  } else {
    document.querySelector('.timestamp-input').remove();
  }
})

const container_sourse = document.querySelector('.constructor__items-container-sources');
const container_result = document.querySelector('.constructor__items-container-result');

export let draggableElement = null;
let selectedElement = null;

function addListener() {
  const draggables = document.querySelectorAll('.constructor__item');

  draggables.forEach(draggable => {
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
      if (event.target.tagName != "SPAN") {

        const item_template = document.querySelector('.itemWithBadge-template').content.cloneNode(true);

        item_template.querySelector('.constructor__item-text').innerText = draggable.querySelector('.constructor__item-text').textContent;
        item_template.querySelector('.constructor__item-badge').innerText = '-';
        item_template.querySelector('.constructor__item-badge').addEventListener('click', event => {
          event.target.closest('div.constructor__item').remove();
          codeGenerator()
        });

        // const newElement = draggable.cloneNode(true);
        // newElement.classList.remove('constructor__item-source');
        // newElement.classList.add('constructor__item-custom');

        // const newBadge = document.createElement('span');
        // newBadge.classList.add('constructor__item-badge');
        // newBadge.innerText = '-';

        // newBadge.addEventListener('click', () => {
        //   deleteElement(newElement, container_result);
        //   codeGenerator();
        // });
        // newElement.appendChild(newBadge);

        container_result.appendChild(item_template);

        codeGenerator();
      }
    })
  })
}




container_sourse.addEventListener('dragstart', event => {
  event.dataTransfer.effectAllowed = 'move';
  draggableElement = event.target.cloneNode(true);

  // const item_template = document.querySelector('.itemWithBadge-template').content.cloneNode(true);
  // item_template.querySelector('.constructor__item-text').innerText = event.target.textContent;
  // item_template.querySelector('.constructor__item-badge').innerText = '-';
  // draggableElement = item_template;
})
container_sourse.addEventListener('dragover', event => {
  event.preventDefault()
})
container_sourse.addEventListener('drop', event => {
  // console.log('sourse drop')
  if (Array.from(container_result.childNodes).includes(selectedElement)) {
    container_result.removeChild(selectedElement);
  }
  codeGenerator();
})
container_sourse.addEventListener('dragend', event => {

  draggableElement.classList.remove('constructor__item-source');
  draggableElement.classList.add('constructor__item-custom');

  const newBadge = document.createElement('span');
  newBadge.classList.add('position-absolute');
  newBadge.classList.add('top-0');
  newBadge.classList.add('start-100');
  newBadge.classList.add('translate-middle');
  newBadge.classList.add('constructor__item-badge');
  newBadge.classList.add('badge');
  newBadge.classList.add('rounded-pill');
  newBadge.classList.add('bg-danger');
  newBadge.innerText = '-';
  newBadge.addEventListener('click', event => {
    event.target.closest('div.constructor__item').remove();
    codeGenerator()
  });
  draggableElement.appendChild(newBadge);
})

//swap elements in constructor
container_result.addEventListener('dragover', event => {
  event.preventDefault();
  const afterElement = getDragAfterElement(container_result, event.clientY, event.clientX);
  let draggable = null;
  if (draggableElement != null) {
    draggable = draggableElement;
  } else {
    draggable = document.querySelector('.constructor__item_dragging');
  }
  // console.log(draggable, afterElement);
  if (afterElement == null) {
    container_result.appendChild(draggable);
  } else {
    container_result.insertBefore(draggable, afterElement);
  }

})


container_result.addEventListener('dragstart', event => {
  event.target.classList.add('constructor__item_dragging');
  selectedElement = event.target;
})

container_result.addEventListener('dragend', event => {
  console.log('result dragend');
  // console.log(event.target.parentNode.classList)
  event.target.classList.remove('constructor__item_dragging');
  codeGenerator();
  draggableElement = null;
})


function getDragAfterElement(container, y, x) {
  const draggableElements = [...container.querySelectorAll('.constructor__item:not(.constructor__item_dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset_y = y - box.top - (box.height / 2);
    const offset_x = x - box.left - box.width / 2;
    const distance = Math.sqrt(offset_x * offset_x + offset_y * offset_y);

    if (distance < closest.distance) {
      return { distance: distance, element: child };
    } else {
      return closest;
    }
  }, { distance: Number.POSITIVE_INFINITY }).element;
}

