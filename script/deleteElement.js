export function deleteElement(element, container) {
  if (Array.from(container.childNodes).includes(element)) {
    container.removeChild(element);
  }

}
