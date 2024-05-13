function getUnixTime() {
  return Math.floor(Date.now() / 1000);
}

setInterval(function () {
  document.querySelector('.unix').innerHTML = getUnixTime();


}, 1000);

// display at page load
document.querySelector('.unix').innerHTML = getUnixTime();



const container = document.querySelector('.normalize-time__container');

function EpochToHuman() {


  if (document.querySelector('.normalize-time__result') == null) {
    container.insertAdjacentHTML('afterbegin', '<p class="normalize-time__result"></p>');
    container.insertAdjacentHTML('beforeend', '<input type="button" class="normalize-time__close btn btn-outline-light" value="Close" onclick="hideHumanTime();">');
    document.querySelector('.normalize-time__button').setAttribute('value', 'Reset');
  }

  let date = new Date(document.querySelector('.unix').textContent * 1000);
  document.querySelector('.normalize-time__result').innerHTML = "<b>GMT</b>: " + date.toGMTString() +
    "<br /><b>GMT" + (date.getTimezoneOffset() < 0 && '+') + (-1) * date.getTimezoneOffset() / 60 + '</b>: ' + date.toLocaleString();

}

function hideHumanTime() {
  document.querySelector('.normalize-time__result').remove();
  document.querySelector('.normalize-time__close').remove();
  document.querySelector('.normalize-time__button').setAttribute('value', 'Convert');
}
