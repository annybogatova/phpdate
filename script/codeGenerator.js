export function codeGenerator() {

  let result_line = '';

  Array.from(document.querySelectorAll('.constructor__items-container-result .constructor__item-text')).forEach(child => {
    result_line += child.textContent;
  })



  console.log(result_line);
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
      document.querySelector('.constructor__result-text').innerHTML = ' $date = new DateTime(); <br> echo $date->format(string $format);';
      if (result_line != '') {
        // document.querySelector('.constructor__result-text').textContent = 'date( \'' + result_line + '\', ?int $timestamp = null): string';
        document.querySelector('.constructor__result-text').innerHTML = '$date = new DateTime(); <br> echo $date->format(\'' + result_line + '\');';
      }
      document.querySelector('.constructor_result-date').innerHTML = '';
      if (data.toString() != '') {
        document.querySelector('.result-date').style.display = 'block';
      }
      document.querySelector('.constructor_result-date').textContent = data.toString();

    });
}
