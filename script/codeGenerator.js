export function codeGenerator() {

  let result_line = '';

  Array.from(document.querySelectorAll('.constructor__items-container-result .constructor__item-text')).forEach(child => {
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
      if (result_line != '') {
        document.querySelector('.constructor__result-text').textContent = 'date( \'' + result_line + '\', ?int $timestamp = null): string';
      }
      document.querySelector('.constructor_result-date').innerHTML = '';
      document.querySelector('.constructor_result-date').textContent = data.toString();
    });
}