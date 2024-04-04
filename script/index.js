import { deleteElement } from "./deleteElement.js";
import { addEvent } from "./addEventOnDraggable.js";
import { codeGenerator } from "./codeGenerator.js";



const characters = [
  //day
  {
    character: 'd',
    description: 'День месяца, 2 цифры с ведущим нулём'
  },
  {
    character: 'D',
    description: 'Текстовое представление дня недели, 3 символа'
  },
  {
    character: 'j',
    description: 'День месяца без ведущего нуля'
  },
  {
    character: 'l',
    description: 'Полное наименование дня недели'
  },
  {
    character: 'N',
    description: 'Порядковый номер дня недели ISO 8601 (от 1 до 7)'
  },
  {
    character: 'S',
    description: 'Английский суффикс порядкового числительного дня месяца, 2 символа'
  },
  {
    character: 'w',
    description: 'Порядковый номер дня недели'
  },
  {
    character: 'z',
    description: 'Порядковый номер дня в году (начиная с 0)'
  },
  //week
  {
    character: 'W',
    description: 'Порядковый номер недели года в соответствии со стандартом ISO 8601; недели начинаются с понедельника'
  },
  //month
  {
    character: 'F',
    description: 'Полное наименование месяца, например, January или March'
  },
  {
    character: 'm',
    description: 'Порядковый номер месяца с ведущим нулём'
  },
  {
    character: 'M',
    description: 'Сокращённое наименование месяца, 3 символа'
  },
  {
    character: 'n',
    description: 'Порядковый номер месяца без ведущего нуля'
  },
  {
    character: 't',
    description: 'Количество дней в указанном месяце'
  },
  //year
  {
    character: 'L',
    description: 'Признак високосного года 	1, если год високосный, иначе 0.'
  },
  {
    character: 'o',
    description: 'Номер года в соответствии со стандартом ISO 8601'
  },
  {
    character: 'X',
    description: 'Расширенное полное числовое представление года, не менее 4 цифр, с - для годов до нашей эры и + для годов нашей эры.'
  },
  {
    character: 'x',
    description: 'Расширенное полное числовое представление, если требуется, или стандартное полное числовое представление, если возможно'
  },
  {
    character: 'Y',
    description: 'Полное числовое представление года, не менее 4 цифр, с - для годов до нашей эры.'
  },
  {
    character: 'y',
    description: 'Номер года, 2 цифры'
  },
  //time
  {
    character: 'a',
    description: 'Ante meridiem или Post meridiem в нижнем регистре'
  },
  {
    character: 'A',
    description: 'Ante meridiem или Post meridiem в верхнем регистре'
  },
  {
    character: 'B',
    description: 'Время в формате Интернет-времени (альтернативной системы отсчёта времени суток). От 000 до 999'
  },
  {
    character: 'g',
    description: 'Часы в 12-часовом формате без ведущего нуля'
  },
  {
    character: 'G',
    description: 'Часы в 24-часовом формате без ведущего нуля'
  },
  {
    character: 'h',
    description: 'Часы в 12-часовом формате с ведущим нулём'
  },
  {
    character: 'H',
    description: 'Часы в 24-часовом формате с ведущим нулём'
  },
  {
    character: 'i',
    description: 'Минуты с ведущим нулём'
  },
  {
    character: 's',
    description: 'Секунды с ведущим нулём'
  },
  {
    character: 'u',
    description: 'Микросекунды'
  },
  {
    character: 'v',
    description: 'Миллисекунды. Замечание такое же, как и для u. '
  },
  //time zone
  {
    character: 'e',
    description: 'Идентификатор часового пояса'
  },
  {
    character: 'I',
    description: 'Признак летнего времени: 1, если дата соответствует летнему времени, 0 в противном случае'
  },
  {
    character: 'O',
    description: 'Разница со временем по Гринвичу без двоеточия между часами и минутами'
  },
  {
    character: 'P',
    description: 'Разница со временем по Гринвичу с двоеточием между часами и минутами'
  },
  {
    character: 'p',
    description: 'То же, что и P, но возвращает Z вместо +00:00 (доступен, начиная с PHP 8.0.0) '
  },
  {
    character: 'T',
    description: 'Аббревиатура часового пояса, если известна; в противном случае смещение по Гринвичу.'
  },
  {
    character: 'Z',
    description: 'Смещение часового пояса в секундах'
  },
  //full date
  {
    character: 'c',
    description: 'Дата в формате стандарта ISO 8601'
  },
  {
    character: 'r',
    description: 'Дата в формате » RFC 222/» RFC 5322'
  },
  {
    character: 'U',
    description: 'Количество секунд, прошедших с начала Эпохи Unix (1 января 1970 00:00:00 GMT)'
  },
];


window.addEventListener("load", function () {
  const container_sourse = document.querySelector('.constructor__items-container');
  characters.forEach(char => {
    container_sourse.insertAdjacentHTML('beforeend',
      // '<p class="constructor__item constructor__item-source" data-tooltip="' + char.description + '" draggable="true">' + char.character + '</p>')
      // '<div class="constructor__item constructor__item-source" draggable="true" data-tooltip="' + char.description + '"> <p class="text">' + char.character +'</p> <span class="badge">-</span></div>');
      '<div class="constructor__item constructor__item-source" draggable="true" data-tooltip="' + char.description + '"> <p class="constructor__item-text">' + char.character + '</p></div>');
  })
  addListener();

})

const container_sourse = document.querySelector('.constructor__items-container-sources');
const container_result = document.querySelector('.constructor__items-container-result');

export let draggableElement = null;
let selectedElement = null;


function addListener() {
  const draggables = document.querySelectorAll('.constructor__item');

  draggables.forEach(draggable => {
    addEvent(draggable, draggableElement);
  })
}




container_sourse.addEventListener('dragstart', event => {
  event.dataTransfer.effectAllowed = 'move';
  draggableElement = event.target.cloneNode(true);
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
  newBadge.classList.add('constructor__item-badge');
  newBadge.innerText = '-';
  newBadge.addEventListener('click', () => {
    deleteElement(draggableElement, container_result);
    codeGenerator();
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

